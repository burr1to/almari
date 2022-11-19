from fastapi import FastAPI, status
from .database import engine
from . import models
from .routers import login, users, posts, setup_shop, verification, liked, cart, rating
from fastapi.middleware.cors import CORSMiddleware
from fastapi.staticfiles import StaticFiles

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = ["http://localhost:3000"]
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
app.mount("/static", StaticFiles(directory="static"), name="static")


@app.get("/", status_code=status.HTTP_200_OK)
def greeting():
    return {"greeting": "Welcome to Almari"}


app.include_router(login.router)
app.include_router(users.router)
app.include_router(posts.router)
app.include_router(setup_shop.router)
app.include_router(verification.router)
app.include_router(liked.router)
app.include_router(cart.router)
app.include_router(rating.router)
