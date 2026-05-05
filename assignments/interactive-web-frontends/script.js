// Interactive Web Frontend - JavaScript Code
// TODO: This is starter code for the interactive web frontend assignment

// API base URL - change this to match your FastAPI server
const API_BASE_URL = 'http://localhost:8000';

// DOM elements
const taskForm = document.getElementById('new-task-form');
const taskTitleInput = document.getElementById('task-title');
const taskDescriptionInput = document.getElementById('task-description');
const tasksContainer = document.getElementById('tasks-container');
const loadingElement = document.getElementById('loading');

// TODO: Add event listeners
taskForm.addEventListener('submit', handleFormSubmit);

// TODO: Load tasks when page loads
document.addEventListener('DOMContentLoaded', loadTasks);

// Function to handle form submission
async function handleFormSubmit(event) {
    event.preventDefault();

    const title = taskTitleInput.value.trim();
    const description = taskDescriptionInput.value.trim();

    if (!title) {
        alert('Please enter a task title');
        return;
    }

    // TODO: Create new task via API
    try {
        const newTask = {
            title: title,
            description: description,
            completed: false
        };

        // Make POST request to create task
        // const response = await fetch(`${API_BASE_URL}/tasks`, {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify(newTask)
        // });

        // if (response.ok) {
        //     const createdTask = await response.json();
        //     displayTask(createdTask);
        //     taskForm.reset();
        // } else {
        //     throw new Error('Failed to create task');
        // }

        console.log('Creating task:', newTask);
        alert('Task creation functionality to be implemented!');

    } catch (error) {
        console.error('Error creating task:', error);
        alert('Error creating task. Please try again.');
    }
}

// Function to load tasks from API
async function loadTasks() {
    try {
        // TODO: Fetch tasks from API
        // const response = await fetch(`${API_BASE_URL}/tasks`);
        // const tasks = await response.json();

        // For now, show a message
        loadingElement.textContent = 'Connect to your FastAPI server to load real tasks!';
        console.log('Load tasks functionality to be implemented');

        // TODO: Clear loading and display tasks
        // loadingElement.classList.add('hidden');
        // tasks.forEach(task => displayTask(task));

    } catch (error) {
        console.error('Error loading tasks:', error);
        loadingElement.textContent = 'Error loading tasks. Make sure your API server is running.';
    }
}

// Function to display a task in the UI
function displayTask(task) {
    const taskElement = document.createElement('div');
    taskElement.className = 'task-item';
    taskElement.innerHTML = `
        <h3>${task.title}</h3>
        <p>${task.description || 'No description'}</p>
        <div class="task-actions">
            <button onclick="toggleTask(${task.id})">
                ${task.completed ? 'Mark Incomplete' : 'Mark Complete'}
            </button>
            <button class="delete-btn" onclick="deleteTask(${task.id})">Delete</button>
        </div>
    `;

    tasksContainer.appendChild(taskElement);
}

// TODO: Implement toggle task completion
function toggleTask(taskId) {
    console.log('Toggle task:', taskId);
    alert('Task toggle functionality to be implemented!');
}

// TODO: Implement delete task
function deleteTask(taskId) {
    console.log('Delete task:', taskId);
    alert('Task deletion functionality to be implemented!');
}