"use strict";

function Sprite(name, x, y, width, height) {
    this.name = name;
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    this.X = x + width;
    this.Y = y + height;
    this.image = new Image();

    this.load = function (imageName) {
        this.image.src = "sprites/" + imageName + ".png";
    };

    this.draw = function(ctx) {
        ctx.drawImage(this.image, 0, 0, this.width, this.height, this.x, this.y, this.width, this.height);
    };
}