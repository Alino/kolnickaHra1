update = function() {

};

draw = function() {

};

function Gameloop() {
    update();
    draw();
    requestAnimationFrame(Gameloop);
};