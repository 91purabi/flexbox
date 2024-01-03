 function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
         
        var newTask = document.createElement('li');
        newTask.innerHTML = taskInput.value + '<button class="delete-btn" onclick="deleteTask(this)">X</button>';
        
        taskList.appendChild(newTask);

        taskInput.value = '';
    }
}

function deleteTask(element) {
    var taskList = document.getElementById('taskList');
    var listItem = element.parentElement;

    taskList.removeChild(listItem);
}
