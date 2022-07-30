const havoc = document.querySelector(".havoc");
const display = document.querySelector('.container')
// const pipe1 = document.getElementById("pipe1");
// const pipe2 = document.getElementById("pipe2");
// const pipe3 = document.getElementById("pipe3");
// const pipe4 = document.getElementById("pipe4");
// const pipe5 = document.getElementById("pipe5");

//Character Movement Constant + gravity
const keyPress = 250;
const charLilG = 1;

//randomizing pipe movement
//neg
// const pipe1G = Math.floor(Math.random() * 100 + 25);
// const pipe2G = Math.floor(Math.random() * 100 + 25);
// const pipe3G = Math.floor(Math.random() * 100 + 25);
// const pipe4G = Math.floor(Math.random() * 100 + 25);
// const pipe5G = Math.floor(Math.random() * 100 + 25);
// //pos
// const pipe1Gr = Math.floor(Math.random() * 100 + 25);
// const pipe2Gr = Math.floor(Math.random() * 100 + 25);
// const pipe3Gr = Math.floor(Math.random() * 100 + 25);
// const pipe4Gr = Math.floor(Math.random() * 100 + 25);
// const pipe5Gr = Math.floor(Math.random() * 100 + 25);

//Page sizing
let pageWidth = 1297;
let pageHeight = 985;


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

//creating pipes
function generateObstacles() {
    const obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    display.appendChild(obstacle);
}
generateObstacles();

//pipeGravity in the negative y direction
// function pipe1Gravity() {
//     let movementPipes = parseInt(pipe1.style.top) + pipe1G + 'px';
//     pipe1.style.top = movementPipes;
// };
// function pipe2Gravity() {
//     let movementPipes = parseInt(pipe2.style.top) + pipe2G + 'px';
//     pipe2.style.top = movementPipes;
// };
// function pipe3Gravity() {
//     let movementPipes = parseInt(pipe3.style.top) + pipe3G + 'px';
//     pipe3.style.top = movementPipes;
// };
// function pipe4Gravity() {
//     let movementPipes = parseInt(pipe4.style.top) + pipe4G + 'px';
//     pipe4.style.top = movementPipes;
// };
// function pipe5Gravity() {
//     let movementPipes = parseInt(pipe5.style.top) + pipe5G + 'px';
//     pipe5.style.top = movementPipes;
// };

//Pipe Gravity in the positive y direction
// function posPipe1Gravity() {
//     let movementPipes = parseInt(pipe1.style.top) - pipe1Gr + 'px';
//     pipe1.style.top = movementPipes;
// };
// function posPipe2Gravity() {
//     let movementPipes = parseInt(pipe2.style.top) - pipe2Gr + 'px';
//     pipe2.style.top = movementPipes;
// };
// function posPipe3Gravity() {
//     let movementPipes = parseInt(pipe3.style.top) - pipe3Gr + 'px';
//     pipe3.style.top = movementPipes;
// };
// function posPipe4Gravity() {
//     let movementPipes = parseInt(pipe4.style.top) - pipe4Gr + 'px';
//     pipe4.style.top = movementPipes;
// };
// function posPipe5Gravity() {
//     let movementPipes = parseInt(pipe5.style.top) - pipe5Gr + 'px';
//     pipe5.style.top = movementPipes;
// };

// creating page boundaries


//Negative y direction gravity times
// setInterval(pipe1Gravity, 1500);
// setInterval(pipe2Gravity, 1500);
// setInterval(pipe3Gravity, 1500);
// setInterval(pipe4Gravity, 1500);
// setInterval(pipe5Gravity, 1500);
setInterval(charGravity, 5);

//postive y direction gravity times
// setInterval(posPipe1Gravity, 1000);
// setInterval(posPipe2Gravity, 1000);
// setInterval(posPipe3Gravity, 1000);
// setInterval(posPipe4Gravity, 1000);
// setInterval(posPipe5Gravity, 1000);




