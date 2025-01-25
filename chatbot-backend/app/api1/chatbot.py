from fastapi import APIRouter
from app.services.langgraph_service import process_query

router = APIRouter()

@router.post("/")
async def chat(query: str):
    response = process_query(query)
    return {"message": response}
