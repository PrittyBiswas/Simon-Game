// const addButton = document.getElementById("addTask");
// const inputField = document.getElementById("taskInput");
// const taskList = document.getElementById("taskList");

// addButton.addEventListener("click", function () {
//     const taskText = inputField.value.trim();
//     if (taskText) {
//         const listItem = document.createElement("li");
//         listItem.innerText = taskText;

//         const deleteButton = document.createElement("button");
//         deleteButton.innerText = "Delete";
//         deleteButton.classList.add("delete-button");

//         deleteButton.addEventListener("click", function () {
//             listItem.remove();
//         });

//         listItem.appendChild(deleteButton);
//         taskList.appendChild(listItem);
//         inputField.value = "";
//     }
// });

// taskList.addEventListener("click", function (event) {
//     if (event.target.classList.contains("delete-button")) {
//         const listItem = event.target.parentElement;
//         listItem.remove();
//     }
// });



let gameSeq = [];
let userSeq = [];

let btn = ["red", "blue", "green", "orange"];
let started = false;
let level = 0;
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (started == false) {
        console.log("Game is starting");
        started = true;

        levelUp();
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 250);
}

function levelUp() {
    level++;
    h2.innerText = `Level ${level}`;

    let randIdx = Math.floor(Math.random() * 3);
    let randColor = btn[randIdx];
    let randBtn = document.querySelector(`.${randColor}`);
    console.log(randIdx);
    console.log(randColor);
    console.log(randBtn);
    btnFlash(randBtn);
}
