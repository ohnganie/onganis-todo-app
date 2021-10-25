//selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector(".todo-list");
const todoStart = document.querySelector(".datestart");
const todoEnd = document.querySelector(".dateend");



//Event Listeners
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click', deleteEditCheck);


//function
function addTodo(event){
    //prevent form from submitting
    event.preventDefault();
    //create Todo Div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");


    //Create Li
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    todoDiv.addEventListener("dragstart",dragStart);
    todoDiv.addEventListener("dragend",dragEnd);

    

    //dateInput Start
    const newDates =document.createElement('li');
    newDates.innerHTML =todoStart.value;
    newDates.classList.add('.todo-Dates');
    todoDiv.appendChild(newDates);

    //dateInput End
    const newEnd =document.createElement('li');
    newEnd.innerHTML =todoEnd.value;
    newEnd.classList.add('.todo-Dates');
    todoDiv.appendChild(newEnd);

    

    //check button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="far fa-check-square"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //delete button

const trashButton = document.createElement('button');
    trashButton.innerHTML ='<i class="fas fa-trash-alt"></i>' ;
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
 
    
    //append to list
    todoList.appendChild(todoDiv);
    

    //clear todoinput
    todoInput.value = "";
    todoStart.value = "";
    todoEnd.value = "";
   
}

function deleteEditCheck(e){
    const item = e.target;
    //delete
    if(item.classList[0] ==="trash-btn"){
        const todo = item.parentElement;
        todo.remove();
    }
    if (item.classList[0] ==="complete-btn"){
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
    
    
}
//drag and drop
const todos = document.querySelectorAll(".todo-list");
const todoTasks = document.querySelectorAll(".tasks");
let draggableTodo = null;
//Event listeners
todos.forEach((todo) =>{
    todo.addEventListener("dragstart",dragStart);
    todo.addEventListener("dragend",dragEnd);
});

//function
function dragStart(){
    draggableTodo = this;
    console.log("dragStart")

}
function dragEnd(){
    draggableTodo = null;
    console.log("dragEnd");

}
todoTasks.forEach((tasks) =>{
    tasks.addEventListener("dragover",dragOver);
    tasks.addEventListener("dragenter",dragEnter);
    tasks.addEventListener("dragleave",dragLeave);
    tasks.addEventListener("drop",dragDrop);
});
function dragOver(e){
    e.preventDefault();
    //console.log("dragOver");


}
function dragEnter(){
    console.log("dragEnter");

}
function dragLeave(){
    console.log("dragLeave");

}
function dragDrop(){
    this.appendChild(draggableTodo);
    console.log("dropped");

}

