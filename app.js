const havoc = document.querySelector(".havoc");
const display = document.querySelector('.container')

//Character Movement Constant + gravity
const keyPress = 250;
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

//game start
let gameOn = false
window.addEventListener('keyup', (e) =>{
switch(e.key) {
    case 'Enter':
       gameOn = true;
setInterval(charGravity, 5);
setInterval(generateObstacles, 2000);
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
    obstacle.style.right = 0;
    let randomNum = Math.floor(Math.random() * window.height) - 250;
    obstacle.style.top = randomNum + 'px';
    display.appendChild(obstacle);

    function obstacleMovement() {
    obstacle.style.right = parseInt(obstacle.style.right) + 1 + 'px';
    }
    setInterval(obstacleMovement, 1);
}

//boundaries


