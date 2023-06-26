// function showTasks() {
//     // ... kode sebelumnya ...

//     for (var i = 0; i < tasks.length; i++) {
//         var task = tasks[i];

//         var taskRow = document.createElement("tr");

//         var taskNameCell = document.createElement("td");
//         taskNameCell.textContent = task.name;

//         var taskDateCell = document.createElement("td");
//         taskDateCell.textContent = task.date;

//         var deleteButtonCell = document.createElement("td");
//         var deleteButton = document.createElement("button");
//         deleteButton.innerHTML = '<i class="fas fa-trash"></i>'; // Menambahkan ikon delete menggunakan Font Awesome
//         deleteButton.addEventListener("click", deleteTask.bind(null, i));
//         deleteButtonCell.appendChild(deleteButton);

//         taskRow.appendChild(taskNameCell);
//         taskRow.appendChild(taskDateCell);
//         taskRow.appendChild(deleteButtonCell);

//         todoList.appendChild(taskRow);
//     }
// }

// // Fungsi untuk menambahkan tugas ke Web Storage
// function addTask() {
//     var taskInput = document.getElementById("task");
//     var dateInput = document.getElementById("date");

//     if (taskInput.value === "" || dateInput.value === "") {
//         alert("Mohon isi semua kolom!");
//         return;
//     }

//     var task = {
//         name: taskInput.value,
//         date: dateInput.value
//     };

//     var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     tasks.push(task);
//     localStorage.setItem("tasks", JSON.stringify(tasks));

//     taskInput.value = "";
//     dateInput.value = "";

//     showTasks();
// }

// // Fungsi untuk menampilkan tugas-tugas dari Web Storage pada daftar "Yang akan dilakukan"
// function showTasks() {
//     var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     var todoList = document.getElementById("todoList");
//     todoList.innerHTML = "";

//     for (var i = 0; i < tasks.length; i++) {
//         var task = tasks[i];

//         var taskRow = document.createElement("tr");

//         var taskNameCell = document.createElement("td");
//         taskNameCell.textContent = task.name;

//         var taskDateCell = document.createElement("td");
//         taskDateCell.textContent = task.date;

//         taskRow.appendChild(taskNameCell);
//         taskRow.appendChild(taskDateCell);

//         todoList.appendChild(taskRow);
//     }
// }


// // ... kode sebelumnya ...

// // Fungsi untuk menampilkan tugas-tugas yang sudah selesai dari Web Storage pada daftar "Yang Sudah Dilakukan"
// function showCompletedTasks() {
//     var completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];
//     var completedList = document.getElementById("completedList");
//     completedList.innerHTML = "";

//     for (var i = 0; i < completedTasks.length; i++) {
//         var task = completedTasks[i];

//         var taskRow = document.createElement("tr");

//         var taskNameCell = document.createElement("td");
//         taskNameCell.textContent = task.name;

//         var taskDateCell = document.createElement("td");
//         taskDateCell.textContent = task.date;

//         var returnButtonCell = document.createElement("td");
//         var returnButton = document.createElement("button");
//         returnButton.innerHTML = '<i class="fas fa-undo"></i>'; // Menambahkan ikon kembalikan menggunakan Font Awesome
//         returnButton.addEventListener("click", returnTask.bind(null, i));
//         returnButtonCell.appendChild(returnButton);

//         taskRow.appendChild(taskNameCell);
//         taskRow.appendChild(taskDateCell);
//         taskRow.appendChild(returnButtonCell);

//         completedList.appendChild(taskRow);
//     }
// }

// // ... kode selanjutnya ...

// // Memanggil fungsi untuk menampilkan tugas-tugas yang sudah selesai saat halaman dimuat
// document.addEventListener("DOMContentLoaded", function() {
//     showTasks();
//     showCompletedTasks();
// });



// // Fungsi untuk menyelesaikan tugas dan memindahkannya ke Web Storage pada daftar "Yang Sudah Dilakukan"
// function completeTask(index) {
//     var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     var completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

//     var task = tasks.splice(index, 1)[0];
//     completedTasks.push(task);

//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

//     showTasks();
//     showCompletedTasks();
// }

// // Fungsi untuk mengembalikan tugas yang sudah selesai ke Web Storage pada daftar "Yang Akan Dilakukan"
// function returnTask(index) {
//     var tasks = JSON.parse(localStorage.getItem("tasks")) || [];
//     var completedTasks = JSON.parse(localStorage.getItem("completedTasks")) || [];

//     var task = completedTasks.splice(index, 1)[0];
//     tasks.push(task);

