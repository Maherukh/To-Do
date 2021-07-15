//SELECTORS

const todoInput = document.querySelector(".todo-input");
const todoButton = document.querySelector(".todo-button");
const todoList = document.querySelector(".todo-list");
const filterTodo = document.querySelector(".filter");

//EVENT LISTENER

todoButton.addEventListener("click", addList);
todoList.addEventListener("click", delItem);
filterTodo.addEventListener("click", filterEle);

//FUNCTIONS

function addList(event) {
    //prevents default
    event.preventDefault();
    //todo list li's and div
    //div first
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //li second
    const liList = document.createElement("li");
    liList.classList.add("item");
    liList.innerText = todoInput.value;
    todoDiv.appendChild(liList);
    //completed button
    const compBtn = document.createElement("button");
    compBtn.classList.add("comp-btn");
    compBtn.innerHTML = '<i class="fas fa-check-square"></i>';
    todoDiv.appendChild(compBtn);
    //delete button
    const delBtn = document.createElement("button");
    delBtn.classList.add("del-btn");
    delBtn.innerHTML = '<i class="fas fa-trash-alt"></i>';
    todoDiv.appendChild(delBtn);
    //todo - append
    todoList.appendChild(todoDiv);
    //clear input val
    todoInput.value = "";
}

function delItem(event) {
    const item = event.target;
    if (item.classList[0] === "del-btn") {
        const todo = item.parentElement;
        todo.classList.add("fall");
        todo.addEventListener("transitionend", function() {
            todo.remove();
        });
    }

    if (item.classList[0] === "comp-btn") {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}

function filterEle(e) {
    const todos = todoList.childNodes;
    todos.forEach(function(todo) {
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}