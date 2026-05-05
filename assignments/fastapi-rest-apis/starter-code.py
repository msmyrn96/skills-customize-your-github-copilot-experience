from fastapi import FastAPI, HTTPException
from pydantic import BaseModel
from typing import List, Optional

app = FastAPI(title="Task Manager API", description="A simple REST API for managing tasks")

# TODO: Define your Pydantic models here
class Task(BaseModel):
    id: int
    title: str
    description: Optional[str] = None
    completed: bool = False

# TODO: Add your in-memory data storage here
tasks = []

@app.get("/")
async def root():
    return {"message": "Welcome to the Task Manager API"}

# TODO: Implement your endpoints here
@app.get("/tasks")
async def get_tasks():
    # Return all tasks
    pass

@app.post("/tasks")
async def create_task(task: Task):
    # Create a new task
    pass

@app.get("/tasks/{task_id}")
async def get_task(task_id: int):
    # Get a specific task by ID
    pass

@app.put("/tasks/{task_id}")
async def update_task(task_id: int, task: Task):
    # Update an existing task
    pass

@app.delete("/tasks/{task_id}")
async def delete_task(task_id: int):
    # Delete a task
    pass