//     localStorage.setItem("tasks", JSON.stringify(tasks));
//     localStorage.setItem("completedTasks", JSON.stringify(completedTasks));

//     showTasks();
//     showCompletedTasks();
// }

// // Memanggil fungsi untuk menampilkan tugas-tugas yang sudah selesai saat halaman dimuat
// document.addEventListener("DOMContentLoaded", function() {
//     showCompletedTasks();
// });

// Retrieve stored data from local storage
let todoList = JSON.parse(localStorage.getItem('todoList')) || [];
let completedList = JSON.parse(localStorage.getItem('completedList')) || [];

// Function to add a task
function addTask() {
  const taskInput = document.getElementById('task');
  const dateInput = document.getElementById('date');

  const task = taskInput.value;
  const date = dateInput.value;

  if (task.trim() !== '' && date.trim() !== '') {
    const newTask = {
      task: task,
      date: date
    };

    // Add the task to the todoList array
    todoList.push(newTask);

    // Save the updated todoList to local storage
    saveTodoList();

    // Clear the input fields
    taskInput.value = '';
    dateInput.value = '';

    // Update the todo list display
    displayTodoList();
  }
}

// Function to display the todo list
function displayTodoList() {
  const todoListTable = document.getElementById('todoList');
  todoListTable.innerHTML = '';

  for (let i = 0; i < todoList.length; i++) {
    const task = todoList[i].task;
    const date = todoList[i].date;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task}</td>
      <td>${date}</td>
      <td>
        <button onclick="deleteTask(${i})">
          <i class="fas fa-trash"></i>
        </button>
        <button onclick="completeTask(${i})">
          <i class="fas fa-check"></i>
        </button>
      </td>
    `;

    todoListTable.appendChild(row);
  }
}

// Function to delete a task
function deleteTask(index) {
  // Remove the task from the todoList array
  todoList.splice(index, 1);

  // Save the updated todoList to local storage
  saveTodoList();

  // Update the todo list display
  displayTodoList();
}

// Function to mark a task as completed
function completeTask(index) {
  // Remove the task from the todoList array
  const completedTask = todoList.splice(index, 1)[0];

  // Add the task to the completedList array
  completedList.push(completedTask);

  // Save the updated lists to local storage
  saveTodoList();
  saveCompletedList();

  // Update the todo list and completed list displays
  displayTodoList();
  displayCompletedList();
}

// Function to display the completed list
function displayCompletedList() {
  const completedListTable = document.getElementById('completedList');
  completedListTable.innerHTML = '';

  for (let i = 0; i < completedList.length; i++) {
    const task = completedList[i].task;
    const date = completedList[i].date;

    const row = document.createElement('tr');
    row.innerHTML = `
      <td>${task}</td>
      <td>${date}</td>
      <td>
        <button onclick="returnToTodoList(${i})">
          <i class="fas fa-undo"></i>
        </button>
        <button onclick="deleteCompletedTask(${i})">
          <i class="fas fa-trash"></i>
        </button>
      </td>
    `;

    completedListTable.appendChild(row);
  }
}

// Function to delete a completed task
function deleteCompletedTask(index) {
    // Remove the task from the completedList array
    completedList.splice(index, 1);
  
    // Save the updated completedList to local storage
    saveCompletedList();
  
    // Update the completed list display
    displayCompletedList();
  }
// Function to save the todoList to local storage
function saveTodoList() {
    localStorage.setItem('todoList', JSON.stringify(todoList));
  }
  
  // Function to save the completedList to local storage
  function saveCompletedList() {
    localStorage.setItem('completedList', JSON.stringify(completedList));
  }
  // Function to move a completed task back to the "To-Do" list
function returnToTodoList(index) {
    // Remove the task from the completedList array
    const returnedTask = completedList.splice(index, 1)[0];
  
    // Add the task to the todoList array
    todoList.push(returnedTask);
  
    // Save the updated lists to local storage
    saveTodoList();
    saveCompletedList();
  
    // Update the todo list and completed list displays
    displayTodoList();
    displayCompletedList();
  }
  
  // Function to display the completed list
  function displayCompletedList() {
    const completedListTable = document.getElementById('completedList');
    completedListTable.innerHTML = '';
  
    for (let i = 0; i < completedList.length; i++) {
      const task = completedList[i].task;
      const date = completedList[i].date;
  
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${task}</td>
        <td>${date}</td>
        <td>
          <button onclick="returnToTodoList(${i})">
            <i class="fas fa-undo"></i>
          </button>
          <button onclick="deleteCompletedTask(${i})">
            <i class="fas fa-trash"></i>
          </button>
        </td>
      `;
  
      completedListTable.appendChild(row);
    }
  }
  
    