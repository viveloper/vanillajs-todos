const formEl = document.querySelector('.input-form');
const inputEl = formEl.querySelector('[type=text]');
const submitBtnEl = formEl.querySelector('[type=submit]');
const todoListEl = document.querySelector('.todo-list');

formEl.addEventListener('submit', onSubmit);
todoListEl.addEventListener('click', onListClick);

function onSubmit(e) {
  e.preventDefault();
  const text = inputEl.value;
  if (text.length === '') return;
  createTodoEl(text);
  inputEl.value = '';
}

function onListClick(e) {
  if (e.target.className === 'btn-done') {
    const todoEl = e.target.closest('.todo');
    const todoTextEl = todoEl.querySelector('.todo-text');
    todoTextEl.classList.toggle('done');
  } else if (e.target.className === 'btn-remove') {
    const todoEl = e.target.closest('.todo');
    todoListEl.removeChild(todoEl);
  }
}

function createTodoEl(text) {
  const todoEl = document.createElement('li');
  todoEl.className = 'todo';

  todoEl.innerHTML = `
          <span class="todo-text">${text}</span>
          <button class="btn-done">done</button>
          <button class="btn-remove">remove</button>
        `;

  todoListEl.appendChild(todoEl);
}
