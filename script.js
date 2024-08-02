document.addEventListener('DOMContentLoaded', () => {
    const addTaskBtn = document.getElementById('add-task-btn');
    const newTaskInput = document.getElementById('new-task');
    const taskList = document.getElementById('task-list');

    addTaskBtn.addEventListener('click', () => {
        const taskText = newTaskInput.value.trim();
        if (taskText !== "") {
            const li = document.createElement('li');
            const checkbox = document.createElement('input');
            checkbox.type = 'checkbox';
            checkbox.addEventListener('change', (e) => {
                if (e.target.checked) {
                    li.classList.add('completed');
                } else {
                    li.classList.remove('completed');
                }
            });

            const span = document.createElement('span');
            span.textContent = taskText;

            const removeBtn = document.createElement('button');
            removeBtn.textContent = 'Remover';
            removeBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            li.appendChild(checkbox);
            li.appendChild(span);
            li.appendChild(removeBtn);
            taskList.appendChild(li);

            newTaskInput.value = '';
        }
    });

    newTaskInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter') {
            addTaskBtn.click();
        }
    });
});
