const havoc = document.querySelector(".havoc");
const pipe1 = document.getElementById("pipe1");
const pipe2 = document.getElementById("pipe2");
const pipe3 = document.getElementById("pipe3");
const pipe4 = document.getElementById("pipe4");
const pipe5 = document.getElementById("pipe5");


const keyPress = 20;
const pipeGravity = 1;
const charLilG = 1;


// character movement
let arrows = window.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            havoc.style.top = parseInt(havoc.style.top) - keyPress + 'px';
            console.log(yLocation);
        break;
        case 'ArrowDown':
            havoc.style.top = parseInt(havoc.style.top) + keyPress + 'px';
            console.log(yLocation);
        break;       
        case 'ArrowRight':
            havoc.style.left = parseInt(havoc.style.left) + keyPress + 'px';
            console.log(xLocation);
        break;
        case 'ArrowLeft':
            havoc.style.left = parseInt(havoc.style.left) - keyPress + 'px';
            console.log(xLocation);
        break;     
    }
});


//gravity
function charGravity() {
    let Movement = parseInt(havoc.style.top) + charLilG + 'px';
    havoc.style.top = Movement;
};

//pipeGravity in the negative y direction
function pipe1Gravity() {
    let movementPipes = parseInt(pipe1.style.top) + pipeGravity + 'px';
    pipe1.style.top = movementPipes;
};
function pipe2Gravity() {
    let movementPipes = parseInt(pipe2.style.top) + pipeGravity + 'px';
    pipe2.style.top = movementPipes;
};
function pipe3Gravity() {
    let movementPipes = parseInt(pipe3.style.top) + pipeGravity + 'px';
    pipe3.style.top = movementPipes;
};
function pipe4Gravity() {
    let movementPipes = parseInt(pipe4.style.top) + pipeGravity + 'px';
    pipe4.style.top = movementPipes;
};
function pipe5Gravity() {
    let movementPipes = parseInt(pipe5.style.top) + pipeGravity + 'px';
    pipe5.style.top = movementPipes;
};

//Pipe Gravity in the positive y direction

//Gravity times
setInterval(pipe1Gravity, 1);
setInterval(pipe2Gravity, 1);
setInterval(pipe3Gravity, 1);
setInterval(pipe4Gravity, 1);
setInterval(pipe5Gravity, 1);
setInterval(charGravity, 5);





