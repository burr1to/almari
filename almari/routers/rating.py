from fastapi import APIRouter, HTTPException, status, Depends, Response
from sqlalchemy.orm import Session
from .. import database, models, oauth2, schema, utils
from typing import List


router = APIRouter(
    prefix="/rating",
    tags=["Rating And Review"])


@router.post('/{id}', status_code=status.HTTP_201_CREATED, response_model=schema.RatingOut)
def rating(id: int, rating: schema.RatingBase, db: Session = Depends(database.get_db),
           current_user: int = Depends(oauth2.get_current_user)):
    new_rating = models.Rating(owner_id=current_user.id,
                               product_id=id, **(rating.dict()))
    db.add(new_rating)
    db.commit()
    db.refresh(new_rating)
    return new_rating


@router.put("/{rating_id}", status_code=status.HTTP_200_OK, response_model=schema.RatingOut)
def update_rating(updated_item: schema.RatingBase, rating_id: int, db: Session = Depends(database.get_db), current_user: int = Depends(oauth2.get_current_user)):

    query = db.query(models.Rating).filter(models.Rating.id == rating_id)
    item = query.first()
    if item == None:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND,
                            detail=f"Rating with id:{rating_id} not found")

    if item.owner_id != current_user.id:
        raise HTTPException(
            status_code=status.HTTP_403_FORBIDDEN, detail=f"Not Authorized")

    query.update(updated_item.dict(), synchronize_session=False)
    db.commit()
    return query.first()