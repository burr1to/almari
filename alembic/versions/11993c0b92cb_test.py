"""test

Revision ID: 11993c0b92cb
Revises: 54e7a23c2b84
Create Date: 2022-11-11 09:43:38.724446

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '11993c0b92cb'
down_revision = '54e7a23c2b84'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column('posts', sa.Column('krist0', sa.String()))



def downgrade() -> None:
    op.drop_column('posts', 'krist0')
