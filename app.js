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
    let obstacle = document.createElement('div');
    obstacle.classList.add('obstacle');
    obstacle.style.right = 0;
    let randomNum = Math.floor(Math.random() * 1080);
    obstacle.style.top = randomNum + 'px';
    display.appendChild(obstacle);
}

// moving pipes
function obstacleMovement() {
    let obstacle = document.getElementsByClassName('obstacle');
    for (let i = 0; i <= 10; i++) {
        if (i = 10) {
            let xMove = i; {
                console.log(xMove);
        } if (xMove = 10) {
            obstacle.style.right = parseInt(obstacle.style.right) + xMove + 'px';
        }
            }
        }
    }
        


setInterval(generateObstacles, 1000);
setInterval(obstacleMovement, 2000);
setInterval(charGravity, 5);


