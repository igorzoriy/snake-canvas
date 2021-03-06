"use strict";

var requestAnimFrame = window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || window.msRequestAnimationFrame || window.oRequestAnimationFrame;
var cancelRequestAnimFrame = window.cancelRequestAnimationFrame || window.mozCancelRequestAnimationFrame || window.webkitCancelRequestAnimationFrame || window.msCancelRequestAnimationFrame || window.oCancelRequestAnimationFrame || window.CancelAnimationFrame || window.mozCancelAnimationFrame || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame || window.oCancelAnimationFrame;

function App(config) {
    this.requestFrameId = null;
    this.lastFrameTs = 0;

    this.animationStep = config.animationStep || 1000;

    this.score = 0;
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
        this.step();
    }
    this.requestFrameId = requestAnimFrame(this.frame.bind(this));
};

App.prototype.step = function () {
    var next = this.snake.nextHead,
        fruit = this.area.fruit;
    if (next.x === fruit.x && next.y === fruit.y) {
        this.snake.eat();
        this.score++;
        this.snake.move();
        this.area.addFruit();
    } else if (!this.area.isPointInArea(next) || this.snake.isPointInSnake(next)) {
        this.snake.death();
        this.stop();
    } else {
        this.snake.move();
    }

    this.render();
};


App.prototype.start = function () {
    this.frame();
};

App.prototype.stop = function () {
    cancelRequestAnimFrame(this.requestFrameId);
};

App.prototype.render = function () {
    document.getElementById('score').innerHTML = 'Your score: ' + this.score;
    if (this.area) {
        this.area.render();
    }
};