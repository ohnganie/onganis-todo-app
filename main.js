//selectors
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector(".todo-list");
var todoStart = document.querySelector(".datestart");
var todoEnd = document.querySelector(".dateend");
//Event Listeners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteEditCheck);
//function
function addTodo(event) {
    //prevent form from submitting
    event.preventDefault();
    //create Todo Div
    var todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");
    //Create Li
    var newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    todoDiv.addEventListener("dragstart", dragStart);
    todoDiv.addEventListener("dragend", dragEnd);
    //dateInput Start
    var newDates = document.createElement('li');
    newDates.innerHTML = todoStart.value;
    newDates.classList.add('.todo-Dates');
    todoDiv.appendChild(newDates);
    //dateInput End
    var newEnd = document.createElement('li');
    newEnd.innerHTML = todoEnd.value;
    newEnd.classList.add('.todo-Dates');
    todoDiv.appendChild(newEnd);
    //check button
    var completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="far fa-check-square"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //delete button
    var trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash-alt"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    //edit button
    var editButton = document.createElement('button');
    editButton.innerHTML = '<i class="far fa-edit"></i>';
    editButton.classList.add("edit-btn");
    editButton.onclick = function () {
        editWorking(newTodo);
    };
    todoDiv.appendChild(editButton);
    //function dor edit 
    function editWorking(e) {
        var editValue = prompt('edit the selected item', e.firstChild.nodeValue);
        e.firstChild.nodeValue = editValue;
    }
    //append to list
    todoList.appendChild(todoDiv);
    //clear todoinput
    todoInput.value = "";
    todoStart.value = "";
    todoEnd.value = "";
}
function deleteEditCheck(e) {
    var item = e.target;
    //delete
    if (item.classList[0] === "trash-btn") {
        var todo = item.parentElement;
        todo.remove();
    }
    if (item.classList[0] === "complete-btn") {
        var todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
//drag and drop
var todos = document.querySelectorAll(".todo-list");
var todoTasks = document.querySelectorAll(".tasks");
var draggableTodo = null;
//Event listeners
todos.forEach(function (todo) {
    todo.addEventListener("dragstart", dragStart);
    todo.addEventListener("dragend", dragEnd);
});
//function
function dragStart() {
    draggableTodo = this;
    console.log("dragStart");
}
function dragEnd() {
    draggableTodo = null;
    console.log("dragEnd");
}
todoTasks.forEach(function (tasks) {
    tasks.addEventListener("dragover", dragOver);
    tasks.addEventListener("dragenter", dragEnter);
    tasks.addEventListener("dragleave", dragLeave);
    tasks.addEventListener("drop", dragDrop);
});
function dragOver(e) {
    e.preventDefault();
    //console.log("dragOver");
}
function dragEnter() {
    console.log("dragEnter");
}
function dragLeave() {
    console.log("dragLeave");
}
function dragDrop() {
    this.appendChild(draggableTodo);
    console.log("dropped");
}
