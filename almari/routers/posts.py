import shutil
from fastapi import (
    APIRouter,
    File,
    HTTPException,
    UploadFile,
    status,
    Depends,
    Response,
    Form,
)
from sqlalchemy.orm import Session
from .. import database, models, oauth2, schema, utils
import secrets
from PIL import Image
from typing import List, Optional
import os


router = APIRouter(prefix="/posts", tags=["Posts"])


# static file setup config\
class CreatePostForm:
    def __init__(
        self,
        category: str = Form(...),
        title: str = Form(...),
        description: str = Form(...),
        price: int = Form(...),
        stock: int = Form(...),
        file: List[UploadFile] = File(...),
    ):
        self.category = category
        self.title = title
        self.description = description
        self.price = price
        self.stock = stock
        self.file = file


# create post
@router.post("/", status_code=status.HTTP_201_CREATED, response_model=schema.PostOut)
def createpost(
    db: Session = Depends(database.get_db),
    current_user: int = Depends(oauth2.get_current_user),
    form: CreatePostForm = Depends(),
):

    FILEPATH = "./static/images/"
    urls = ""
    for file in form.file:
        filename = file.filename
        extension = filename.split(".")[1]

        if extension not in ["png", "jpg", "jpeg"]:
            return {"status": "error", "detail": "File extension not allowed"}

        token_name = secrets.token_hex(10) + "." + extension
        generated_name = FILEPATH + token_name

        with open(generated_name, "wb") as image:
            shutil.copyfileobj(file.file, image)
        url = "localhost:8000" + generated_name[1:]
        urls = urls + url + ","

    new_post = models.Posts(
        owner_id=current_user.id,
        post_img=urls,
        category=form.category,
        title=form.title,
        description=form.description,
        price=form.price,
        stock=form.stock,
    )
    db.add(new_post)
    db.commit()
    db.refresh(new_post)

    return new_post


# delete a post
@router.delete("/{id}", status_code=status.HTTP_204_NO_CONTENT)
def delete_post(
    id: int,
    db: Session = Depends(database.get_db),
    current_user: int = Depends(oauth2.get_current_user),
):

    post_query = db.query(models.Posts).filter(models.Posts.id == id)
    post = post_query.first()
    if post == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Post with id:{id} not found"
        )
    if post.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail=f"Not Authorized"
        )

    post_query.delete(synchronize_session=False)
    db.commit()
    # in delete we usually don't return anything so only the response is given
    return Response(status_code=status.HTTP_204_NO_CONTENT)


# update a post
@router.put("/{id}", response_model=schema.PostOut)
def update_post(
    id: int,
    updated_post: schema.PostCreate,
    db: Session = Depends(database.get_db),
    current_user: int = Depends(oauth2.get_current_user),
):
    post_query = db.query(models.Posts).filter(models.Posts.id == id)
    post = post_query.first()

    if post == None:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail=f"Post with id:{id} not found"
        )
    if post.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail=f"Not Authorized"
        )

    post_query.update(updated_post.dict(), synchronize_session=False)
    db.commit()

    return post_query.first()


# get all posts
@router.get("/", status_code=status.HTTP_200_OK, response_model=List[schema.PostOut])
def getAllPosts(
    search: Optional[str] = "",
    limit: int = 5,
    skip: int = 0,
    db: Session = Depends(database.get_db),
):

    posts = (
        db.query(models.Posts)
        .filter(models.Posts.title.contains(search))
        .limit(limit)
        .offset(skip)
        .all()
    )
    return posts


# get one post
@router.get("/{id}", status_code=status.HTTP_200_OK, response_model=schema.PostOut)
def getOnePost(id: int, db: Session = Depends(database.get_db)):
    post = db.query(models.Posts).filter(models.Posts.id == id).first()
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND,
            detail=f"The post with id {id} not found",
        )
    return post
