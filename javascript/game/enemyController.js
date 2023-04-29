import Enemy from "/javascript/game/enemy.js";
import MovingDirections from "/javascript/game/movingDirections.js";
export default class EnemyController {
    // 2-D Array representing enemies types distribution.
    // zero-repressenting dead enemy.
    enemyMap = [
        [1, 1, 1, 1, 1],
        [2, 3, 3, 3, 2],
        [2, 3, 3, 3, 2],
        [1, 1, 1, 1, 1],
    ];

    // 2-D Array representing enemies objects.
    enemyRows = [];
    currenDirection = MovingDirections.right;
    xVelocity = 0;
    defaultXVelocity = 1;
    


    constructor(canvas) {
        this.canvas = canvas;
        this.createEnemies();
    }

    // draw the enemies according to the distribution.
    draw(ctx) {
        this.drawEnemies(ctx);
    }

    // helper function to draw enemies.
    drawEnemies(ctx) {
        this.enemyRows.flat().forEach((enemy)=>{
            enemy.draw(ctx);
        })
    }


    // A function that creates enemies objects.
    createEnemies() {
        this.enemyMap.forEach((row, rowIndex) => {
            this.enemyRows[rowIndex] = [];
            row.forEach((enemyNumber, enemyIndex) => {
                if(enemyNumber>0){
                    this.enemyRows[rowIndex].push(new Enemy(enemyIndex * 60, rowIndex * 45, enemyNumber))
                }

            })
        })
    }
}