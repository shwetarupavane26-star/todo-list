let todos = []; // Array to hold the todo items

// [
//   {
//     task: "Task 1"
//   },
//   {
//     task: "Task 2"
//   }
// ]

function Todo(task){ // Create an object --> {task: "Task 1"}
    this.task = task;
}

const form = document.getElementById("taskForm");
const input = document.getElementById("taskInput");
const list = document.getElementById("taskList");

// Add event listener to the form submission
form.addEventListener("submit", function(event){
    event.preventDefault(); // Prevent form submission

    let taskvalue = input.value;

    if(taskvalue === ""){ // don't add empty value
        alert("Task cannot be empty!");
        return;
    }

    let newTodo = new Todo(taskvalue); // Create a new todo object

    todos.push(newTodo); // Add the new todo to the array

    input.value = ""; // Clear input field

    displayTasks(); // Display the tasks
});

// Display the tasks in the list
function displayTasks(){

    list.innerHTML = ""; // Clear existing list

    todos.forEach(function(todo, index){

        let li = document.createElement("li"); // Create list item
        li.innerText = todo.task; // Set task text

        let deleteBtn = document.createElement("button");
        deleteBtn.innerText = "Delete"; // Create delete button

        deleteBtn.addEventListener("click", function(){
            deleteTask(index);
        });

        li.appendChild(deleteBtn);

        list.appendChild(li);
    });
}

// Delete task function
function deleteTask(index){
    todos.splice(index, 1); // Remove task from array
    displayTasks(); // Refresh list
    alert("Task Deleted Successfully");
}