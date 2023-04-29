let myShip = document.getElementById("myShip1");


function chooseShip(selectedShip) {
    switch (selectedShip) {
        case "/resources/images/myShip1.png":
            document.getElementById("myShip1").style.backgroundColor = "red";
            document.getElementById("myShip2").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip3").style.backgroundColor = "#b2b3a1";

            break;

        case "/resources/images/myShip2.png":
            document.getElementById("myShip1").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip2").style.backgroundColor = "red";
            document.getElementById("myShip3").style.backgroundColor = "#b2b3a1";

            break;

        case "/resources/images/myShip3.png":
            document.getElementById("myShip1").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip2").style.backgroundColor = "#b2b3a1";
            document.getElementById("myShip3").style.backgroundColor = "red";

            break;
    }

    myShip = selectedShip;
}
//TODO don't forget moving limit
// 40% from height

export default class Player {
    rightPressed = false;
    leftPressed = false;
    upPressed = false;
    downPressed = false;
    shootPressed = false;

    constructor(canvas, velocity, bulletController, lives = 3) {
        this.canvas = canvas;
        this.velocity = velocity;
        this.width = canvas.width / 15;
        this.height = canvas.height / 15;
        this.x = Math.floor(Math.random() * (this.canvas.width - this.width));
        this.y = Math.floor(Math.random() * (this.canvas.height - this.height * 2) * 0.4) + (this.canvas.height - this.height) * 0.6;

        this.lives = lives;

        //TODO - change to myShip
        this.image = new Image();
        this.image.src = "/resources/images/icon3.png"
        // this.image = myShip;

        this.bulletController = bulletController;

        document.addEventListener("keydown", this.keydown);
        document.addEventListener("keyup", this.keyup);
    }
    draw(ctx) {
        if (this.shootPressed) {
            this.bulletController.shoot(this.x + this.width / 2, this.y - this.height / 4, -this.velocity, 8);
        }
        this.move();
        this.collideWithWalls();
        ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
    }

    move() {
        if (this.rightPressed) {
            this.x += this.velocity;
        } else if (this.leftPressed) {
            this.x += -this.velocity;
        }
        else if (this.upPressed) {
            this.y += -this.velocity;
        } else if (this.downPressed) {
            this.y += this.velocity;
        }
    }

    collideWithWalls() {
        //left
        if (this.x < 0) {
            this.x = 0;
        }

        //right
        if (this.x > this.canvas.width - this.width) {
            this.x = this.canvas.width - this.width;
        }

        //up
        if (this.y < this.canvas.height * 0.6 - this.height) {
            this.y = this.canvas.height * 0.6 - this.height;
        }

        //down 
        if (this.y > (this.canvas.height - this.height)) {
            this.y = this.canvas.height - this.height;
        }

    }

    // TODO - check conf. keys

    keydown = (event) => {
        if (event.code == "ArrowUp") {
            this.upPressed = true;
        }
        if (event.code == "ArrowDown") {
            this.downPressed = true;
        }
        if (event.code == "ArrowRight") {
            this.rightPressed = true;
        }
        if (event.code == "ArrowLeft") {
            this.leftPressed = true;
        }
        if (event.code == "Space") {
            this.shootPressed = true;
        }
    };

    keyup = (event) => {
        if (event.code == "ArrowUp") {
            this.upPressed = false;
        }
        if (event.code == "ArrowDown") {
            this.downPressed = false;
        }
        if (event.code == "ArrowRight") {
            this.rightPressed = false;
        }
        if (event.code == "ArrowLeft") {
            this.leftPressed = false;
        }
        if (event.code == "Space") {
            this.shootPressed = false;
        }
    };
}