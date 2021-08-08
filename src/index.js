import { createProject } from "./list";
import './style.css';
import { showProjectForm } from "./form";

const newProjectButton = document.getElementById('create-project');
newProjectButton.addEventListener("click", showProjectForm);

const submitProjectButton = document.getElementById('project-submit');
submitProjectButton.addEventListener("click", function() {
    createProject();
    document.getElementById('project-name').value = "";
});

/*createProject();
createProject();

/*
Next Steps
- Prioritize array, we know how to do this, we can do this this time.
- Utilize dates? No idea how to do this
- Fix delete project button
*/