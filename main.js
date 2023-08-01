/* <div class="container">
    <div class="task-box">
      <input class="task-input" type="text" placeholder="Задача">
      <button class="btn btn-task">Создать Задачу</button>
    </div>
    <div class="task-card-box">
      <ul class="task-list">
        <li class="task-item">
          <h2 class="title-card">Сходить в магазин</h2>
          <button class="btn btn-completed">Выполненно</button>
          <button class="btn btn-edit">Изменить</button>
          <button class="btn btn-delete">Удалить</button>
        </li>
        <li class="task-item card-completed">
          <h2 class="title-card-completed">Записаться в парикмахерскую</h2>
          <button class="btn btn-delete-completed">Удалить</button>
        </li>
      </ul>
    </div>
  </div> */

/* Контейнер для приложения */
let containerApp = document.createElement("div");
containerApp.classList.add("container");

/* Блок постановки задачи */
let taskBox = document.createElement("div");
taskBox.classList.add("task-box");

/* Поле для постановки задачи */
let newTaskImp = getTask("Задача", "task-input"); // Возвращает input

/* Кнопка "создать задачу" */
let newTaskBtn = getButton("Создать Задачу", "btn-task")

/* Обработчик события клика кнопки "создать задачу" */
newTaskBtn.onclick = function () {
  let textTask = newTaskImp.value
  let newTask = getTaskItem(textTask) // Возвращает li карточки задачи
  taskList.append(newTask)
  newTaskImp.value = ""
}

/* Блок списка поставленных задач */
let taskCardsBox = document.createElement("div");
taskCardsBox.classList.add("task-card-box");

/* Создание списка задач */
let taskList = document.createElement("ul")
taskList.classList.add("task-list")

/* Добавление элементов в body */
document.body.append(containerApp);
containerApp.append(taskBox, taskCardsBox);
taskBox.append(newTaskImp, newTaskBtn);
taskCardsBox.append(taskList);


/* Функция возвращающая новую задачу*/
function getTask(placeholder, className) {
  let input = document.createElement("input");
  input.type = 'text';
  input.placeholder = placeholder;
  input.classList.add(className);
  return input;
}

/* Функция создания кнопки */
function getButton(text, className) {
  let button = document.createElement("button")
  button.textContent = text
  button.classList.add("btn", className)
  return button
}

/* Функция создания карточки задания*/
function getTaskItem(text) {
  let taskItem = document.createElement("li")
  taskItem.classList.add("task-item")

  let taskTitle = document.createElement("h2")
  taskTitle.classList.add("title-card")
  taskTitle.textContent = text

  let btnCompleted = getButton("Выполненно", "btn-completed")
  btnCompleted.onclick = function () {
    taskItem.classList.add("task-item", "card-completed")
    taskTitle.classList.toggle("title-card-completed")
    btnCompleted.remove()
    btnEdit.remove()
    btnDelete.classList.toggle("btn-delete-completed")
  }

  let btnEdit = getButton("Изменить", "btn-edit")
  btnEdit.onclick = function () {
    let newTaskTitle = prompt("Введите изменения", taskTitle.textContent)
    taskTitle.textContent = newTaskTitle
  }

  let btnDelete = getButton("Удалить", "btn-delete")
  btnDelete.onclick = function () {
    taskItem.remove()
  }

  /* Добавляем элементы (заголовок и кнопки) в карточку задачи*/
  taskItem.append(taskTitle, btnCompleted, btnEdit, btnDelete)

  return taskItem
}