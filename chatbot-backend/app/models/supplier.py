from sqlalchemy import Column, Integer, String
from app.database.db import Base

class Supplier(Base):
    __tablename__ = "suppliers"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    contact_info = Column(String)
    product_categories = Column(String)
