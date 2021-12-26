const elements = {
  sectionHigh: document.querySelector('.priority_high'),
  sectionLow: document.querySelector('.priority_low'),
  tasksHigh: document.querySelector('.todo__tasks_high'),
  tasksLow: document.querySelector('.todo__tasks_low'),
}
elements.sectionHigh.children[1][1].addEventListener('click', addTaskHigh)
elements.sectionLow.children[1][1].addEventListener('click', addTaskLow)
function addTaskHigh() {
  const inputValue = elements.sectionHigh.children[1][0].value
  if (inputValue !== '') {
    elements.tasksHigh.insertAdjacentHTML(
      'afterbegin',
      `<div class="todo__task">
      <input class="task__check-input" type="checkbox">
      <span class="task__checkbox"></span>
      <p class="task__text">${inputValue}</p>
      <button type="button" class="button button_del"><img src="/images/close-icon.svg" alt="delete" class="img_del"></button>
      </div>`
    )
    const removeBtns = document.querySelectorAll('.button_del')
    for (let btn of removeBtns) {
      const task = btn.parentElement
      btn.addEventListener('click', () => task.remove())
    }
  }
  const input = elements.sectionHigh.children[1][0]
  console.log(input)
}
function addTaskLow() {
  const inputValue = elements.sectionLow.children[1][0].value
  if (inputValue !== '') {
    elements.tasksLow.insertAdjacentHTML(
      'afterbegin',
      `<div class="todo__task">
      <input class="task__check-input" type="checkbox">
      <span class="task__checkbox"></span>
      <p class="task__text">${inputValue}</p>
      <button type="button" class="button button_del"><img src="/images/close-icon.svg" alt="delete" class="img_del"></button>
      </div>`
    )
    const removeBtns = document.querySelectorAll('.button_del')
    for (let btn of removeBtns) {
      const task = btn.parentElement
      btn.addEventListener('click', () => task.remove())
    }
  }
}
