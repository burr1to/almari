from pydantic import BaseSettings
from typing import Optional
from pydantic import EmailStr

class Settings(BaseSettings):
    database_hostname: str
    database_port: str
    database_name: str
    database_username: str
    database_password: str
    secret_key: str
    algorithm: str
    access_token_expire_minutes: int

    SMTP_TLS: bool
    SMTP_PORT: Optional[int]
    SMTP_HOST: Optional[str]
    SMTP_USER: Optional[str]
    SMTP_PASSWORD: Optional[str]

    EMAILS_FROM_EMAIL: Optional[str]

    project_name: str

    @property
    def EMAILS_FROM_NAME(self):
        return self.project_name
    
    frontend_url_base: str

    class Config:
        env_file = ".env"

settings = Settings()