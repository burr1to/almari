from fastapi import FastAPI, status, Response, HTTPException, Depends, APIRouter
from .. import schema, database, models, oauth2
from sqlalchemy.orm import Session
from ..database import get_db
from typing import List


router = APIRouter(
    prefix='/liked',
    tags=['Liked Items']
)


@router.post("/", status_code=status.HTTP_201_CREATED)
def like(like: schema.Like, db: Session = Depends(get_db), current_user: int = Depends(oauth2.get_current_user)):

    post = db.query(models.Posts).filter(
        models.Posts.id == like.post_id).first()
    if not post:
        raise HTTPException(
            status_code=status.HTTP_404_NOT_FOUND, detail="Post not found.")

    like_query = db.query(models.Liked).filter(
        models.Liked.post_id == like.post_id, models.Liked.user_id == current_user.id)
    found_like = like_query.first()
    if (like.dir == 1):
        if found_like:
            raise HTTPException(
                status_code=status.HTTP_409_CONFLICT, detail="Already liked.")
        new_like = models.Liked(post_id=like.post_id, user_id=current_user.id)
        db.add(new_like)
        db.commit()
        return {"message": "Like successful."}
    else:
        if not found_like:
            raise HTTPException(
                status_code=status.HTTP_404_NOT_FOUND, detail="Like does not exist.")
        like_query.delete(synchronize_session=False)
        db.commit()

        return {"message": "unliked."}


@router.get('/', status_code=status.HTTP_200_OK)
def get_like(db: Session = Depends(database.get_db), current_user: int = Depends(oauth2.get_current_user)):
    user_id = current_user.id
    likes = db.query(models.Liked).filter(
        models.Liked.user_id == user_id).all()
    return likes
