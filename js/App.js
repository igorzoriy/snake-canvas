"use strict";

function App() {
    this.snake = new Snake(0, 0, 3);
    this.area = new Area(5, 5);
    this.area.snake = this.snake;

    document.body.addEventListener('keydown', this.onKeyDown.bind(this));
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