"""add name and number to sign up

Revision ID: 54e7a23c2b84
Revises: cd2208e4dacd
Create Date: 2022-11-05 19:21:18.182623

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '54e7a23c2b84'
down_revision = 'cd2208e4dacd'
branch_labels = None
depends_on = None


def upgrade() -> None:
    op.add_column('users', sa.Column('name', sa.String(), nullable = False),
    sa.Column('phone_number', sa.Integer(), nullable = False))
    pass


def downgrade() -> None:
    op.drop_column('users', 'name')
    op.drop_column('users', 'phone_number')
    pass
