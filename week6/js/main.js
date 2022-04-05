import Todos from './todos.js';
window.myTodos = new Todos('todos');
window.addEventListener('load', function(event) {
   window.myTodos.showTaskList();
  });
//   window is a global object that allows the html to see the todos.js file

//   active.addEventListener('click', function(event) {
//     myTodos.showTaskList();
//    });

// import ls from './ls.js';

// create an instance of our Todos class here
// I don't really understand what this means