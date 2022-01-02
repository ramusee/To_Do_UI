const UI_ELEMENTS = {
  SECTION_HIGH: document.querySelector('.priority_high'),
  SECTION_LOW: document.querySelector('.priority_low'),
  TASKS_HIGH: document.querySelector('.todo__tasks_high'),
  TASKS_LOW: document.querySelector('.todo__tasks_low'),
  FORM: document.querySelectorAll('.todo__add-task')
}
const BTN_ADD_HIGH = UI_ELEMENTS.SECTION_HIGH.children[1][1]
const BTN_ADD_LOW = UI_ELEMENTS.SECTION_LOW.children[1][1]
BTN_ADD_HIGH.addEventListener('click', addTaskHigh)
BTN_ADD_LOW.addEventListener('click', addTaskLow)

function addTaskHigh() {
  const INPUT_VALUE = UI_ELEMENTS.SECTION_HIGH.children[1][0].value
  if (INPUT_VALUE !== '') {
    UI_ELEMENTS.TASKS_HIGH.insertAdjacentHTML(
      'afterbegin',
      `<div class="todo__task">
      <input class="task__check-input" type="checkbox">
      <span class="task__checkbox"></span>
      <p class="task__text">${INPUT_VALUE}</p>
      <button type="button" class="button button_del"><img src="images/close-icon.svg" alt="delete" class="img_del"></button>
      </div>`
    )
  }
    const BTNS_REMOVE = document.querySelectorAll('.button_del')
    for (let btn of BTNS_REMOVE) {
      btn.addEventListener('click', deleteTask)
    }
  resetForm()
  const 
}
function addTaskLow() {
  const INPUT_VALUE = UI_ELEMENTS.SECTION_LOW.children[1][0].value
  if (INPUT_VALUE !== '') {
    UI_ELEMENTS.TASKS_LOW.insertAdjacentHTML(
      'afterbegin',
      `<div class="todo__task">
      <input class="task__check-input" type="checkbox">
      <span class="task__checkbox"></span>
      <p class="task__text">${INPUT_VALUE}</p>
      <button type="button" class="button button_del"><img src="images/close-icon.svg" alt="delete" class="img_del"></button>
      </div>`
    )
  }
  const BTNS_REMOVE = document.querySelectorAll('.button_del')
  for (let btn of BTNS_REMOVE) {
    btn.addEventListener('click', deleteTask)
  }
  resetForm();
}

function changeStatus() {
  
  this.children[0].checked === true ? this.style.backgroundColor = 'black' : this.style.backgroundColor = '#fff'
  console.log(this.children[0])
}

function resetForm() {
  for(let form of UI_ELEMENTS.FORM) {
    form.reset();
  }
}

function deleteTask() {
  this.parentElement.remove()
}
