# 📘 Assignment: Building REST APIs with FastAPI

## 🎯 Objective

Create a REST API using FastAPI framework that manages a collection of items. You'll learn to handle HTTP requests, create endpoints, and work with request/response data models.

## 📝 Tasks

### 🛠️ Set Up FastAPI Application

#### Description
Initialize a FastAPI application and create basic endpoints for managing a simple resource like "tasks" or "items".

#### Requirements
Completed program should:

- Create a FastAPI app instance
- Define at least one GET endpoint that returns a list of items
- Include proper endpoint documentation with docstrings
- Run the server and verify it starts without errors

### 🛠️ Implement CRUD Operations

#### Description
Add full CRUD (Create, Read, Update, Delete) functionality to your API with proper HTTP methods and status codes.

#### Requirements
Completed program should:

- Implement POST endpoint to create new items
- Add PUT/PATCH endpoint to update existing items
- Create DELETE endpoint to remove items
- Use appropriate HTTP status codes (200, 201, 404, etc.)
- Handle cases where items don't exist

### 🛠️ Add Data Validation

#### Description
Implement Pydantic models for request and response validation, ensuring data integrity and proper error handling.

#### Requirements
Completed program should:

- Define Pydantic models for item data
- Validate incoming request data automatically
- Return structured error responses for invalid data
- Include example request/response schemas in documentation