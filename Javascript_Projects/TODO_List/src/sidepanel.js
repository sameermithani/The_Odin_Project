import { projects, Project } from './index';

const createSidePanel = () => {
    let panel = document.createElement('div');
    panel.className = 'side-panel';

    let projectTitle = document.createElement('h1');
    projectTitle.id = 'project-title';
    projectTitle.textContent = 'TODO LIST';
    panel.appendChild(projectTitle);

    let addProject = document.createElement('button');
    addProject.id = 'project-button';
    addProject.textContent = 'Create New Project';
    addProject.addEventListener('click', function(e) {
        document.getElementById('project-popup').style.display = 'flex';
    });
    panel.appendChild(addProject);

    let projects = document.createElement('div');
    projects.id = 'projects-section';
    panel.appendChild(projects);

    let del = document.createElement('button');
    del.id = 'project-del';
    del.textContent = 'del';
    panel.appendChild(del);

    return panel;
};


const createProject = (name, idx) => {
    console.log(projects);
    let tab = document.createElement('h1');
    tab.id = name + idx + '';
    tab.className = 'project-tab';
    tab.textContent = name;

    document.getElementById('projects-section').appendChild(tab);
    return tab;
}

export { createSidePanel, createProject };