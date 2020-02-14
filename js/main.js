document.addEventListener('DOMContentLoaded', () => {
  "use strict";
  let input = document.querySelector('.header-input'),
    btn = document.querySelector('.header-button'),
    todoItem = document.querySelector('.todo-item'),
    itemsWrap = document.querySelector('.todo'),
    completedItemsWrap = document.querySelector('.todo-completed'),
    container = document.querySelector('.container'),
    removeBtn = document.querySelector('.todo-remove'),
    completeBtn = document.querySelector('.todo-complete');

  const addTodoItem = () => {
    let newItem = todoItem.cloneNode(true);
    newItem.childNodes[0].textContent = input.value;
    input.value = '';
    itemsWrap.insertAdjacentElement('afterbegin', newItem);
    btn.disabled = true;
  };
  const checkInput = () => btn.disabled = !input.value.trim(); 

  const removeItem = (e) => {
    if (e.target.classList.contains('todo-remove')) {
      e.target.parentNode.parentNode.parentNode.removeChild(e.target.parentNode.parentNode);
    }
  };

  const toggleComplete = (e) => {
    if (e.target.classList.contains('todo-complete')) {
      if (e.target.parentNode.parentNode.parentNode === itemsWrap) {
        completedItemsWrap.insertAdjacentElement('afterbegin', e.target.parentNode.parentNode);
      } else {
        itemsWrap.insertAdjacentElement('afterbegin', e.target.parentNode.parentNode);
      }
    }
  };

  const addListeners = () => {
    btn.addEventListener('click',(ev) => {
      ev.preventDefault();
      addTodoItem();
    });
    input.addEventListener('input', checkInput);
    container.addEventListener('click', removeItem);
    container.addEventListener('click', toggleComplete);
    document.addEventListener('keydown', (e) => {
      if (event.which === 13) addTodoItem();
    });
    window.addEventListener('beforeunload', () => setData());  
  };

  const setData = () => {
    localStorage.removeItem('inputValue');
    localStorage.removeItem('completedItems');
    localStorage.removeItem('items');

    const completedItems = [],
      completedList =  completedItemsWrap.querySelectorAll('li.todo-item');
    completedList.forEach((item) => {
      completedItems.push(item.childNodes[0].textContent);
    }); 
    
    const items = [],
      itemsList = itemsWrap.querySelectorAll('li.todo-item');
    itemsList.forEach((item) => {
      items.push(item.childNodes[0].textContent);
    });
      
    localStorage.setItem('inputValue', input.value);
    localStorage.setItem('completedItems', completedItems);
    localStorage.setItem('items', items);
  };

  const renderItems = () => {
    input.value = localStorage.getItem('inputValue');
    let items = localStorage.getItem('items');
    let completedItems = localStorage.getItem('completedItems');
    if (items) {
      itemsWrap.innerHTML = '';
      items = localStorage.getItem('items').split(',');
      items.forEach((item) => {
        let newItem = todoItem.cloneNode(true);
        newItem.childNodes[0].textContent = item;
        itemsWrap.insertAdjacentElement('beforeend', newItem);
      });
    } else itemsWrap.innerHTML = '';
    if (completedItems) {
      completedItemsWrap.innerHTML = '';
      completedItems = localStorage.getItem('completedItems').split(',');
      completedItems.forEach((item) => {
        let newItem = todoItem.cloneNode(true);
        newItem.childNodes[0].textContent = item;
        completedItemsWrap.insertAdjacentElement('beforeend', newItem);
      });
    } else completedItemsWrap.innerHTML = '';
  };

  const start = () => {
    renderItems();
    checkInput();
    addListeners();   
  };

  start();

});

