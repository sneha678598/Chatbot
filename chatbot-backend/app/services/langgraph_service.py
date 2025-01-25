from langgraph.graph import Graph

from transformers import pipeline

# Initialize LangGraph and Hugging Face model
llm = pipeline("summarization")
graph = Graph()

def process_query(query):
    result = graph.process(query)
    summarized_result = llm(result[0])
    return summarized_result[0]['summary_text']
