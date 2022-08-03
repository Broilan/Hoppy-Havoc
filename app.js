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

//game start
let gameOn = false
window.addEventListener('keyup', (e) =>{
switch(e.key) {
    case 'Enter':
       gameOn = true;
setInterval(charGravity, 20);
goInterval = setInterval(generateObstacles, 5000);
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
    obstacle.style.left = '1320px';
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
return;
}
}

   

//boundaries
document.body.style.overflow = "hidden";


