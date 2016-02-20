var script = document.createElement('script');
script.src = 'sprite.js';
script.type = 'text/javascript';
document.getElementsByTagName('head')[0].appendChild(script);

var script = document.createElement('script');
script.src = 'projectile.js';
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
    this.isShooting = false;
    this.lastShoot = 0;
    this.fireRate = 300;

    this.shoot = function(projectileArray) {
        var p = new Projectile(this.sprite.x + 20, this.sprite.y, 10, 10);
        projectileArray.push(p);
    };

    this.update = function(ctx, now, projectileArray){
        if (this.velX > 0) {
            if (!(this.sprite.x >= ctx.canvas.width - this.sprite.width))
                this.sprite.x += this.velX;
        } else if (this.velX < 0) {
            if (!(this.sprite.x <= 0)) {
                this.sprite.x += this.velX;
            }
        }

        if ((now > this.lastShoot + this.fireRate) && this.isShooting) {
            this.shoot(projectileArray);
            this.lastShoot = now;
        }
    };
}