import { createTODO } from './todo';
import { createSidePanel, createProject } from './sidepanel'
import { createMidPanel } from './midpanel'
import { editPopup, projectPopup } from './popup'

class TODO {
    constructor(title, description, priority, dueDate, magic) {
        this.title = title;
        this.description = description;
        this.priority = priority;
        this.dueDate = dueDate;
        this.magic = magic;
    }

    getMagic() {
        return this.magic;
    }

    getTitle() {
        return this.title;
    }

    getDescription() {
        return this.description;
    }

    getPriority() {
        return this.priority;
    }

    getDueDate() {
        return this.dueDate;
    }

    setTitle(newTitle) {
        this.title = newTitle;
    }

    setDescription(newDescription) {
        this.description = newDescription;
    }

    setPriority(newPriority) {
        this.priority = newPriority;
    }

    setDueDate(newDate) {
        this.dueDate = newDate;
    }

}

class Project {

    constructor(name, selected, tasks) {
        this.name = name;
        this.tasks = tasks;
        this.selected = selected;
        this.tab = null;
    }

    getName() {
        return this.name;
    }

    getTasks() {
        return this.tasks;
    }

    getTab() {
        return this.tab;
    }

    setTab(tab) {
        this.tab = tab;
    }

    isSelected() {
        return this.selected;
    }

    appendTask(task) {
        this.tasks.appendChild(task);
    }

    toggleSelected() {
        this.selected = !this.selected;
    }

    delTask(task) {
        task.style.display = 'none';
        this.tasks.removeChild(task);
    }

    delTab() {
        this.selected = false;
        this.tab.style.display = 'none';
        while(this.tasks.firstChild) {
            this.tasks.firstChild.style.display = 'none';
            this.tasks.removeChild(this.tasks.firstChild);
        }
        let projects = document.getElementById('projects-section');
        projects.removeChild(this.tab);
    }

}


// Globals
let projects = [];
const container = document.getElementById('content');
const sidePanel = createSidePanel();
const midPanel = createMidPanel('TODAY');
const popup = projectPopup();
let magics = 0;

function init() {
    container.appendChild(sidePanel);
    container.appendChild(midPanel);
    container.appendChild(popup);
    let taskBlock = document.createElement('div');
    taskBlock.className = 'mid-task-block';
    taskBlock.id = 'TODAY';
    console.log(taskBlock);
    midPanel.appendChild(taskBlock);
    let newProject = new Project('TODAY', true, taskBlock);
    projects.push(newProject);
    let tab = createProject(newProject.getName(), 0);
    tab.setAttribute('style', 'background-color: khaki; color: #c8a165;');
    projects[0].setTab(tab);
    midPanel.appendChild(newProject.getTasks());
    addListener(tab, newProject);

}

init();

const createButton = document.getElementById('project-popup-button');
createButton.addEventListener('click', function(e) {
    let textBox = document.getElementById('project-text');
    let taskBlock = document.createElement('div');
    taskBlock.className = 'mid-task-block';
    midPanel.appendChild(taskBlock);
    let textVal = textBox.value;
    taskBlock.id = textVal;
    let newProject = new Project(textVal, false, taskBlock);
    projects.push(newProject);
    let newTab = createProject(newProject.getName(), projects.length-1);
    projects[projects.length-1].setTab(newTab);
    popup.style.display = 'none';
    midPanel.appendChild(newProject.getTasks());
    addListener(newTab, newProject);
});

const createTask = document.querySelector('.task-add-button');
const titleEnter = document.querySelector('.title-enter');
const descEnter = document.querySelector('.desc-enter');
const dateEnter = document.querySelector('.date-enter');
const priorityEnter = document.querySelector('.priority-enter');

createTask.addEventListener('click', function(e) {
    let newTODO = new TODO(titleEnter.value, descEnter.value, priorityEnter.value, dateEnter.value, magics);
    titleEnter.value = '';
    descEnter.value = '';
    priorityEnter.value = 'Low';
    dateEnter.value = '';
    magics++;
    for(let i=0; i<projects.length; i++) {
        if(projects[i] != null) {
            if(projects[i].isSelected()) {
                let todoBlock = createTODO(newTODO, i);
                projects[i].appendTask(todoBlock);
                let editButton = document.getElementById(newTODO.getMagic() + 'edit' + i)
                const editPop = editPopup(newTODO, i);
                editPop.style.display = 'none';
                midPanel.appendChild(editPop);
                editButton.addEventListener('click', function(e) {
                    editPop.style.display = 'flex';
                });

                let done = document.getElementById('edit-popup-button-' + newTODO.getMagic())
                done.addEventListener('click', function(e) {
                    let editTitle = document.getElementById('edit-title-' + newTODO.getMagic() + i);
                    let editDesc = document.getElementById('edit-desc-' + newTODO.getMagic() + i);
                    let editPriority = document.getElementById('edit-priority-' + newTODO.getMagic() + i);
                    let editDate = document.getElementById('edit-date-' + newTODO.getMagic() + i);
                    newTODO.setTitle(editTitle.value);
                    newTODO.setDescription('Description: ' + editDesc.value);
                    newTODO.setDueDate(editDate.value);
                    newTODO.setPriority(editPriority.value);
                    editTitle = document.getElementById('title-' + newTODO.getMagic() + i);
                    editDesc = document.getElementById('desc-' + newTODO.getMagic() + i);
                    editPriority = document.getElementById('priority-' + newTODO.getMagic() + i);
                    editDate = document.getElementById('date-' + newTODO.getMagic() + i);
                    editTitle.textContent = newTODO.getTitle();
                    editDesc.textContent = newTODO.getDescription();
                    editPriority.textContent = newTODO.getPriority();
                    editDate.textContent = newTODO.getDueDate();

                    editPop.style.display = 'none';
                });

                let delButton = document.getElementById(newTODO.getMagic() + 'del' + i);
                delButton.addEventListener('click', function(e) {
                    projects[i].delTask(todoBlock);
                });
                break;
            }
        } 
    }
    
});


function addListener(tab, newProject) {
    tab.addEventListener('click', function(e) {
        for(let i=0; i<projects.length; i++) {
            if(projects[i] != null) {
                if(projects[i].isSelected()) {
                    projects[i].toggleSelected();
                    projects[i].getTab().setAttribute('style', 'background-color: #c8a165; color: khaki;');
                    let midTitle = document.getElementById('mid-title');
                    midTitle.textContent = projects[i].getName();
                    projects[i].getTasks().style.display = 'none';
                }
            }
        }
        newProject.toggleSelected();
        newProject.getTab().setAttribute('style', 'background-color: khaki; color: #c8a165;');
        let midTitle = document.getElementById('mid-title');
        midTitle.textContent = newProject.getName();
        newProject.getTasks().style.display = 'flex';
        
    });
}

const delProject = document.getElementById('project-del');
delProject.addEventListener('click', function(e) {
    for(let i=0; i<projects.length; i++) {
        if(projects[i] != null) {
            if(projects[i].isSelected()) {
                projects[i].delTab();
                let midTitle = document.getElementById('mid-title');
                midTitle.textContent = '';
            }
        }    
    }
});


export { projects, TODO, Project };


