const todoImput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const emptyMessage = document.getElementById("emptyMessage");
const todoList = document.getElementById("todoList");

const tasks = [];

addButton.addEventListener  ("click", function(){
    const taskText = todoImput.value;

    if(taskText === ""){
        emptyMessage.textContent="タスクを入力してください";
        return;
    }

    tasks.push(taskText);

    console.log(tasks);

    emptyMessage.textContent="";

    renderTasks();

    todoImput.value="";
    
});

function renderTasks(){
    todoList.innerHTML = "";

    for(let i = 0; i < tasks.length;i++){
        const item = document.createElement("li");
        item.textContent = tasks[i];
        todoList.appendChild(item);
    }
}