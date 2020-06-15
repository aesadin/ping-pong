// Business Logic for the to do list
function ToDoList(){
  this.listItem = [];
  this.currentId = 0;
}
ToDoList.prototype.addTask = function(listItem) {
  this.listItems.push(listItem)
}

ToDoList.prototype.assignId = function(){
  this.currentId +=1;
  return this.currentId;
}

ToDoList.prototype.findListItems = function(id){
  for (let i=0; i<this.listItems.length; i++) {
    if (this.listItems[i].id==id) {
      return this.listItems[i];
    }
  };
  return false;
}

// Business logic for the user input tasks (our ListItems)
function ListItem (task) {
  this.task = task;
}

ListItem.prototype.fullList = function() {
  return this.task;
}


// User Interface
$(document).ready(function() {
  $("form#newTask").submit(function(event) {

  //event.preventDefault();

  const newTask = $("input#task").val();
  
  });
});