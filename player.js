
var script = document.createElement('script');
script.src = 'sprite.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

function Player(name, x, y, width, height, velX, velY, speed) {
    this.name = name;
    //this.x = x;
    //this.y = y;
    //this.width = width;
    //this.height = height;
    this.velX = velX;
    this.velY = velY;
    this.speed = speed;
    this.sprite = new Sprite(name, x, y, width, height);

    this.update = function(){
        if (this.velX > 0) {
            if (!(this.sprite.x >= ctx.canvas.width - this.sprite.width))
                this.sprite.x += this.velX;
        } else if (this.velX < 0) {
            if (!(this.sprite.x <= 0)) {
                this.sprite.x += this.velX;
            }
        }
        //this.sprite.y += this.velY;
    }
}