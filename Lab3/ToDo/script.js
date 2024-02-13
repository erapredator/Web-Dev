document.addEventListener('DOMContentLoaded', function () {
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');
    const dateInfo = document.getElementById('dateInfo');
    const prevDateBtn = document.getElementById('prevDateBtn');
    const nextDateBtn = document.getElementById('nextDateBtn');

    // Function to get today's date and day of the week
    let currentDate = new Date();

    // Function to display current date and tasks
    function displayDateAndTasks() {
        // Display current date
        const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        const formattedDate = currentDate.toLocaleDateString('en-US', options);
        dateInfo.textContent = formattedDate;

        // Display tasks for the current date (implementation needed)
        // You might need to store tasks for each date in an object or array
    }

    // Add task function
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

    // Delete task function
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
    // Event listeners
    addTaskBtn.addEventListener('click', addTask);
    taskList.addEventListener('click', deleteTask);

    prevDateBtn.addEventListener('click', function () {
        currentDate.setDate(currentDate.getDate() - 1);
        displayDateAndTasks();
    });

    nextDateBtn.addEventListener('click', function () {
        currentDate.setDate(currentDate.getDate() + 1);
        displayDateAndTasks();
    });

    // Call getTodayDate function to display today's date and day of the week
    displayDateAndTasks();
});
