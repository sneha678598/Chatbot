from sqlalchemy import Column, Integer, String, Float, ForeignKey
from app.database.db import Base

class Product(Base):
    __tablename__ = "products"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String, index=True)
    brand = Column(String, index=True)
    price = Column(Float)
    category = Column(String)
    description = Column(String)
    supplier_id = Column(Integer, ForeignKey("suppliers.id"))
