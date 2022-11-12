from .database import Base
from sqlalchemy import Column, Integer, String, TIMESTAMP, ForeignKey
from sqlalchemy.sql.expression import text
from sqlalchemy.orm import relationship

class Users(Base):
    __tablename__ = "users"

    id = Column(Integer, primary_key = True, nullable = False)
    name = Column(String, nullable = False)
    phone_number = Column(Integer, nullable = False)
    email = Column(String, nullable = False, unique = True)
    password = Column(String, nullable = False)
    created_at = Column(TIMESTAMP(timezone = True), nullable = False, server_default = text('now()'))
    

class Posts(Base):
    __tablename__ = "posts"

    id = Column(Integer, primary_key = True, nullable = True)
    category = Column(String, nullable = False)
    title = Column(String, nullable = False)
    description = Column(String, nullable = False)
    post_img = Column(String, nullable=False)
    created_at = Column(TIMESTAMP(timezone= True), nullable = False, server_default = text('now()'))
    owner_id = Column(Integer, ForeignKey("users.id", ondelete= "CASCADE"), nullable = False)
    owner = relationship("Users")
