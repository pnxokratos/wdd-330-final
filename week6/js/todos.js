import {ls} from './ls.js';
var todoList = [];
var list = document.querySelector('ul');
list.addEventListener('click', function (ev) {
    if (ev.target.tagName === 'LI') {
        var completed = ev.target.classList.toggle('checked');
        for (var i = 0; i < todoList.length; i++) {
            if (todoList[i].id.toString() === ev.target.id) {
                todoList[i].completed = completed;
                ls.set(todoList);
                break;
            }
        }
    }
}, false);

export default class Todos {
    constructor(elementId) {
        this.todoElement = document.querySelector('#myInput');
    }

    getAllTodos() {
        todoList = ls.get();
        return todoList;
    }
    closeButton(id) {
        var span = document.createElement("SPAN");
        var txt = document.createTextNode("\u00D7");
        span.className = "close";
        span.id = id;
        span.appendChild(txt);
        span.onclick = function (ev) {
            var div = this.parentElement;
            div.style.display = "none";
            for (var i = 0; i < todoList.length; i++) {
                if (todoList[i].id = ev.target.id) {
                    todoList.splice(i, 1);
                    ls.set(todoList);
                    break;
                }
            }
        }
        return span;
    }

    showTaskList() {
        todoList = this.getAllTodos();
        if (todoList == null){
            todoList = new Array();
        }
        var myUL = document.getElementById("myUL");
        myUL.innerHTML = "";
        while (myUL.firstChild) {
            myUL.removeChild(myUL.firstChild);
        }

        todoList.forEach(element => {
            var li = document.createElement("li");
            var txt = document.createTextNode(element.name);
            li.className = element.completed ? 'checked' : '';
            li.id = element.id;
            li.appendChild(txt);
            document.getElementById("myUL").appendChild(li);
            li.appendChild(this.closeButton(element.id));
        })

        return todoList;
    }

    showCompletedTodos() {
        this.renderTaskList(this.renderCompletedTasks());
    }

    showActiveTodos() {
        this.renderTaskList(this.renderActiveTasks());
    }

    showAllTasks() {
        this.renderTaskList(this.getAllTodos());
    }

    renderActiveTasks() {
        var tasks = this.getAllTodos();
        let activeList = tasks.filter(task => task.completed === false);
        return activeList;
    }

    renderCompletedTasks() {
        var tasks = this.getAllTodos();
        let completedList = tasks.filter(task => task.completed === true);
        return completedList;
    }

    createTaskList(task) {
        var list = document.createElement("li");
        var txt = document.createTextNode(task.name);
        list.id = task.id;
        list.className = task.completed ? 'checked' : '';
        list.appendChild(txt);
        list.appendChild(this.closeButton(task.id));
        document.getElementById("myUL").appendChild(list);
    }

    renderTaskList(tasks) {
        const taskListElement = document.getElementById('myUL');
        taskListElement.innerHTML = "";
        tasks.forEach(task => {
            this.createTaskList(task);
        })
    }

    addTodo() {
        var li = document.createElement("li");
        var inputValue = document.getElementById("myInput").value;
        var dateTime = Date.now();
        todoList.push({ id: dateTime, name: inputValue, completed: false });
        li.id = dateTime;
        ls.set(todoList);
        var t = document.createTextNode(inputValue);
        li.appendChild(t);
        if (inputValue === '') {
            alert("You must write something!");
        } else {
            document.getElementById("myUL").appendChild(li);
            li.id = dateTime;
            li.appendChild(this.closeButton());
        }
        document.getElementById("myInput").value = "";
    }
}