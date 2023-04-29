import Bullet from "/javascript/game/bullet.js";

export default class BulletController {
    bullets = [];
    timeTillNextBulletAllowed = 0;

    constructor(canvas, maxBulletsAtATime, bulletColor, soundEnabled, player) {
        this.canvas = canvas;
        this.maxBulletsAtATime = maxBulletsAtATime;
        this.bulletColor = bulletColor;
        this.soundEnabled = soundEnabled;

        this.shootSound = new Audio("resources/sounds/shoot.wav");
        this.shootSound.volume = 0.1;

        this.player = player;
    }

    draw(ctx) {

        this.bullets = this.bullets.filter(
            (bullet) => bullet.y + bullet.height > 0 && bullet.y <= this.canvas.height
        );

        this.bullets.forEach((bullet) => bullet.draw(ctx));
        if (this.timeTillNextBulletAllowed > 0) {
            this.timeTillNextBulletAllowed--;
        }
    }

    collideWith(sprite) {
        const bulletThatHitSpriteIndex = this.bullets.findIndex((bullet) =>
            bullet.collideWith(sprite)
        );

        if (bulletThatHitSpriteIndex >= 0) {
            this.bullets.splice(bulletThatHitSpriteIndex, 1);
            return true;
        }

        return false;
    }

    shoot(x, y, velocity, timeTillNextBulletAllowed = 0) {
        if (!this.player && this.bullets.length > 0) {
            this.bullets.forEach((bullet) => {
                if (bullet.y <= 0.6 * this.canvas.height) {
                    this.maxBulletsAtATime = 0;
                } else {
                    this.maxBulletsAtATime += 1;
                }
            });
        }
        if (
            this.timeTillNextBulletAllowed <= 0 &&
            this.bullets.length < this.maxBulletsAtATime
        ) {
            const bullet = new Bullet(this.canvas, x, y, velocity, this.bulletColor);
            this.bullets.push(bullet);
            if (this.soundEnabled) {
                this.shootSound.currentTime = 0;
                this.shootSound.play();
            }
            this.timeTillNextBulletAllowed = timeTillNextBulletAllowed;
        }
    }

    collideWith(sprite) {
        const bulletThatHitSpriteIndex = this.bullets.findIndex((bullet) =>
            bullet.collideWith(sprite)
        );

        if (bulletThatHitSpriteIndex >= 0) {
            this.bullets.splice(bulletThatHitSpriteIndex, 1);
            return true;
        }

        return false;
    }
}