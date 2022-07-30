const pipes = document.getElementsByClassName("pipe");
const havoc = document.querySelector(".havoc");

const move = 20;
let xLocation = havoc.style.left;
let yLocation = havoc.style.top;


// character movement
let arrows = window.addEventListener('keyup', (e) => {
    switch(e.key) {
        case 'ArrowUp':
            havoc.style.top = parseInt(havoc.style.top) - move + 'px';
            console.log(yLocation);
        break;
        case 'ArrowDown':
            havoc.style.top = parseInt(havoc.style.top) + move + 'px';
            console.log(yLocation);
        break;       
        case 'ArrowRight':
            havoc.style.left = parseInt(havoc.style.left) + move + 'px';
            console.log(xLocation);
        break;
        case 'ArrowLeft':
            havoc.style.left = parseInt(havoc.style.left) - move + 'px';
            console.log(xLocation);
        break;     
    }
});

// //gravity
function gravity() {
let dy = parseInt(havoc.style.top) + move + 'px';
havoc.style.top = dy;
};

gravity();

setInterval(gravity, 1000);