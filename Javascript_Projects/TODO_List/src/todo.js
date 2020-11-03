import TODO from './index';

const createTODO = (newTODO, idx) => {
    let todoBlock = document.createElement('div');
    todoBlock.id = 'todo-block' + idx;
    todoBlock.className = 'todo-whole-block';

    let todo = document.createElement('div');
    todo.id = 'todo' + idx;
    todo.className = 'todo-block';

    let edit = document.createElement('button');
    edit.id = newTODO.getMagic() + 'edit' + idx;
    edit.className = 'edit-button';
    edit.textContent = 'edit';

    let del = document.createElement('button');
    del.id = newTODO.getMagic() + 'del' + idx;
    del.className = 'del-button';
    del.textContent = 'del';
    
    let titleHead = document.createElement('h1');
    titleHead.id = 'title-' + newTODO.getMagic() + idx;
    titleHead.className = "item-title";
    titleHead.textContent = newTODO.getTitle();
    
    let descHead = document.createElement('h1');
    descHead.id = 'desc-' + newTODO.getMagic() + idx;
    descHead.className = "item-desc";
    descHead.textContent = 'Description: ' + newTODO.getDescription();

    let priorityHead = document.createElement('h1');
    priorityHead.id = 'priority-' + newTODO.getMagic() + idx;
    priorityHead.className = 'item-priority';
    priorityHead.textContent = 'Priority Level: ' + newTODO.getPriority();

    let dueHead = document.createElement('h1');
    dueHead.id = 'date-' + newTODO.getMagic() + idx;
    dueHead.className = 'item-duedate';
    dueHead.textContent = 'Due Date: ' + newTODO.getDueDate()

    todo.appendChild(titleHead);
    todo.appendChild(descHead);
    todo.appendChild(priorityHead);
    todo.appendChild(dueHead);

    todoBlock.appendChild(todo);
    todoBlock.appendChild(edit);
    todoBlock.appendChild(del);

    return todoBlock;
};

export { createTODO };