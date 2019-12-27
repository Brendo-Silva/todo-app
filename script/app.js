let listElement = document.querySelector('#app ul');
let inputElement = document.querySelector('#app input');
let btnElement = document.querySelector('#app button');

let todos = JSON.parse(localStorage.getItem('list_todos')) || [];

function renderTodos() { 
  listElement.innerHTML = '';

  for (todo of todos) {
    let todoElement = document.createElement('li');
    let todoText = document.createTextNode(todo);

    let linkElement = document.createElement('a');
    let linkText = document.createTextNode('Excluir');

    linkElement.appendChild(linkText);
    linkElement.setAttribute('href', '#');

    let pos = todos.indexOf(todo);
    linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

    todoElement.appendChild(todoText);
    todoElement.appendChild(linkElement);
    listElement.appendChild(todoElement);
  }
}

renderTodos();

function addTodo() {
  let todoText = inputElement.value;

  if (todoText === '') {
    alert("Lamento o campo está vazio!!!");
  } else if (todos.indexOf(todoText) > -1){
    alert("Lamento, mais esse ítem já foi adicionado!!!");
  } else {
    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveToStorage();
  }
  
}

btnElement.addEventListener('click', addTodo);

function deleteTodo(pos) {
  todos.splice(pos, 1);
  renderTodos();
  saveToStorage();
}

function saveToStorage() {
  localStorage.setItem('list_todos', JSON.stringify(todos));
}