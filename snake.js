let size = 20;
let row = 20;
let col = 20;
let board;
let context;
let snakex = size * 5;
let snakey = size * 5;
let speedx = 0; 
let speedy = 0;
let snakebody = [];
let foodx; 
let foody;
let gameover = false;

window.onload = function () {
    board = document.getElementById("board");
    board.height = 400;
    board.width = 400;
    context = board.getContext("2d");
    placefood();
    document.addEventListener("keyup", changedirection);
    setInterval(update, 1000 / 10);
};

function placefood() {
    foodx = Math.floor(Math.random() * col) * size; 
    foody = Math.floor(Math.random() * row) * size;
}

function update() {
    if (gameover) return;

    context.fillStyle = "red";
    context.fillRect(0, 0, board.width, board.height);

    context.fillStyle = "blue";
    context.fillRect(foodx, foody, size, size); 

    if (snakex == foodx && snakey == foody) {
        snakebody.push([foodx, foody]);
        placefood();
    }

    for (let i = snakebody.length - 1; i > 0; i--) {
        snakebody[i] = snakebody[i - 1];
    }
    if (snakebody.length) {
        snakebody[0] = [snakex, snakey];
    }

    snakex += speedx * size;
    snakey += speedy * size;

    for (let i = 0; i < snakebody.length; i++) {
        if (snakex == snakebody[i][0] && snakey == snakebody[i][1]) {
            gameover = true;
            alert("Game Over");
        }
    }

    context.fillStyle = "white";
    context.fillRect(snakex, snakey, size, size);
    for (let i = 0; i < snakebody.length; i++) {
        context.fillRect(snakebody[i][0], snakebody[i][1], size, size);
    }

    if (snakex < 0 || snakex >= col * size || snakey < 0 || snakey >= row * size) {
        gameover = true;
        alert("Game Over");
    }
}

function changedirection(e) {
    if (e.code == "ArrowUp" && speedy != 1) {
        speedx = 0;
        speedy = -1;
    } else if (e.code == "ArrowDown" && speedy != -1) {
        speedx = 0;
        speedy = 1;
    } else if (e.code == "ArrowRight" && speedx != -1) {
        speedx = 1;
        speedy = 0;
    } else if (e.code == "ArrowLeft" && speedx != 1) {
        speedx = -1;
        speedy = 0;
    }
}
  
for(let i = 0;i< snakebody.length; i++){
  context.fillRect(snakebody[1][0],snakebody[i][1], blockSize, blockSize);
}
if(snakex < 0||snakex > col*size
  ||snakey < 0 || snakey > row*size){
  gameover = true;
  alert("game Over");
}
for(let i =0;i < snakebody.length; i++){
  if(snakex == snakebody[i][0] && snakey == snakebody[i][1]){
    gameover = true;
    alert("game over");
  }
}

    