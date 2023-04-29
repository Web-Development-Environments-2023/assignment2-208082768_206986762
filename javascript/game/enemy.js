export default class Enemy {
    constructor(x, y, imageNumber) {
        this.x = x;
        this.y = y;
        this.image = new Image();
        this.image.src = `/resources/images/enemyShip${imageNumber+3}.png`;
        // TODO consider height and width of the current screen.

        this.width = 50;
        this.height = 40;
    }
    draw(ctx) {
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }
}