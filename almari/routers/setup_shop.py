from fastapi import APIRouter, HTTPException, status, Depends, File, UploadFile, Form
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from .. import oauth2, models, utils, schema, database
import secrets
from fastapi.staticfiles import StaticFiles
from PIL import Image
import shutil

router = APIRouter(prefix="/setup", tags=["Shops"])


class CreateShopForm:
    def init(
        self,
        shop_name: str = Form(...),
        shop_category: str = Form(...),
        shop_description: str = Form(...),
        file: UploadFile = File(...),
    ):
        self.shop_name = shop_name
        self.shop_category = shop_category
        self.shop_description = shop_description
        self.file = file


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schema.ShopOut)
def setup_shop(
    db: Session = Depends(database.get_db),
    current_user: int = Depends(oauth2.get_current_user),
    form: CreateShopForm = Depends(),
):
    FILEPATH = "./static/images/"
    urls = ""

    filename = form.file.filename
    extension = filename.split(".")[1]

    if extension not in ["png", "jpg", "jpeg"]:
        return {"status": "error", "detail": "File extension not allowed"}

    token_name = secrets.token_hex(10) + "." + extension
    generated_name = FILEPATH + token_name

    with open(generated_name, "wb") as image:
        shutil.copyfileobj(form.file.file, image)
    url = "localhost:8000" + generated_name[1:]
    urls = urls + url + ","

    new_post = models.Shops(
        owner_id=current_user.id,
        profile_picture=url,
        shop_name=form.shop_name,
        shop_category=form.shop_category,
        shop_description=form.shop_description,
    )
    db.add(new_post)
    db.commit()
    db.refresh(new_post)

    return new_post


@router.get(
    "/{shop_name}", status_code=status.HTTP_200_OK, response_model=schema.ShopOut
)
def getOneShop(shop_name: str, db: Session = Depends(database.get_db)):
    shop = db.query(models.Shops).filter(models.Shops.shop_name == shop_name).first()
    if not shop:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"The shop with name {shop_name} not found",
        )
    return shop


# edit profile
@router.put("/{id}", response_model=schema.ShopOut)
def updated_shop(
    id: int,
    updated_user: schema.EditShop,
    db: Session = Depends(database.get_db),
    current_user: int = Depends(oauth2.get_current_user),
):
    shop_query = db.query(models.Shops).filter(models.Shops.id == id)
    shop = shop_query.first()

    if shop == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Post with id:{id} not found"
        )
    if shop.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail=f"Not Authorized"
        )

    shop_query.update(updated_user.dict(), synchronize_session=False)
    db.commit()

    return shop_query.first()
