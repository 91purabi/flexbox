// टास्क जोड़ने के लिए फ़ंक्शन
function addTask() {
    var taskInput = document.getElementById('taskInput');
    var taskList = document.getElementById('taskList');

    if (taskInput.value.trim() !== '') {
        // नए लिस्ट आइटम बनाएं
        var newTask = document.createElement('li');
        newTask.innerHTML = taskInput.value + '<button class="delete-btn" onclick="deleteTask(this)">X</button>';
        
        // टास्क लिस्ट में जोड़ें
        taskList.appendChild(newTask);

        // इनपुट रीसेट करें
        taskInput.value = '';
    }
}

// टास्क हटाने के लिए फ़ंक्शन
function deleteTask(element) {
    var taskList = document.getElementById('taskList');
    var listItem = element.parentElement;

    // टास्क हटाएं
    taskList.removeChild(listItem);
}
