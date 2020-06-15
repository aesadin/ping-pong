// Business Logic for the to do list
function ToDoList(){
  this.listItems = [];
}

// Business logic for the user input tasks
function ListItem (task) {
  this.task = task;
}

ListItem.prototype.fullList = function() {
  return this.task;
}


// User Interface
$(document).ready(function() {
  //event.preventDefault();

  const newTask = $("#task").val();
  

});