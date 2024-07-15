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
let colors = ["Red", "Blue", "Green", "Orange"];
let started = false;
let level = 0;
let points = 0;
let levelTitle = document.getElementById("level-title");
let pointsTitle = document.getElementById("points-title");
let h2 = document.querySelector("h2");

document.addEventListener("keypress", function () {
    if (!started) {
        console.log("Game is starting");
        started = true;
        level = 0;
        points = 0;
        gameSeq = [];
        updateLevelAndPoints();
        levelUp();
    }
});

document.querySelectorAll(".btn").forEach(button => {
    button.addEventListener("click", function () {
        let userChosenColor = this.classList[1];
        userSeq.push(userChosenColor);
        btnFlash(this);
        checkAnswer(userSeq.length - 1);
    });
});

function btnFlash(button) {
    button.classList.add("flash");
    setTimeout(function () {
        button.classList.remove("flash");
    }, 250);
}

function levelUp() {
    userSeq = [];
    level++;
    updateLevelAndPoints();

    let randIdx = Math.floor(Math.random() * 4);
    let randColor = colors[randIdx];
    gameSeq.push(randColor);

    console.log(randIdx);
    console.log(randColor);
    let randBtn = document.querySelector(`.${randColor}`);
    btnFlash(randBtn);

    flashSequence();
}



function flashSequence() {
    let i = 0;
    const interval = setInterval(() => {
        btnFlash(document.querySelector(`.${gameSeq[i]}`));
        i++;
        if (i >= gameSeq.length) {
            clearInterval(interval);
        }
    }, 600);
}

function checkAnswer(currentLevel) {
    if (userSeq[currentLevel] === gameSeq[currentLevel]) {
        console.log("Success!");
        if (userSeq.length === gameSeq.length) {
            points += level;
            updateLevelAndPoints();
            setTimeout(levelUp, 1000);
        }
    } else {
        console.log("Wrong!");
        h2.innerText = "Game Over, Press Any Key to Restart";
        startOver();
    }
}

function updateLevelAndPoints() {
    levelTitle.innerText = `Level: ${level}`;
    pointsTitle.innerText = `Points: ${points}`;
}

function startOver() {
    level = 0;
    points = 0;
    gameSeq = [];
    started = false;
    updateLevelAndPoints();
}
