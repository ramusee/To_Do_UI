const elements = {
  sectionHigh: document.querySelector(".priority_high"),
  sectionLow: document.querySelector(".priority_low"),
  tasksHigh: document.querySelector(".todo__tasks_high"),
  tasksLow: document.querySelector(".todo__tasks_low")
};
elements.sectionHigh.children[1][1].addEventListener("click", addTaskHigh);
elements.sectionLow.children[1][1].addEventListener("click", addTaskLow);

function addTaskHigh() {
  const form = elements.sectionHigh.children[1];
  const inputValue = elements.sectionHigh.children[1][0].value;
  if (inputValue !== "") {
    elements.tasksHigh.insertAdjacentHTML(
      "afterbegin",
      `<div class="todo__task">
        <input class="task__check-input" type="checkbox">
        <span class="task__checkbox"></span>
        <p class="task__text">${inputValue}</p>
        <button type="button" class="button button_del"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="18.0096" y2="-0.5" transform="matrix(0.999988 -0.00481873 0.0748716 0.997193 1 10)" stroke="#998899"/>
<line y1="-0.5" x2="18.0401" y2="-0.5" transform="matrix(-0.0192905 -0.999814 0.998699 0.0509976 10.5404 18.8444)" stroke="#998899"/>
</svg></button></div>`
    );

    const removeBtns = document.querySelectorAll(".button_del");
    for (let btn of removeBtns) {
      const task = btn.parentElement;
      const checkInput = task.children[0];
      function changeCheckbox() {
        if (checkInput.checked === true) {
          task.style.backgroundColor = "#e5e5e5";
        } else {
          task.style.backgroundColor = "#fff";
        }
      }
      checkInput.addEventListener("click", changeCheckbox);
      btn.addEventListener("click", deleteTask);
    }

    form.reset();
  }
}
function addTaskLow() {
  const form = elements.sectionLow.children[1];
  const inputValue = elements.sectionLow.children[1][0].value; 
  if (inputValue !== "") {
    elements.tasksLow.insertAdjacentHTML(
      "afterbegin",
      `<div class="todo__task">
      <input class="task__check-input" type="checkbox">
      <span class="task__checkbox"></span>
      <p class="task__text">${inputValue}</p>
      <button type="button" class="button button_del"><svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<line y1="-0.5" x2="18.0096" y2="-0.5" transform="matrix(0.999988 -0.00481873 0.0748716 0.997193 1 10)" stroke="#998899"/>
<line y1="-0.5" x2="18.0401" y2="-0.5" transform="matrix(-0.0192905 -0.999814 0.998699 0.0509976 10.5404 18.8444)" stroke="#998899"/>
</svg></button>
      </div>`
    );
    const removeBtns = document.querySelectorAll(".button_del");
    for (let btn of removeBtns) {
      const task = btn.parentElement;
      const checkInput = task.children[0];
      function changeCheckbox() {
        if (checkInput.checked === true) {
          task.style.backgroundColor = "#e5e5e5";
        } else {
          task.style.backgroundColor = "#fff";
        }
      }
      checkInput.addEventListener("click", changeCheckbox);
      btn.addEventListener("click", deleteTask);
    }
  }
  form.reset();
}
function deleteTask() {
  this.parentElement.remove();
}

