import { createProject } from "./sidepanel";
import { Project, projects } from './index';

const projectPopup = () => {
    let popup = document.createElement('div');
    popup.id = 'project-popup';
    popup.className = 'popup';

    let exit = document.createElement('button');
    exit.className = 'popup-exit';
    exit.textContent = 'X';
    exit.addEventListener('click', function(e) {
        popup.style.display = 'none';
        textBox.value = '';
    });

    let textBox = document.createElement('input');
    textBox.type = 'text';
    textBox.value = '';
    textBox.id = 'project-text';
    textBox.className = 'popup-text';
    textBox.placeholder = 'Enter Project Name';

    let createButton = document.createElement('button');
    createButton.className = 'popup-button';
    createButton.id = 'project-popup-button';
    createButton.textContent = 'Create Project';

    popup.appendChild(exit);
    popup.appendChild(textBox);
    popup.appendChild(createButton);

    popup.style.display = 'none';

    return popup;
};


const editPopup = (todo, idx) => {
    let popup = document.createElement('div');
    popup.id = 'edit-popup';
    popup.className = 'popup';

    let exit = document.createElement('button');
    exit.className = 'popup-exit';
    exit.textContent = 'X';
    exit.addEventListener('click', function(e) {
        popup.style.display = 'none';
    });

    let titleHead = document.createElement('input');
    titleHead.id = 'edit-title-' + todo.getMagic() + idx;
    titleHead.className = "edit-title";
    titleHead.value = todo.getTitle();
    
    let descHead = document.createElement('input');
    descHead.id = 'edit-desc-' + todo.getMagic() + idx;
    descHead.className = "edit-desc";
    descHead.value = todo.getDescription();

    let priorityEnter = document.createElement('select');
    priorityEnter.id = 'edit-priority-' + todo.getMagic() + idx;
    priorityEnter.className = 'priority-edit';
    priorityEnter.innerHTML = `
        <option value='Low'>Low</option>
        <option value='Medium'>Medium</option>
        <option value='High'>High</option>`;
    priorityEnter.value = todo.getPriority(); 

    let dateLabel = document.createElement('label');
    dateLabel.for = 'edit-date-' + todo.getMagic() + idx;
    dateLabel.textContent = 'Due Date:';
    
    let dateEnter = document.createElement('input');
    dateEnter.className = 'date-edit';
    dateEnter.id = 'edit-date-' + todo.getMagic() + idx;
    dateEnter.type = 'date';
    dateEnter.value = todo.getDueDate();

    let createButton = document.createElement('button');
    createButton.className = 'popup-button';
    createButton.id = 'edit-popup-button-' + todo.getMagic();
    createButton.textContent = 'Done Edit';

    popup.appendChild(exit);
    popup.appendChild(titleHead);
    popup.appendChild(descHead);
    popup.appendChild(priorityEnter);
    popup.appendChild(dateLabel);
    popup.appendChild(dateEnter);
    popup.appendChild(createButton);

    return popup;
};



export { projectPopup, editPopup }