const form = document.getElementById('projectForm');
function showProjectForm() {
    if (form.style.display === 'none') {
        form.style.display = 'block';
    }
    else {
        form.style.display = 'none';
    }
}

function closeProjectForm() {
    form.style.display = 'none';
}

const closeButton = document.getElementById('btn-cancel');
closeButton.addEventListener("click", closeProjectForm);

function createListForm() {
    const content = document.getElementById('content');
    
    const div = document.createElement('div');
    //div.setAttribute("class", "form-popup");
    div.setAttribute("id", "listForm");

    const form = document.createElement('form');
    const br = document.createElement('br');

    const titleLabel = document.createElement('label');
    titleLabel.setAttribute("for", "title");
    titleLabel.textContent = "Title";

    const titleInput = document.createElement('input');
    titleInput.setAttribute("type", "text");
    titleInput.setAttribute("id", "projectTitle");
    titleInput.setAttribute("placeholder", "Enter To Do Title");
    titleInput.setAttribute("name", "title");

    const descriptionLabel = document.createElement('label');
    descriptionLabel.setAttribute("for", "description");
    descriptionLabel.textContent = "Description";

    const descriptionInput = document.createElement('input');
    descriptionInput.setAttribute("type", "text");
    descriptionInput.setAttribute("id", "projectDescription");
    descriptionInput.setAttribute("placeholder", "Enter To Do Description");
    descriptionInput.setAttribute("name", "description");

    const dueDateLabel = document.createElement('label');
    dueDateLabel.setAttribute("for", "dueDate");
    dueDateLabel.textContent = "Due Date";

    const dueDateInput = document.createElement('input');
    dueDateInput.setAttribute("type", "text");
    dueDateInput.setAttribute("id", "projectDueDate");
    dueDateInput.setAttribute("placeholder", "Enter To Do dueDate");
    dueDateInput.setAttribute("name", "dueDate");

    const priorityLabel = document.createElement('label');
    priorityLabel.setAttribute("for", "priority");
    priorityLabel.textContent = "Priority";

    const priorityInput = document.createElement('input');
    priorityInput.setAttribute("type", "text");
    priorityInput.setAttribute("id", "projectPriority");
    priorityInput.setAttribute("placeholder", "Enter To Do priority");
    priorityInput.setAttribute("name", "priority");

    const submitInput = document.createElement('input');
    submitInput.setAttribute("type", "button");
    submitInput.setAttribute("id", "list-submit");
    submitInput.setAttribute("value", "Submit");
    submitInput.classList.add("button");

    const closeInput = document.createElement('input');
    closeInput.setAttribute("type", "button");
    closeInput.setAttribute("id", "close-list");
    closeInput.setAttribute("value", "Close");
    closeInput.classList.add("button");
  //  closeInput.setAttribute("onclick", "closeProjectForm()"); NEED TO FIX THIS

    form.appendChild(titleLabel);
    form.appendChild(br.cloneNode());
    form.appendChild(titleInput);
    form.appendChild(br.cloneNode());
    form.appendChild(descriptionLabel);
    form.appendChild(br.cloneNode());
    form.appendChild(descriptionInput);
    form.appendChild(br.cloneNode());
    form.appendChild(dueDateLabel);
    form.appendChild(br.cloneNode());
    form.appendChild(dueDateInput);
    form.appendChild(br.cloneNode());
    form.appendChild(priorityLabel);
    form.appendChild(br.cloneNode());
    form.appendChild(priorityInput);
    form.appendChild(br.cloneNode());
    form.appendChild(submitInput);
    form.appendChild(br.cloneNode());
    form.appendChild(closeInput);
    div.appendChild(form);
    content.appendChild(div);
}

export {showProjectForm, createListForm}