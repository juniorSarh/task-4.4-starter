// All your DOM manipulation must happen here.
// You will create and inject all elements into <main id="root"> using JavaScript only.
const LinkElement = document.createElement('link');
LinkElement.rel ="stylesheet";
LinkElement.href= 'style.css';

const root = document.getElementById("root");


const title = document.createElement("h1");
title.textContent = "The To Do List Task";


const textarea = document.createElement("textarea");
textarea.textContent= "Enter your Task";


const myButton = document.createElement("button");
myButton.textContent = "Add Task";

const pendingtask =document.createElement("p");
pendingtask.textContent="The Remaining Task:";


const taskList = document.createElement("ul");

document.head.appendChild(LinkElement);
document.body.appendChild(title);
document.body.appendChild(textarea);
document.body.appendChild(myButton);
document.body.appendChild(taskList);
document.body.appendChild(pendingtask);


function addTask(taskText) {
  if (taskText.trim() === "") return;

  const li = document.createElement("li");

  const span = document.createElement("span");
  span.textContent = taskText;
  span.className = "task-content";

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    if (checkbox.checked) {
      span.classList.add("done");
       span.style.textDecoration = "line-through";
       span.style.color = "gray";
    } else {
      span.classList.remove("done");
      span.style.textDecoration = "none";
      span.style.color = "black";
    }
  });

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.onclick = function () {
    taskList.removeChild(li);
  };

  li.appendChild(checkbox);
  li.appendChild(span);
  li.appendChild(deleteBtn);

  taskList.appendChild(li);
  textarea.value = "";
}

// Event Listener for Add Task
myButton.addEventListener("click", function () {
  addTask(textarea.value);
});