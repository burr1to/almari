from ..email_verify import *
from fastapi.encoders import jsonable_encoder
from fastapi import APIRouter, HTTPException, status, Depends, File, UploadFile, Form
from fastapi.security.oauth2 import OAuth2PasswordRequestForm
from sqlalchemy.orm import Session
from .. import oauth2, models, utils, schema, database
import secrets
from fastapi.staticfiles import StaticFiles
from PIL import Image
import shutil
from almari.oauth2 import get_current_user

router = APIRouter(
    prefix="/users",
    tags=["User"],
)

# create user


@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schema.ReturnUser)
async def create_user(user: schema.SignupModel, db: Session = Depends(database.get_db)):

    hashed_password = utils.hash(user.password)
    user.password = hashed_password

    new_user = models.Users(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    await send_verification_email(new_user)
    return new_user


# get user
@router.get("/{id}", response_model=schema.ReturnUser)
def get_user(id: int, db: Session = Depends(database.get_db)):

    user = db.query(models.Users).filter(models.Users.id == id).first()
    if not user:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"User with id {id} does not exists. ",
        )
    return user


@router.get("/me/", response_model=schema.ReturnUser)
def get_me(
    user: models.Users = Depends(get_current_user),
    db: Session = Depends(database.get_db),
):
    return user


class CreateProfileForm:
    def init(
        self,
        facebook_url: str = Form(...),
        instagram_url: str = Form(...),
        twitter: str = Form(...),
        bio: str = Form(...),
        file: UploadFile = File(...),
    ):
        self.facebook_url = facebook_url
        self.instagram_url = instagram_url
        self.twitter = twitter
        self.bio = bio
        self.file = file


@router.post(
    "/profile",
    status_code=status.HTTP_201_CREATED,
    response_model=schema.ProfileOut,
)
def get_profile(
    db: Session = Depends(database.get_db),
    current_user: int = Depends(oauth2.get_current_user),
    form: CreateProfileForm = Depends(),
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

    new_post = models.Profile(
        user_id=current_user.id,
        pp=url,
        facebook_url=form.facebook_url,
        instagram_url=form.instagram_url,
        twitter=form.twitter,
        bio=form.bio,
    )
    db.add(new_post)
    print(jsonable_encoder(new_post))
    db.commit()
    db.refresh(new_post)

    return new_post
