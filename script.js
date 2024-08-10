const taskInput = document.getElementById('task-input');
const addTaskButton = document.getElementById('add-task-button');
const taskList = document.getElementById('task-list');
const clearAllButton = document.getElementById('clear-all-button');

addTaskButton.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);
clearAllButton.addEventListener('click', clearAllTasks);

function addTask() {
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        const li = document.createElement('li');
        li.classList.add('task-item');
        li.innerHTML = `${taskText} <button class="delete-task">&times;</button>`;
        taskList.appendChild(li);
        taskInput.value = "";
    }
}

function handleTaskClick(e) {
    if (e.target.classList.contains('delete-task')) {
        e.target.parentElement.remove();
    } else if (e.target.classList.contains('task-item')) {
        e.target.classList.toggle('completed');
    }
}

function clearAllTasks() {
    taskList.innerHTML = "";
}
