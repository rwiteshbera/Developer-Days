const MyDate = document.getElementById('date');
const list = document.getElementById('list');
const plus = document.getElementById('plus');
const input = document.getElementById('input');
const currentTime = new Date();

const checkbox = "fa-check-circle";
const uncheckbox = "fa-circle-thin";
const lineThrough = "lineThrough";

let LIST , id = 0;
// Get item from localstorage
let data = localStorage.getItem("storeitem");

if(data){
    LIST = JSON.parse(data);
    id = LIST.length; // Set the id to the last one in the list
    loadList(LIST); // Load the list from localstorage
}
else{
    LIST = [];
    id = 0;
}

//Load the list from localstorage
function loadList(array){
    array.forEach(function(item) {
        addToDo(item.name, item.id, item.done, item.trash);
    });
}



//Get the day
const getCurrentDay = () => {

    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";

    return weekday[currentTime.getDay()];
}

// Get the date, month, year and time
const getCurrentTime = () => {
    const months = [
        "Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sept", "Oct", "Nov", "Dec"
    ];
    const month = months[currentTime.getMonth()];
    const date = currentTime.getDate();
    const year = currentTime.getFullYear();

    return `${month} ${date}, ${year}`;
}


// Add to do function
function addToDo(ToDo, id, done, trash) {
    if(trash) {return;}

    const DONE = done ? checkbox : uncheckbox;
    const LINE = done ? lineThrough : "";

    const item = `<li class="item">
                    <i class="fa ${DONE} checkbox" id="${id}" title="complete"></i>
                     <p class="text ${LINE}">${ToDo}</p>
                    <i class="fa fa-trash-o del" id="${id}" title="delete"></i>
                 </li>
            `;
    
    const position = "beforeend";
    list.insertAdjacentHTML(position, item);
}
// Add item when ENTER is pressed
document.addEventListener("keyup", function(event) {
    event.preventDefault();
    if(event.keyCode===13){
        let ToDo = input.value;
        // If the input is empty
        if (ToDo === ""){
            alert("ERROR! Please Input a task.");
        }
        else{
            addToDo(ToDo, id, false, false);
            LIST.push({
                name: ToDo,
                id: id,
                done: false,
                trash: false
            })
            // Set Item in Local Storage
            localStorage.setItem("storeitem", JSON.stringify(LIST));
            id++;
        }
        input.value = "";
    }
})


// Plus Button Function
plus.addEventListener("click", function() {
    const ToDo = input.value;
     // If the input is empty
    if (ToDo === ""){
        alert("ERROR! Please Input a task.");
    }
    else{
        addToDo(ToDo, id, false, false);
        LIST.push({
            name: ToDo,
            id: id,
            done: false,
            trash: false
        })
        localStorage.setItem("storeitem", JSON.stringify(LIST));
        id++;
    }
    input.value = "";
})




// Complete ToDO
function completeToDo(element){
    element.classList.toggle(checkbox);
    element.classList.toggle(uncheckbox);
    element.parentNode.querySelector(".text").classList.toggle(lineThrough);
    // console.log(element.id);
    LIST[element.id].done = LIST[element.id].done ? false : true;
    
}

// Function Remove ToDo 
function removeToDo(element){
    element.parentNode.parentNode.removeChild(element.parentNode);
    // console.log(element.id);
    LIST[element.id].trash = true;
}


// Target the items created dynamically
list.addEventListener("click", function(event) {
    let element = event.target; // Return clicked element
    let elementJob = event.target.title; // Complete or delete
    if(elementJob ===  "complete"){
        completeToDo(element);
    }
    else if(elementJob === "delete"){
        removeToDo(element);

    }
    localStorage.setItem("storeitem", JSON.stringify(LIST));
});

MyDate.innerHTML = `${getCurrentDay()} ${getCurrentTime()}`;