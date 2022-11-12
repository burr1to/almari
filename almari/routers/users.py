from fastapi import status, Depends, APIRouter, HTTPException
from sqlalchemy.orm  import Session
from .. import schema, database, models, utils

router = APIRouter(
    prefix= "/users",
    tags = ["User"],
)

# create user
@router.post("/", status_code = status.HTTP_201_CREATED, response_model= schema.ReturnUser)
def create_user(user: schema.SignupModel, db: Session = Depends(database.get_db) ):
    
    hashed_password = utils.hash(user.password)
    user.password = hashed_password

    new_user = models.Users(**user.dict())
    db.add(new_user)
    db.commit()
    db.refresh(new_user)
    return new_user


# get user
@router.get('/{id}', response_model= schema.ReturnUser)
def get_user(id:int, db: Session = Depends(database.get_db)):

    user = db.query(models.Users).filter(models.Users.id == id).first()
    if not user:
        raise HTTPException(status_code= status.HTTP_404_NOT_FOUND, detail = 
        f"User with id {id} does not exists. ")
    return user