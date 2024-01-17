const taskForm=document.getElementById("task-form");
const taskList=document.getElementById("task-list");

// counter variable to track the taask index

taskList.addEventListener("click", function (event) {
    if (event.target.classList.contains("task-item")) {
        // Remove the clicked task from the DOM
        event.target.remove();
    }
});

let taskIndex = 1;

//console.log(taskForm, taskList);

taskForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();

    //console.log(taskText);

    if(taskText !==""){


        const taskItem = document.createElement("li");
        taskItem.classList.add("task-item");
        taskItem.textContent = `${taskIndex}- ${taskText}`;


taskItem.addEventListener("click", function() {
    console.log("completed");
    this.classList.toggle("completed");
});

            //  append the task item to the task list
        taskList.appendChild(taskItem);
    
        // increment the task index
        taskIndex++;

        taskInput.value = "";
    }
});
