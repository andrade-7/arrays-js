var users = {
    user1: [],
    user2: [],
    user3: []
};

var currentUser = "user1"; // Usuário padrão ao carregar a página

function changeUser() {
    currentUser = document.getElementById("user").value;
    updateTaskList();
}

function addTask() {
    var taskInput = document.getElementById("taskInput");
    var taskText = taskInput.value.trim();
    if (taskText !== "") {
        users[currentUser].push({ text: taskText, complete: false });
        updateTaskList();
        taskInput.value = "";
    }
}

function toggleTask(index) {
    users[currentUser][index].complete = !users[currentUser][index].complete;
    updateTaskList();
}

function updateTaskList() {
    var taskList = document.getElementById("taskList");
    taskList.innerHTML = "";
    users[currentUser].forEach(function(task, index) {
        var li = document.createElement("li");
        li.textContent = task.text;
        if (task.complete) {
            li.classList.add("task-complete");
        }
        li.onclick = function() {
            toggleTask(index);
        };
        taskList.appendChild(li);
    });
}
