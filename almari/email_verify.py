from fastapi import (
    BackgroundTasks,
    UploadFile,
    File,
    Form,
    Depends,
    HTTPException,
    status,
)
from dotenv import dotenv_values
from pydantic import BaseModel, EmailStr
from typing import List, Dict, Any
from . import models
import emails
from emails.template import JinjaTemplate
import os
from .config import settings
from .oauth2 import create_verification_token


def send_email(
    email_to: str,
    subject_template: str = "",
    html_template: str = "",
    environment: Dict[str, Any] = {},
) -> None:
    message = emails.Message(
        subject=JinjaTemplate(subject_template),
        html=JinjaTemplate(html_template),
        mail_from=(settings.EMAILS_FROM_NAME, settings.EMAILS_FROM_EMAIL),
    )
    smtp_options = {"host": settings.SMTP_HOST, "port": settings.SMTP_PORT}
    if settings.SMTP_TLS:
        smtp_options["tls"] = True
    if settings.SMTP_USER:
        smtp_options["user"] = settings.SMTP_USER
    if settings.SMTP_PASSWORD:
        smtp_options["password"] = settings.SMTP_PASSWORD

    response = message.send(to=email_to, render=environment, smtp=smtp_options)


async def send_verification_email(user: models.Users) -> None:
    project_name = settings.project_name
    subject = f"{project_name} - Verification Email"
    print(os.getcwd())
    with open("almari/templates/verification.html") as f:
        template_str = f.read()
    verification_token = create_verification_token(user)
    # server_host = settings.frontend_url_base
    link = f"http://localhost:8000/verification/?token={verification_token}"
    send_email(
        email_to=user.email,
        subject_template=subject,
        html_template=template_str,
        environment={"name": user.name, "link": link},
    )


# config_credentials = dict(dotenv_values(".env"))
# conf = ConnectionConfig(
#     MAIL_USERNAME = config_credentials["EMAIL"],
#     MAIL_PASSWORD = config_credentials["PASSWORD"],
#     MAIL_FROM = config_credentials["EMAIL"],
#     MAIL_PORT = 1025,
#     MAIL_SERVER = "localhost",
#     MAIL_TLS = False,
#     MAIL_SSL = False,
#     USE_CREDENTIALS = True
# )

# async def send_email(email : List, instance: models.Users):

#     token_data = {
#         "id" : instance.id,
#         "username" : instance.username
#     }

#     token = jwt.encode(token_data, config_credentials["SECRET_KEY"], algorithm='HS256')

#     template = f"""
#         <!DOCTYPE html>
#         <html>
#         <head>
#         </head>
#         <body>
#             <div style=" display: flex; align-items: center; justify-content: center; flex-direction: column;">
#                 <h3> Account Verification </h3>
#                 <br>
#                 <p>Thanks for choosing Almari, please
#                 click on the link below to verify your account</p>
#                 <a style="margin-top:1rem; padding: 1rem; border-radius: 0.5rem; font-size: 1rem; text-decoration: none; background: #0275d8; color: white;"
#                  href="http://localhost:8000/verification/?token={token}">
#                     Verify your email
#                 <a>
#                 <p style="margin-top:1rem;">If you did not register for Almari,
#                 please kindly ignore this email. Thanks<p>
#             </div>
#         </body>
#         </html>
#     """

#     message = MessageSchema(
#         subject="Almari Account Verification Mail",
#         recipients=email,  # List of recipients, as many as you can pass
#         body=template,
#         subtype="html"
#         )

#     fm = FastMail(conf)
#     await fm.send_message(message)
