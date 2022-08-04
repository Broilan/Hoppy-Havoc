const havoc = document.querySelector(".havoc");
const display = document.querySelector('.container')
const body = document.querySelector('body')

//Character Movement Constant + gravity
const keyPress = 60;
const charLilG = 1;

// character movement
let arrows = window.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            havoc.style.top = parseInt(havoc.style.top) - keyPress + 'px';
        break;
        case 'ArrowDown':
            havoc.style.top = parseInt(havoc.style.top) + keyPress + 'px';
        break;       
        case 'ArrowRight':
            havoc.style.left = parseInt(havoc.style.left) + keyPress + 'px';
            console.log(havoc.style.left);
        break;
        case 'ArrowLeft':
            havoc.style.left = parseInt(havoc.style.left) - keyPress + 'px';
        break;     
    }
});

//score tracking
function score() {
    let scoreX = document.createElement('h1');
    scoreX.classList.add('score');
    scoreX.textContent = "score:" + counter;
    scoreX.style.display = 'flex';
    scoreX.style.justifyContent = 'center';
    scoreX.style.alignItems = 'center';
    scoreX.style.top = '-22px';
    scoreX.style.left = '45%';
    scoreX.style.height = '75.3px';
    scoreX.style.width = '150px';
    scoreX.style.backgroundColor = 'lightBlue';
    body.appendChild(scoreX);
}
score();
//game start
let startScreen = document.createElement('div');
startScreen.classList.add('startScreen')
startScreen.style.height = '500px';
startScreen.style.width = '800px';
startScreen.style.borderRadius = '100px', 'black';
startScreen.style.backgroundColor = 'lightBlue';
startScreen.style.top = '220px';
startScreen.style.left = '530px';
body.appendChild(startScreen);

let gameOn = false
window.addEventListener('keyup', (e) =>{
switch(e.key) {
    case 'Enter':
       gameOn = true;
       body.removeChild(startScreen);
setInterval(charGravity, 20);
goInterval = setInterval(generateObstacles, 1750);
}
})



//gravity
function charGravity() {
    let Movement = parseInt(havoc.style.top) + charLilG + 'px';
    havoc.style.top = Movement;
};

//creating pipes
function generateObstacles() {
    let obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.left = '1900px';
    let randomNum = Math.floor(Math.random() * window.innerHeight) - 250;
    obstacle.style.top = parseInt(randomNum) + 'px';
    display.appendChild(obstacle);


//pipe movement
    function obstacleMovement() {
    obstacle.style.left = parseInt(obstacle.style.left) - 1 + 'px';
    }

//pipe removal
function pipeRemove() {
        display.removeChild(obstacle);
}
setInterval(pipeRemove, 8000);

//hit detection
function detectHit() {
    let havocRight = parseInt(havoc.style.left);
    let obstacleRight = parseInt(obstacle.style.left);
    let havocTop = parseInt(havoc.style.top);
    let obstacleTop = parseInt(obstacle.style.top);
    let havocWidth = parseInt(havoc.clientWidth);
    let havocHeight = parseInt(havoc.clientHeight);
    let obstacleHeight = parseInt(obstacle.clientHeight);
    let obstacleWidth =  parseInt(obstacle.clientWidth);
    // compare tops to bottoms
    if(havocRight + havocWidth < obstacleRight) {
    } else if (havocTop > obstacleTop + obstacleHeight) {
    } else if (havocTop + havocHeight < obstacleTop) {
    } else if (havocRight > obstacleRight + obstacleWidth) {
    } else (gameOver()); {
    }
   
}    
setInterval(detectHit, 1); 
 let omInterval = setInterval(obstacleMovement, 1);

 //game end 
function gameOver() {
    clearInterval(goInterval);
    clearInterval(omInterval);
    display.removeChild(obstacle);
    let gameOverText = document.createElement('h1');
    gameOverText.classList.add('gameOver');
    gameOverText.textContent = 'Game Over!';
    body.appendChild(gameOverText);
    gameOverText.style.top = '450px';
    gameOverText.style.left = '657px';
    let reset = document.createElement('button');
    reset.classList.add('reset');
    reset.textContent = 'Restart';
    body.appendChild(reset);
    reset.style.top = '650px';
    reset.style.left = '657px';
    reset.addEventListener('click', (e) => {
        window.location.reload();
    })
} 

}


   

//boundaries
document.body.style.overflow = "hidden";


