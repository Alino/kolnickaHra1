"use strict";

function Projectile(x, y, width, height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.X = x + width;
    this.Y = y + height;

    this.update = function() {
        this.y -= 10;
    };

    this.draw = function(ctx, sprite) {
        sprite.draw(ctx);
    };
}