import EnemyController from "/javascript/game/enemyController.js";

// // constants for game play
// var TIME_INTERVAL = 25; // screen refresh interval in milliseconds  

// // variables for the game loop and tracking statistics
// var intervalTimer; // holds interval timer
// var timerCount; // number of times the timer fired since the last second
// var timeLeft; // the amount of time left in seconds
// var timeElapsed; // the number of seconds elapsed


var canvas = document.getElementById("gameBoard"); // the canvas
var ctx = canvas.getContext("2d"); // used for drawing on the canvas
var enemyController = new EnemyController(canvas);
var background = new Image();
// TODO change canvas height and weight according to the current webpage

canvas.width = 600;
canvas.height = 600;

background.src = "/resources/images/spaceCat.png";

function game(){
    ctx.drawImage(background,0,0,canvas.width,canvas.height);
    enemyController.draw(ctx);
    
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

setInterval(game,1000/60);

// TODO check below
// window.addEventListener("load", setupGame, false);