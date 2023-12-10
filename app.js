let totBtn = ["btn-1", "btn-2", "btn-3", "btn-4"];

//track
let cpuSeq = [];
let userSeq = [];

let start = false;
let level = 0;
let h2 = document.querySelector('h2');

//keyPress to Strat game
addEventListener("keypress", function () {
    if (start == false) {
        start = true;
        console.log("game started"); 
        levelUp(); 
    }
});

function btnFlash(btn) {
    btn.classList.add("flash");
    setTimeout(function () {
        btn.classList.remove("flash");
    }, 200);
}

function levelUp() {
    //new level user array is intialize empty
    userSeq = [];
    level++;
    h2.innerText = `Level ${level}`;

    //random btn flash
    let randomNo = Math.floor(Math.random() * 3);
    randomColor = totBtn[randomNo];

    //selected btn 
    randomBtn = document.querySelector(`.${randomColor}`);

    // console.log(randomNo);
    // console.log(randomColor);
    // console.log(randomBtn);
    
    //store flashed color
    cpuSeq.push(randomColor);
    console.log(cpuSeq);
    btnFlash(randomBtn);
}

//add event for all buttons
let allBtn = document.querySelectorAll(".box");
for(btn of allBtn) {
    btn.addEventListener("click", btnPress);
}

function btnPress() {
    let btn = this;
    btnFlash(btn);

    userColor = btn.getAttribute("id");
    userSeq.push(userColor);
    console.log(userColor);

    checkAns(userSeq.length - 1);
}

function checkAns(idx) {
    //check
    if (cpuSeq[idx] === userSeq[idx]) {
        //last ele con
        if (userSeq.length == cpuSeq.length) {
            setTimeout(levelUp, 1000);
        }
    } else {
        h2.innerHTML = `Game Over! Your score was <b>${level - 1}</b> <br> press any key to start.`;
        document.querySelector('body').style.backgroundColor = "red";
        setTimeout(function () {
        document.querySelector('body').style.backgroundColor = "white";
        },200);
        reset();
    }
}

function reset(){
    start = false;
    level = 0;
    cpuSeq = [];
    userSeq = [];
}