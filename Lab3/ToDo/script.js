document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const dateInfo = document.getElementById('dateInfo');
    const prevDateBtn = document.getElementById('prevDateBtn');
    const nextDateBtn = document.getElementById('nextDateBtn');

    let currentDate = new Date();

    function displayDateAndTasks() {
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        dateInfo.textContent = formattedDate;
    }

    function addTask() {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task');
            taskItem.innerHTML = `
                <span>${taskText}</span>
                <button class="delete-btn">-</button>
            `;
            taskList.appendChild(taskItem);
            taskInput.value = '';
        }
    }

    function deleteTask(e) {
        if (e.target.classList.contains('delete-btn')) {
            e.target.parentElement.remove();
        }
    }

    taskInput.addEventListener('keydown', function (event) {
        if (event.key === 'Enter') {
            addTask();
        }
    });

    prevDateBtn.addEventListener('click', function () {
        currentDate.setDate(currentDate.getDate() - 1);
        displayDateAndTasks();
    });

    nextDateBtn.addEventListener('click', function () {
        currentDate.setDate(currentDate.getDate() + 1);
        displayDateAndTasks();
    });

    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);

    displayDateAndTasks();
});
