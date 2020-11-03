import { TODO, projects, Project } from './index';
import { createTODO } from './todo';

const createMidPanel = (heading) => {
    let mid = document.createElement('div');
    mid.className = 'mid-panel';
    
    let title = document.createElement('h1');
    title.id = 'mid-title';
    title.textContent = heading;

    let form = document.createElement('div');
    form.className = 'task-form';

    let addButton = document.createElement('button');
    addButton.className = 'task-add-button';
    addButton.textContent = '+';
    addButton.type = 'button';

    let titleEnter = document.createElement('input');
    titleEnter.className = 'title-enter';
    titleEnter.placeholder = 'Enter task name';
    titleEnter.type = 'text';

    let descEnter = document.createElement('input');
    descEnter.className = 'desc-enter';
    descEnter.placeholder = 'Add a description';
    titleEnter.type = 'text';

    let dateLabel = document.createElement('label');
    dateLabel.for = 'date-enter-id';
    dateLabel.textContent = 'Due Date:';

    let dateEnter = document.createElement('input');
    dateEnter.className = 'date-enter';
    dateEnter.id = 'date-enter-id';
    dateEnter.type = 'date';
    
    let priorityLabel = document.createElement('label');
    priorityLabel.for = 'priority-enter-id';
    priorityLabel.textContent = 'Priority: ';
    priorityLabel.id = 'priority-label';

    let priorityEnter = document.createElement('select');
    priorityEnter.className = 'priority-enter';
    priorityEnter.innerHTML = `
        <option value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='High'>High</option>`;

    form.appendChild(titleEnter);
    form.appendChild(descEnter);
    form.appendChild(dateLabel);
    form.appendChild(dateEnter);
    form.appendChild(priorityLabel);
    form.appendChild(priorityEnter);
    form.appendChild(addButton);

    mid.appendChild(title);
    mid.appendChild(form);

    return mid;
};

export { createMidPanel };