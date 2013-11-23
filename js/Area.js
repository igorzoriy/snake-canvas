"use strict";

function Area(width, height) {
    this.width = width;
    this.height = height;

    this.snake = null;
}

Area.prototype.addSnake = function (snake) {
    this.snake = snake;
};

Area.prototype.render = function () {
    var data = {};
    for (var i = 0; i < this.height; i++) {
        data[i] = {};
        for (var j = 0; j < this.width; j++) {
            data[i][j] = '-';
        }
    }

    if (this.snake) {
        for (i = 0; i < this.snake.coordinates.length; i++) {
            var x = this.snake.coordinates[i].x;
            var y = this.snake.coordinates[i].y;
            data[y][x] = 's';
        }
    }

    console.table(data);
};