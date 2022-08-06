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
        break;
        case 'ArrowLeft':
            havoc.style.left = parseInt(havoc.style.left) - keyPress + 'px';
        break;     
    }
});

//timer styling + functionality
function count() {
    let scoreX = document.createElement('h1');
    scoreX.classList.add('score');
    let sec = '0';
    timer = setInterval(() =>{
    scoreX.textContent = "00:" + sec;
        sec++;
    }, 1000)
    scoreX.style.display = 'flex';
    scoreX.style.justifyContent = 'center';
    scoreX.style.alignItems = 'center';
    scoreX.style.top = '-22px';
    scoreX.style.left = '45%';
    scoreX.style.height = '75.3px';
    scoreX.style.width = '150px';
    scoreX.style.color = 'white';
    body.appendChild(scoreX);
}
//game start
let container2 = document.createElement('div');
container2.classList.add('container2');
body.appendChild(container2);
let gameTitle = document.createElement('h1');
gameTitle.classList.add('gameTitle');
gameTitle.textContent = 'Hoppy Havoc';
container2.appendChild(gameTitle);
let start = document.createElement('p');
start.classList.add('start');
start.textContent = 'Hit Enter To Begin!';
container2.appendChild(start);

let gameOn = false
window.addEventListener('keyup', (e) =>{
switch(e.key) {
    case 'Enter':
       gameOn = true;
       body.removeChild(container2);
       count();
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
    if(havocRight + havocWidth < obstacleRight) {  //directly to the left of a pipe
    } else if (havocTop > obstacleTop + obstacleHeight) {// directly below a pipe
    } else if (havocTop + havocHeight < obstacleTop) {// directly above a pipe   
    } else if (havocRight > obstacleRight + obstacleWidth) {//directly to the right of a pipe
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
    gameOverText.textContent = 'Game Over';
    body.appendChild(gameOverText);
    let reset = document.createElement('button');
    reset.classList.add('reset');
    reset.textContent = 'Play Again';
    body.appendChild(reset);
    reset.addEventListener('click', (e) => {
        window.location.reload();
       
    })
     clearInterval(timer);
} 
}


   

//boundaries
document.body.style.overflow = "hidden";


