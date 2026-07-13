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

    tasks.push({
        text:taskText,
        completed:false
    });

    console.log(tasks);

    emptyMessage.textContent="";

    renderTasks();

    todoImput.value="";
    
});

function renderTasks(){
    todoList.innerHTML = "";

    for(let i = 0; i < tasks.length;i++){
        const item = document.createElement("li");
        item.textContent = tasks[i].text;

        if(tasks[i].completed===true){
            item.style.textDecoration = "line-through";
            item.style.color = "#57606a"
        }

        const completeButton=document.createElement("button")
        completeButton.textContent="完了"

        completeButton.addEventListener("click",function(){
            tasks[i].completed=true;
            renderTasks();
        });

        const deleteButton = document.createElement("button")
        deleteButton.textContent="削除"

        deleteButton.addEventListener("click",function(){
            tasks.splice(i,1);
            renderTasks();
        });

        item.appendChild(completeButton);
        item.appendChild(deleteButton);
        todoList.appendChild(item);
    }
}

