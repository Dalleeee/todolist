import { projects } from "./list";
import { addToProject } from "./list";
import { listCreator } from "./list";
import { createListForm } from "./form";

const content = document.getElementById('content');
const projectContainer = document.createElement('div');
const projectDiv = document.createElement('div');
const listDisplay = document.createElement('div');

function appendProject(name) {
    projectDiv.innerHTML = "";
    const projectTitle = document.createElement('a');
    projectTitle.setAttribute("href", '#');
    projectTitle.classList.add('project');
    projectTitle.innerText = name;
    projectTitle.addEventListener("click", projectScreen);
    projectContainer.appendChild(projectTitle);
    projectContainer.classList.add('projects');
    content.appendChild(projectContainer);
};

function projectScreen(name) {
    name = this.innerHTML;
    projectDiv.innerHTML = "";
    listDisplay.innerHTML = "";
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerText = name;
    const addDisplay = document.createElement('div');
    const addButton = document.createElement('button');
    addButton.innerText = "Add to Project";
    addButton.addEventListener("click", function() {
        createListForm();
        const listSubmitButton = document.getElementById('list-submit');
        listSubmitButton.addEventListener("click", addToProject);
        //addToProject();
        //listScreen();
    });
    const deleteProject = document.createElement('button');
    deleteProject.innerText = "Delete Project";
    deleteProject.addEventListener("click", function(name) { // NEED TO UPDATE LIST OF PROJECTS PROPERLY
        console.log("hello");
            name = document.querySelector('.title').textContent;
            console.log(name);
            delete projects[name];
            console.table(projects);
            projectContainer.innerHTML = "";
    })
    addDisplay.appendChild(addButton);
    addDisplay.appendChild(deleteProject);
    projectDiv.appendChild(title);
    projectDiv.appendChild(addDisplay);
    content.appendChild(projectDiv);
    listScreen();
};

const listDiv = document.createElement('div');
const body = document.getElementById('body');

function listScreen(name) {
    listDiv.innerHTML = "";
    name = document.querySelector('.title').textContent;
    //console.log(projects[name][0]['title']);
    for (let i = 0; i < projects[name].length; i++) {
        const itemName = document.createElement('a');
        itemName.setAttribute("href", '#');
        itemName.classList.add('item');
        itemName.innerText = projects[name][i]['title'];
        itemName.addEventListener("click", function() {
            listDisplay.innerHTML = "";
            listDisplay.classList.add('list-display');
            const titleDisplay = document.createElement('h1');
            titleDisplay.innerText = projects[name][i]['title'];
            const descriptionDisplay = document.createElement('p');
            descriptionDisplay.innerText = projects[name][i]['description'];
            const dueDateDisplay = document.createElement('p');
            dueDateDisplay.innerText = projects[name][i]['dueDate'];
            const priorityDisplay = document.createElement('p');
            priorityDisplay.innerText = projects[name][i]['priority'];
            const deleteButton = document.createElement('button');
            deleteButton.innerText = "Delete item";
            deleteButton.addEventListener("click", function() { //NOT WORKING
                //removeFromArray(); WHY DOESN'T THIS WORK WHEN CALLED
                projects[name].splice(i, 1);
                listScreen();
                listDisplay.innerHTML = "";
            })
            const doneButton = document.createElement('button');
            doneButton.innerText = "Done?";
            doneButton.addEventListener("click", function() {
                if (itemName.classList != 'done') {
                    itemName.classList.add('done');
                    itemName.setAttribute("style", 'text-decoration: line-through');
                    titleDisplay.setAttribute("style", 'text-decoration: line-through');
                }
                else {
                    itemName.classList.remove('done');
                    itemName.setAttribute("style", 'text-decoration: none');
                    titleDisplay.setAttribute("style", 'text-decoration: none');
                }
            })
            listDisplay.appendChild(titleDisplay);
            listDisplay.appendChild(descriptionDisplay);
            listDisplay.appendChild(dueDateDisplay);
            listDisplay.appendChild(priorityDisplay);
            listDisplay.appendChild(doneButton);
            listDisplay.appendChild(deleteButton);
            body.appendChild(listDisplay);
        });
        listDiv.classList.add('lists');
        listDiv.appendChild(itemName);
        content.appendChild(listDiv);
        //console.log("Hi");
    }
    /*projects[name].forEach(function() {
        const itemName = document.createElement('button');
        itemName.innerHTML = projects[name].title;
        itemName.addEventListener("click", function() {

        })
        content.appendChild(itemName);
        console.log("Hi");
    })
    /*
    const titleDisplay = document.createElement('h1');
    titleDisplay.innerText = title;
    const descriptionDisplay = document.createElement('p');
    descriptionDisplay.innerText = description;
    const dueDateDisplay = document.createElement('p');
    dueDateDisplay.innerText = dueDate;
    const priorityDisplay = document.createElement('p');
    priorityDisplay.innerText = priority;
    listDisplay.appendChild(titleDisplay);
    listDisplay.appendChild(descriptionDisplay);
    listDisplay.appendChild(dueDateDisplay);
    listDisplay.appendChild(priorityDisplay);
    content.appendChild(listDisplay);*/
}

function itemScreen(title, name, i) {
    listDisplay.innerHTML = "";
    title = this.innerHTML;
    const titleDisplay = document.createElement('h1');
    titleDisplay.innerText = title;
    const descriptionDisplay = document.createElement('p');
    descriptionDisplay.innerText = projects[name][i]['description'];
    const dueDateDisplay = document.createElement('p');
    dueDateDisplay.innerText = projects[name][i]['dueDate'];
    const priorityDisplay = document.createElement('p');
    priorityDisplay.innerText = projects[name][i]['priority'];
    listDisplay.appendChild(titleDisplay);
    listDisplay.appendChild(descriptionDisplay);
    listDisplay.appendChild(dueDateDisplay);
    listDisplay.appendChild(priorityDisplay);
    content.appendChild(listDisplay);
}

function addList(name) {
    name = document.querySelector('.title').textContent;
    const title = prompt("title");
    const description = prompt("description");
    const dueDate = prompt("due?");
    const priority = prompt("priority?");
    const newItem = listCreator(title, description, dueDate, priority);
    projects[name].push(newItem);
    console.table(projects);
};

export {appendProject, listScreen}