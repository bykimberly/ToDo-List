
const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");


function addTask(){
    if(inputBox.value == ''){   // if input empty
        alert("can't plan nothing!");
    }
    else{
        let li = document.createElement("li");  // create li element with tagname "li"
        li.innerHTML = inputBox.value;  // making user input the text stored in li
        listContainer.appendChild(li);  // add element to go under list-container (as task)
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";  // make it the cross icon
        li.appendChild(span);
    }
    inputBox.value = '';    // resets input box to empty after task submission
    saveData();
}

// look for event (user clicks on anything in list-container) and proceed with anonymous function with parameter "clicked" (what was clicked)
listContainer.addEventListener("click", function(clicked){
    if(clicked.target.tagName == "LI"){ // if list item clicked
        clicked.target.classList.toggle("checked"); // mark as checked
    }
    else if(clicked.target.tagName == "SPAN"){  // if user clicks on the X
        clicked.target.parentElement.remove(); // delete task
    }
    saveData();
}, false)   // last argument set to false bc not using callback feature


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}

function retrieveData(){
    listContainer.innerHTML = localStorage.getItem("data");
}


retrieveData();