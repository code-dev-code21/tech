var tasks = []; // Tasks ka array

function addTask() {
  var title = document.getElementById('title').value;
  var desc = document.getElementById('desc').value;
  var assignedTo = document.getElementById('user').value;

  if (title && assignedTo) {
    var task = {
      id: Date.now(), // Unique ID
      title: title,
      desc: desc,
      assignedTo: assignedTo,
      status: "To Do"
    };

    tasks.push(task);
    showTasks();
    clearForm();
  } else {
    alert('fill out the details!');
  }
}

function showTasks() {
  var todo = '';
  var inprogress = '';
  var done = '';

  for (var i = 0; i < tasks.length; i++) {
    var task = tasks[i];
    var card = `
      <div class="task-card">
        <h4>${task.title}</h4>
        <p>${task.assignedTo}</p>
        <button onclick="moveTask(${task.id})">Move</button>
        <button onclick="deleteTask(${task.id})">Delete</button>
      </div>
    `;

    if (task.status === "To Do") {
      todo += card;
    } else if (task.status === "In Progress") {
      inprogress += card;
    } else if (task.status === "Done") {
      done += card;
    }
  }

  document.getElementById('todo-tasks').innerHTML = todo;
  document.getElementById('inprogress-tasks').innerHTML = inprogress;
  document.getElementById('done-tasks').innerHTML = done;
}

function moveTask(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      if (tasks[i].status === "To Do") {
        tasks[i].status = "In Progress";
      } else if (tasks[i].status === "In Progress") {
        tasks[i].status = "Done";
      }
      break;
    }
  }
  showTasks();
}

function deleteTask(id) {
  for (var i = 0; i < tasks.length; i++) {
    if (tasks[i].id === id) {
      tasks.splice(i, 1); // Task hata do
      break;
    }
  }
  showTasks();
}

function clearForm() {
  document.getElementById('title').value = '';
  document.getElementById('desc').value = '';
  document.getElementById('user').value = '';
}
