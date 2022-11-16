from fastapi import APIRouter, HTTPException, status, Depends, File, UploadFile
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from .. import oauth2, models, utils, schema, database
import secrets
from fastapi.staticfiles import StaticFiles
from PIL import Image
import shutil

router = APIRouter(
    prefix="/setup",
    tags=['Shops']
)

@router.post('/', status_code=status.HTTP_201_CREATED)
def setup_shop(post: schema.SetupShop = Depends(), db: Session = Depends(database.get_db),
               current_user: int = Depends(oauth2.get_current_user), file: UploadFile = File(...)):

    filename = file.filename
    extension = filename.split(".")[1]

    if extension not in ["png", "jpg"]:
        return {"status": "error", "detail": "File extension not allowed"}

    token_name = secrets.token_hex(10) + "." + extension
    url = str("images/" + token_name)

    with open(url, "wb") as image:
        shutil.copyfileobj(file.file, image)

    new_post = models.Shops(owner_id=current_user.id,
                            profile_picture=url, **(post.dict()))
    db.add(new_post)
    db.commit()
    db.refresh(new_post)

    return new_post

@router.get("/{shop_name}", status_code=status.HTTP_200_OK, response_model=schema.ShopOut)
def getOneShop(shop_name: str, db: Session = Depends(database.get_db)):
    shop = db.query(models.Shops).filter(models.Shops.shop_name == shop_name).first()
    if not shop:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"The shop with name {shop_name} not found")
    return shop


#edit profile
@router.put("/{id}", response_model=schema.ShopOut)
def updated_shop(id: int, updated_user: schema.EditShop, db: Session = Depends(database.get_db),
                current_user: int = Depends(oauth2.get_current_user)):
    shop_query = db.query(models.Shops).filter(models.Shops.id == id)
    shop = shop_query.first()

    if shop == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Post with id:{id} not found")
    if shop.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail=f"Not Authorized")

    shop_query.update(updated_user.dict(), synchronize_session=False)
    db.commit()

    return shop_query.first()