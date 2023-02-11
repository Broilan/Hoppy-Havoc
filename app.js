const havoc = document.querySelector(".havoc");
const display = document.querySelector('body')
const body = document.querySelector('body')
const obstacle = document.querySelector('.obstacle')
const obstacleTwo = document.querySelector('.obstacleTwo')
const obstacleThree = document.querySelector('.obstacleThree')
const score = document.querySelector(".score")
const container = document.querySelector(".container")



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
    let time = document.createElement('h1');
    time.classList.add('time');
    let sec = '0';
    timer = setInterval(() =>{
        time.textContent = "00:" + sec;
        sec++;
    }, 1000)
    time.style.display = 'flex';
    time.style.justifyContent = 'center';
    time.style.alignItems = 'center';
    time.style.top = '-22px';
    time.style.left = '45%';
    time.style.height = '75.3px';
    time.style.width = '150px';
    time.style.color = 'white';
    body.appendChild(time);
}

let gameOn = false


//game start
window.addEventListener('keyup', (e) =>{
switch(e.key) {
    case 'Enter':
       gameOn = true;
       body.removeChild(container);
       count();
setInterval(charGravity, 20);


let gO = setInterval(generateObstacles, 3200);
let gOTwo = setInterval(generateObstaclesTwo, 3500);
let gOThree = setInterval(generateObstaclesThree, 3750);

//gravity
function charGravity() {
    let Movement = parseInt(havoc.style.top) + charLilG + 'px';
    havoc.style.top = Movement;
};

// pipe removal
function pipeRemove() {
    if (obstacle.style.left < -200 + 'px'){
        display.removeChild(obstacle);
    }
        else {
            return
        }
}
setInterval(pipeRemove, 3000);

function pipeRemoveTwo() {
    if (obstacleTwo.style.left < -200 + 'px'){
        display.removeChild(obstacleTwo);
    }
        else {
            return
        }
}
setInterval(pipeRemoveTwo, 3000);

function boundaries() {
    if(parseInt(havoc.style.left) < 0 ){
        gameOver()
        return
    } else if(parseInt(havoc.style.left) > parseInt(body.clientWidth)){
        gameOver()
        return
    }else if(parseInt(havoc.style.top) > window.innerHeight) {
        gameOver()
        return
        }else if (parseInt(havoc.style.top) < 0) {
        gameOver()
        return
        }else {
            return
        }
         
    }


setInterval(boundaries, 1)

function pipeRemoveThree() {
    if (obstacleThree.style.left < -200 + 'px'){
        display.removeChild(obstacleThree);
        console.log("oowa")
    }
        else {
            return
        }
}

setInterval(pipeRemoveThree, 3000);


//pipe movement
    function obstacleMovement() {
    obstacle.style.left = parseInt(obstacle.style.left) - 4 + 'px';
    }
let omInterval = setInterval(obstacleMovement, 1);

function obstacleMovementTwo() {
    obstacleTwo.style.left = parseInt(obstacleTwo.style.left) - 4 + 'px';
    }
let omIntervalTwo = setInterval(obstacleMovementTwo, 1);

function obstacleMovementThree() {
    obstacleThree.style.left = parseInt(obstacleThree.style.left) - 4 + 'px';
    }
let omIntervalThree = setInterval(obstacleMovementThree, 1);

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
    if(havocRight + havocWidth < obstacleRight) { //directly to the left of a pipe
        
    } else if (havocTop > obstacleTop + obstacleHeight) {// directly below a pipe
    } else if (havocTop + havocHeight < obstacleTop) {// directly above a pipe 
    } else if (havocRight > obstacleRight + obstacleWidth) {//directly to the right of a pipe
    } else (gameOver()); {
    }
   
}  



function detectHitTwo() {
    let havocRight = parseInt(havoc.style.left);
    let obstacleRight = parseInt(obstacleTwo.style.left);
    let havocTop = parseInt(havoc.style.top);
    let obstacleTop = parseInt(obstacleTwo.style.top);
    let havocWidth = parseInt(havoc.clientWidth);
    let havocHeight = parseInt(havoc.clientHeight);
    let obstacleHeight = parseInt(obstacleTwo.clientHeight);
    let obstacleWidth =  parseInt(obstacleTwo.clientWidth);
    // compare tops to bottoms
    if(havocRight + havocWidth < obstacleRight) {  //directly to the left of a pipe
    } else if (havocTop > obstacleTop + obstacleHeight) {// directly below a pipe
    } else if (havocTop + havocHeight < obstacleTop) {// directly above a pipe 
    } else if (havocRight > obstacleRight + obstacleWidth) {//directly to the right of a pipe
    } else (gameOver()); {
    }
   
} 
function detectHitThree() {
    let havocRight = parseInt(havoc.style.left);
    let obstacleRight = parseInt(obstacleThree.style.left);
    let havocTop = parseInt(havoc.style.top);
    let obstacleTop = parseInt(obstacleThree.style.top);
    let havocWidth = parseInt(havoc.clientWidth);
    let havocHeight = parseInt(havoc.clientHeight);
    let obstacleHeight = parseInt(obstacleThree.clientHeight);
    let obstacleWidth =  parseInt(obstacleThree.clientWidth);
    // compare tops to bottoms
    if(havocRight + havocWidth < obstacleRight) {  //directly to the left of a pipe
    } else if (havocTop > obstacleTop + obstacleHeight) {// directly below a pipe
    } else if (havocTop + havocHeight < obstacleTop) { // directly above a pipe 
    } else if (havocRight > obstacleRight + obstacleWidth) {//directly to the right of a pipe
    } else (gameOver()); {
    }
   
}   

let dh = setInterval(detectHit, 1); 
let dhtwo = setInterval(detectHitTwo, 1); 
let dhthree =setInterval(detectHitThree, 1); 


//score counter
function detectPositionOne() {
    let havocRight = parseInt(havoc.style.left);
    let obstacleRight = parseInt(obstacle.style.left);
    let havocTop = parseInt(havoc.style.top);
    let obstacleTop = parseInt(obstacle.style.top);
    let havocWidth = parseInt(havoc.clientWidth);
    let havocHeight = parseInt(havoc.clientHeight);
    let obstacleHeight = parseInt(obstacle.clientHeight);
    let obstacleWidth =  parseInt(obstacle.clientWidth);
    // compare tops to bottoms
    if(havocRight + havocWidth < obstacleRight) { //directly to the left of a pipe
        
    } else if (havocTop > obstacleTop + obstacleHeight) {// directly below a pipe
        incrementScore()
    } else if (havocTop + havocHeight < obstacleTop) {// directly above a pipe 
        incrementScore()
    } else if (havocRight > obstacleRight + obstacleWidth) {//directly to the right of a pipe
    } else (gameOver()); {
    }
   
}  

function detectPositionTwo() {
    let havocRight = parseInt(havoc.style.left);
    let obstacleRight = parseInt(obstacleTwo.style.left);
    let havocTop = parseInt(havoc.style.top);
    let obstacleTop = parseInt(obstacleTwo.style.top);
    let havocWidth = parseInt(havoc.clientWidth);
    let havocHeight = parseInt(havoc.clientHeight);
    let obstacleHeight = parseInt(obstacleTwo.clientHeight);
    let obstacleWidth =  parseInt(obstacleTwo.clientWidth);
    // compare tops to bottoms
    if(havocRight + havocWidth < obstacleRight) {  //directly to the left of a pipe
    } else if (havocTop > obstacleTop + obstacleHeight) {// directly below a pipe
        incrementScore()
    } else if (havocTop + havocHeight < obstacleTop) {// directly above a pipe 
        incrementScore()
    } else if (havocRight > obstacleRight + obstacleWidth) {//directly to the right of a pipe
    } else (gameOver()); {
    }
   
} 
function detectPositionThree() {
    let havocRight = parseInt(havoc.style.left);
    let obstacleRight = parseInt(obstacleThree.style.left);
    let havocTop = parseInt(havoc.style.top);
    let obstacleTop = parseInt(obstacleThree.style.top);
    let havocWidth = parseInt(havoc.clientWidth);
    let havocHeight = parseInt(havoc.clientHeight);
    let obstacleHeight = parseInt(obstacleThree.clientHeight);
    let obstacleWidth =  parseInt(obstacleThree.clientWidth);
    // compare tops to bottoms
    if(havocRight + havocWidth < obstacleRight) {  //directly to the left of a pipe
    } else if (havocTop > obstacleTop + obstacleHeight) {// directly below a pipe
        incrementScore()
    } else if (havocTop + havocHeight < obstacleTop) { // directly above a pipe 
        incrementScore()
    } else if (havocRight > obstacleRight + obstacleWidth) {//directly to the right of a pipe
    } else (gameOver()); {
    }
   
} 
function incrementScore() {
    score.innerHTML = (parseInt(score.innerHTML) + 1)
}

const pointOne = setInterval(detectPositionOne, 600); 
const pointTwo = setInterval(detectPositionTwo, 600); 
const pointThree = setInterval(detectPositionThree, 600); 

//creating pipes
function generateObstacles() {
    obstacle.style.left = window.innerWidth + 'px';
    let randomNum = Math.floor(Math.random() * window.innerHeight) + 'px';
    obstacle.style.top = parseInt(randomNum) + 'px';
    display.appendChild(obstacle);
} 

function generateObstaclesTwo() {
    obstacle.style.left = window.innerWidth + 'px';
    let randomNum = Math.floor(Math.random() * window.innerHeight) + 'px';
    obstacleTwo.style.bottom = parseInt(randomNum) + 'px';
    display.appendChild(obstacleTwo);
} 

function generateObstaclesThree() {
    obstacle.style.left = window.innerWidth + 'px';
    let randomNum = Math.floor(Math.random() * window.innerHeight) + 'px';
    obstacleThree.style.top = parseInt(randomNum) + 'px';
    display.appendChild(obstacleThree);
} 

    
//game end
function gameOver() {
    clearInterval(pointOne);
    clearInterval(pointTwo);
    clearInterval(pointThree);
    clearInterval(gO);
    clearInterval(gOTwo);
    clearInterval(gOThree);
    clearInterval(dh);
    clearInterval(dhtwo);
    clearInterval(dhthree);
    clearInterval(omInterval);
    clearInterval(omIntervalTwo);
    clearInterval(omIntervalThree);
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
})
