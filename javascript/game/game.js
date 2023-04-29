import EnemyController from "/javascript/game/enemyController.js";
import Player from "/javascript/game/player.js";
import BulletController from "/javascript/game/bulletController.js";


// // constants for game play
// var TIME_INTERVAL = 25; // screen refresh interval in milliseconds  

// // variables for the game loop and tracking statistics
// var intervalTimer; // holds interval timer
// var timerCount; // number of times the timer fired since the last second
// var timeLeft; // the amount of time left in seconds
// var timeElapsed; // the number of seconds elapsed


var canvas = document.getElementById("gameBoard"); // the canvas
var ctx = canvas.getContext("2d"); // used for drawing on the canvas
canvas.width = 800;
canvas.height = 800;

const playerBulletController = new BulletController(canvas, canvas.height, "gold", true, true);
const enemyBulletController = new BulletController(canvas, 1, "red", false, false);

var player = new Player(canvas, 3, playerBulletController);
var enemyController = new EnemyController(canvas, 3, enemyBulletController, playerBulletController);
let isGameOver = false;
let didWin = false;
// TODO change canvas height and weight according to the current webpage

var background = new Image();
background.src = "/resources/images/spaceCat.png";

function checkGameOver() {
    if (isGameOver) {
        return;
    }

    if (enemyBulletController.collideWith(player)) {
        player.lives -= 1;
        if (player.lives <= 0) { isGameOver = true; }
    }
    if (enemyController.enemyRows.length === 0) {
        didWin = true;
        isGameOver = true;
    }
}

function displayGameOver() {
    if (isGameOver) {
        let text = didWin ? "You Win" : "Game Over";
        let textOffset = didWin ? 3.5 : 5;

        ctx.fillStyle = "white";
        ctx.font = "70px Arial";
        ctx.fillText(text, canvas.width / textOffset, canvas.height / 2);
    }
}

function game() {
    checkGameOver();
    displayGameOver();
    if (!isGameOver) {
        ctx.drawImage(background, 0, 0, canvas.width, canvas.height);
        enemyController.draw(ctx);
        player.draw(ctx);
        playerBulletController.draw(ctx);
        enemyBulletController.draw(ctx);
    }
    //TODO - reset
    // resetElements(); // reinitialize all game elements
    // stopTimer(); // terminate previous interval timer
    // set every element of hitStates to false--restores target pieces

    //TODO ccheck how to set hitState 
    //TODO call it from enemy object
    // for (var i = 0; i < TARGET_PIECES; ++i)
    //     hitStates[i] = false; // target piece not destroyed

    //TODO add time
    // timeLeft = 10; // start the countdown at 10 seconds
    // timerCount = 0; // the timer has fired 0 times so far //TODO check this var
    // timeElapsed = 0; // set the time elapsed to zero
    // startTimer(); // starts the game loop

    //IMPORTANT: time requirenments is set in the document
}

setInterval(game, 1000 / 60);

// TODO check below
// window.addEventListener("load", setupGame, false);