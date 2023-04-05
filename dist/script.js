const form = document.querySelector('form');
const input = document.querySelector('#task-input');
const taskList = document.querySelector('#task-list');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const newTask = input.value.trim();
  if (newTask !== '') {
    const listItem = document.createElement('li');
    listItem.textContent = newTask;
    taskList.appendChild(listItem);
    input.value = '';
  }
});

taskList.addEventListener('click', (event) => {
  if (event.target.tagName.toLowerCase() === 'li') {
    event.target.remove();
  }
});