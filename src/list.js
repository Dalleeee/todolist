import { appendProject } from "./DOM";
import { listScreen } from "./DOM";

const projects = {};

const listCreator = (title, description, dueDate, priority) => {
    return {
        title,
        description,
        dueDate,
        priority,
    }
};

const projectCreator = (name) => {
    return {
        name,
    }
};

//let count = 0;
function createProject(name) {
    //name = prompt("Project name?");
    name = document.getElementById('project-name').value;
    projects[name] = [];
    //count++;
    console.table(projects);
    appendProject(name);
};

function addToProject(name) {
    // have the name object be identified on the page when the button is clicked, i.e document.query selector . value etc.
    name = document.querySelector('.title').textContent;
    const title = document.getElementById('projectTitle').value;
    const description = document.getElementById('projectDescription').value;
    const dueDate = document.getElementById('projectDueDate').value;
    const priority = document.getElementById('projectPriority').value;
    const newItem = listCreator(title, description, dueDate, priority);
    projects[name].push(newItem);
    document.getElementById('projectTitle').value = "";
    document.getElementById('projectDescription').value = "";
    document.getElementById('projectDueDate').value = "";
    document.getElementById('projectPriority').value = "";
    console.table(projects);
    listScreen();
};

function removeFromArray(name) {
    name = document.querySelector('.title').textContent;
    for (let i = 0; i < projects[name][i].length; i++) {
        projects[name].splice(i, 1);
        console.log("hello");
        console.table(projects);
    }
}

function removeProject(name) {
    name = document.querySelector('.title').textContent;
    for (let i = 0; i < projects.length; i++) {
        projects.splice(i, 1);
        console.table(projects);
    }
}

export {
    projects,
    createProject,
    addToProject,
    listCreator,
    removeFromArray,
}

/* create a new array every time for a new project, have the name of the project be the "key" */