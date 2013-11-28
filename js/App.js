"use strict";

var requestAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
var cancelRequestAnimFrame = window.cancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.CancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;

function App(config) {
    this.requestFrameId = null;
    this.lastFrameTs = 0;

    this.animationStep = config.animationStep || 1000;

    this.snake = new Snake(config.snake);
    this.area = new Area(config.canvasId, config.area);
    this.area.snake = this.snake;
    this.area.addFruit();

    document.body.addEventListener('keydown', this.onKeyDown.bind(this));
    this.start();
}

App.prototype.onKeyDown = function (e) {
    switch (e.keyCode) {
        case 37:
            this.snake.direction = 'left';
            break;
        case 38:
            this.snake.direction = 'up';
            break;
        case 39:
            this.snake.direction = 'right';
            break;
        case 40:
            this.snake.direction = 'down';
            break;
    }
};

App.prototype.frame = function () {
    var currentTs = new Date().getTime();
    if (this.lastFrameTs + this.animationStep <= currentTs) {
        this.lastFrameTs = currentTs;
        this.snake.move();
        this.area.render();
    }
    this.requestFrameId = requestAnimFrame(this.frame.bind(this));
};

App.prototype.start = function () {
    this.frame();
};

App.prototype.stop = function () {
    cancelRequestAnimFrame(this.requestFrameId);
};