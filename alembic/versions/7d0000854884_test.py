"""test

Revision ID: 7d0000854884
Revises: 11993c0b92cb
Create Date: 2022-11-13 23:47:54.575208

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '7d0000854884'
down_revision = '11993c0b92cb'
branch_labels = None
depends_on = None


def upgrade() -> None: 
    op.add_column('posts', sa.Column('name', sa.String(), nullable = False));


def downgrade() -> None:
        op.drop_column('posts',"name");
