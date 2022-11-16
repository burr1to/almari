from fastapi import status, APIRouter, Request, HTTPException, Depends
from fastapi.responses import HTMLResponse, JSONResponse
from sqlalchemy.orm import Session
from ..oauth2 import get_current_user, verify_access_token
from ..models import Users
from ..schema import SignupModel
from fastapi.templating import Jinja2Templates
from ..oauth2 import verify_verification_token
from .. import database


router = APIRouter(
    prefix="/verification",
    tags=["Email Verification"],
)

templates = Jinja2Templates(directory='..templates')


@router.get('/')
async def email_verify(request: Request, token: str, db: Session = Depends(database.get_db)):
    user_id = verify_verification_token(token)
    user = db.query(Users).filter(Users.id == user_id.id).first()
    if user and not user.is_verified:
        user.is_verified = True
        db.commit()
        return JSONResponse(status_code=200, content = {"message": "success"})
    raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED,
                        detail=f"Token invalid or token expired", headers={'WWW-Authenticate': 'Bearer'})
