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
    fireBulletTimerDefault = 1;
    fireBulletTimer = this.fireBulletTimerDefault;

    constructor(canvas, defaultXVelocity, enemyBulletController, playerBulletController) {
        this.canvas = canvas;
        this.enemyBulletController = enemyBulletController;
        this.defaultXVelocity = defaultXVelocity;
        this.playerBulletController = playerBulletController;
        this.enemyDeathSound = new Audio("/resources/sounds/enemy-death.wav");
        this.enemyDeathSound.volume = 0.5;
        this.createEnemies();
    }

    // draw the enemies according to the distribution.
    draw(ctx) {
        this.updateVelocityAndDirections();
        this.collisionDetection();
        this.drawEnemies(ctx);
        this.fireBullet();
    }

    fireBullet() {
        this.fireBulletTimer--;
        if (this.fireBulletTimer <= 0) {
            this.fireBulletTimer = this.fireBulletTimerDefault;
            const allEnemies = this.enemyRows.flat();
            const enemyIndex = Math.floor(Math.random() * allEnemies.length);
            const enemy = allEnemies[enemyIndex];
            this.enemyBulletController.shoot(enemy.x + enemy.width / 2, enemy.y, this.defaultXVelocity);
        }
    }

    collisionDetection() {
        this.enemyRows.forEach((enemyRow) => {
            enemyRow.forEach((enemy, enemyIndex) => {
                if (this.playerBulletController.collideWith(enemy)) {
                    this.enemyDeathSound.currentTime = 0;
                    this.enemyDeathSound.play();
                    enemyRow.splice(enemyIndex, 1);
                }
            });
        });
        // Give us a new array includes the not empty rows.
        this.enemyRows = this.enemyRows.filter((enemyRow) => enemyRow.length > 0);
    }

    updateVelocityAndDirections() {
        for (const enemyRow of this.enemyRows) {
            if (this.currenDirection == MovingDirections.right) {
                this.xVelocity = this.defaultXVelocity;
                const rightMostEnemy = enemyRow[enemyRow.length - 1];
                if (rightMostEnemy.x + rightMostEnemy.width >= this.canvas.width) {
                    this.currenDirection = MovingDirections.left;
                    break;
                }
            }
            else if (this.currenDirection == MovingDirections.left) {
                this.xVelocity = -this.defaultXVelocity;
            }

            if (this.currenDirection == MovingDirections.left) {
                this.xVelocity = -this.defaultXVelocity;
                const leftMostEnemy = enemyRow[0];
                if (leftMostEnemy.x <= 0) {
                    this.currenDirection = MovingDirections.right;
                    break;
                }
            }
            else if (this.currenDirection == MovingDirections.right) {
                this.xVelocity = this.defaultXVelocity;
            }
        }
    }

    // helper function to draw enemies.
    drawEnemies(ctx) {
        this.enemyRows.flat().forEach((enemy) => {
            enemy.move(this.xVelocity);
            enemy.draw(ctx);
        })
    }


    // A function that creates enemies objects.
    createEnemies() {
        this.enemyMap.forEach((row, rowIndex) => {
            this.enemyRows[rowIndex] = [];
            row.forEach((enemyNumber, enemyIndex) => {
                if (enemyNumber > 0) {
                    this.enemyRows[rowIndex].push(new Enemy(this.canvas, enemyIndex * this.canvas.width / 13, rowIndex * this.canvas.height / 13, enemyNumber))
                }

            })
        })
    }
}