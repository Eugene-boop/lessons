document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  const form = document.querySelector('.todo-control'),
  todoList = document.querySelector('#todo'),
  completedList = document.querySelector('#completed'),
  headerInput = document.querySelector('.header-input');

  let data = {
    todo: [],
    completed: []
  };

  const renderItem = (text) => {
    const item = document.createElement('li'),
    btnBlock = document.createElement('div'),
    btnRemove = document.createElement('button'),
    btnComplete = document.createElement('button');

    item.classList.add('.todo-item');
    btnBlock.classList.add('.todo-buttons');
    btnRemove.classList.add('.todo-remove');
    btnComplete.classList.add('.todo-complete');

    btnBlock.appendChild(btnRemove);
    btnBlock.appendChild(btnComplete);
    item.appendChild(btnBlock);


    todoList.insertBefore(item, todoList.childNodes[0]);
  };

  const addItem = (text) => {
    renderItem(text);
    headerInput.value = '';
    data.todo.push('text');
  };

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    if (!!headerInput.value.trim()) {
      addItem(headerInput.value);
    }
  });
});

