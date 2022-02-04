import { UI_ELEMENTS } from './view.js';
import { format } from 'date-fns';

const BTN_ADD_HIGH = UI_ELEMENTS.SECTION_HIGH.children[1][1];
const BTN_ADD_LOW = UI_ELEMENTS.SECTION_LOW.children[1][1];
BTN_ADD_HIGH.addEventListener('click', addTaskHigh);
BTN_ADD_LOW.addEventListener('click', addTaskLow);

function addTaskHigh() {
  const INPUT_VALUE = UI_ELEMENTS.SECTION_HIGH.children[1][0].value;
  const nowDate = format(new Date(), 'dd.MM.yyyy');
  if (INPUT_VALUE !== '') {
    UI_ELEMENTS.TASKS_HIGH.insertAdjacentHTML(
      'afterbegin',
      `<div class="todo__task">
      <input class="task__check-input" type="checkbox">
      <span class="task__checkbox"></span>
      <p class="task__text"></p>
      <div class="task__container">
      <span class="task__date">${nowDate}</span>
      <button type="button" class="button button_del">
      </button>
      </div>
      </div>`
    );
  }
  const tasks = document.querySelectorAll('.task__text');
  tasks.forEach((task) => {
    if (task.textContent === '') task.textContent = INPUT_VALUE;
  });
  const BTNS_REMOVE = document.querySelectorAll('.button_del');
  BTNS_REMOVE.forEach((btn) => btn.addEventListener('click', deleteTask));
  const CHECK_INPUTS = document.querySelectorAll('.task__check-input');
  CHECK_INPUTS.forEach((item) => item.addEventListener('click', changeStatus));
  UI_ELEMENTS.FORM_HIGH.reset();
}
function addTaskLow() {
  const INPUT_VALUE = UI_ELEMENTS.SECTION_LOW.children[1][0].value;
  const nowDate = format(new Date(), 'dd.MM.yyyy');
  if (INPUT_VALUE !== '') {
    UI_ELEMENTS.TASKS_LOW.insertAdjacentHTML(
      'afterbegin',
      `<div class="todo__task">
      <input class="task__check-input" type="checkbox">
      <span class="task__checkbox"></span>
      <p class="task__text"></p>
      <div class="task__container">
      <span class="task__date">${nowDate}</span>
      <button type="button" class="button button_del">
      </button>
      </div>
      </div>`
    );
  }
  const tasks = document.querySelectorAll('.task__text');
  tasks.forEach((task) => {
    if (task.textContent === '') task.textContent = INPUT_VALUE;
  });
  const BTNS_REMOVE = document.querySelectorAll('.button_del');
  BTNS_REMOVE.forEach((btn) => btn.addEventListener('click', deleteTask));
  const CHECK_INPUTS = document.querySelectorAll('.task__check-input');
  CHECK_INPUTS.forEach((item) => item.addEventListener('click', changeStatus));
  UI_ELEMENTS.FORM_LOW.reset();
}
function changeStatus() {
  this.parentElement.children[0].checked === true
    ? (this.parentElement.style.backgroundColor = '#f4f4f4')
    : (this.parentElement.style.backgroundColor = '#fff');
}
function deleteTask() {
  this.parentElement.parentElement.remove();
}
