from fastapi import FastAPI, HTTPException
from app.services.langgraph_service import process_query

app = FastAPI()

@app.post("/chat")
async def chat(query: str):
    try:
        response = process_query(query)
        return {"response": response}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))

