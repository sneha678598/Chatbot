from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from app.database.db import get_db
from app.models.product import Product

router = APIRouter()

@router.get("/")
def get_products(db: Session = Depends(get_db), brand: str = None, category: str = None):
    query = db.query(Product)
    if brand:
        query = query.filter(Product.brand == brand)
    if category:
        query = query.filter(Product.category == category)
    return query.all()
