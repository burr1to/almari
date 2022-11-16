from jose import JWTError, jwt
from fastapi.security import OAuth2PasswordBearer
from .config import settings
from datetime import datetime, timedelta
from fastapi import Depends, HTTPException, status
from . import database, models, schema
from sqlalchemy.orm import Session


oauth2_scheme = OAuth2PasswordBearer(tokenUrl="login")

SECRET_KEY = settings.secret_key
ALGORITHM = settings.algorithm
ACCESS_TOKEN_EXPIRE_MINUTES = settings.access_token_expire_minutes

def create_access_token(data:dict):
    to_encode = data.copy()

    expire = datetime.utcnow() + timedelta(minutes = ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp" : expire})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm= ALGORITHM)

    return encoded_jwt

def verify_access_token(token:str, credentials_exception):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        id:str =  payload.get("user_id")
        if id is None:
            raise credentials_exception
        token_data = schema.Tokendata(id=id)

    except JWTError:
        raise credentials_exception
    return token_data

def get_current_user(token: str = Depends(oauth2_scheme), db: Session = Depends(database.get_db)):
    credentials_exception = HTTPException(status_code= status.HTTP_404_NOT_FOUND, 
                                        detail = f"Could not validate credentials", 
                                        headers= {"WWW_Authenticate" : "Bearer"})

    token = verify_access_token(token, credentials_exception)
    user = db.query(models.Users).filter(models.Users.id == token.id).first()
    return user

def create_verification_token(user:models.Users):
    to_encode = {
        "user_id": user.id
    }
    from fastapi.encoders import jsonable_encoder
    print(to_encode)
    print(jsonable_encoder(user))
    expire = datetime.utcnow() + timedelta(minutes = ACCESS_TOKEN_EXPIRE_MINUTES)
    to_encode.update({"exp" : expire, "token_type": 2})

    encoded_jwt = jwt.encode(to_encode, SECRET_KEY, algorithm= ALGORITHM)

    return encoded_jwt

def verify_verification_token(token:str):
    try:
        payload = jwt.decode(token, SECRET_KEY, algorithms=[ALGORITHM])
        print(payload)
        user_id:str =  payload.get("user_id")
        token_type = payload.get("token_type")
        if user_id is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"Invalid or expired Token")
        if token_type != 2:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"Invalid or expired Token")
        token_data = schema.Tokendata(id=user_id)

    except JWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail=f"Invalid or expired Token")
    return token_data

