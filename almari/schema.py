from pydantic import BaseModel, EmailStr
from datetime import datetime
from typing import Optional, List
from pydantic.types import conint


# schema for users
class SignupModel(BaseModel):
    name: str
    phone_number: int
    email: EmailStr
    password: str


class ReturnUser(BaseModel):
    id: int
    name: str
    email: EmailStr
    phone_number: int
    created_at: datetime

    class Config:
        orm_mode = True


# schema for token
class Token(BaseModel):
    access_token: str
    token_type: str


class Tokendata(BaseModel):
    id: Optional[str] = None


# schema for posts
class PostBase(BaseModel):
    category: str
    title: str
    description: str
    price: int
    stock: int

    class Config:  # converts sequel alchemy model into pydantic model
        orm_mode = True


class PostCreate(PostBase):
    pass


class PostOut(PostBase):
    id: int
    owner_id: int
    created_at: datetime
    owner: ReturnUser
    post_img: str


class SetupShop(BaseModel):
    shop_name: str
    shop_location: str
    shop_description: str


class EditShop(SetupShop):
    pass


class ShopOut(SetupShop):
    id: int
    owner_id: int
    created_at: datetime
    owner: ReturnUser

    class Config:  # converts sequel alchemy model into pydantic model
        orm_mode = True


class Like(BaseModel):
    post_id: int
    dir: conint(le=1)


class CartBase(BaseModel):
    quantity: int

    class Config:
        orm_mode = True


class CartAdd(CartBase):
    pass


class CartOut(CartBase):
    id: int
    owner_id: int
    product_id: int
    product: PostBase


class RatingBase(BaseModel):
    rating: conint(le=5)
    review: Optional[str]

    class Config:
        orm_mode = True


class RatingOut(RatingBase):
    id: int
    owner_id: int
    product_id: int
    
