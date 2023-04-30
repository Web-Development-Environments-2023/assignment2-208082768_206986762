export default class Bullet {
    constructor(canvas, x, y, velocity, bulletColor) {
        this.canvas = canvas;
        this.x = x;
        this.y = y;
        this.velocity = velocity;
        this.bulletColor = bulletColor;

        this.width = this.canvas.width / 200;
        this.height = this.canvas.height / 38;
    }

    draw(ctx) {
        this.y += this.velocity;
        ctx.fillStyle = this.bulletColor;
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }

    collideWith(sprite) {
        if (
            this.x + this.width > sprite.x &&
            this.x < sprite.x + sprite.width &&
            this.y + this.height > sprite.y &&
            this.y < sprite.y + sprite.height
        ) {
            return true;
        } else {
            return false;
        }
    }
}