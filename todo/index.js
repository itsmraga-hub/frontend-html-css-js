const arr = ["William", "Charles", "Eric", "Ruth", "Daisy", "gsdjfkasgd"]

const listItem = `<li class="todo-item">Code</li>`

const todoListContainer = document.getElementById('todo-list');

const ul = document.querySelector('ul');
const taskInput = document.getElementById('task')

let taskInputValue = ""

const handleChange = (e) => {
  taskInputValue = e
  console.log(taskInputValue)
}

const handleSubmit = (e) => {
  e.preventDefault()
}

const displayListItems = (arr) => {
  todoListContainer.innerHTML = "";
  todoListContainer.style = 'color: red';
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output += `<li class="todo-item">${arr[i]}</li>`
  }
  todoListContainer.innerHTML += output;
}

displayListItems(arr);