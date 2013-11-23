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
    for (var i = 0; i < this.width; i++) {
        data[i] = {};
        for (var j = 0; j < this.height; j++) {
            data[i][j] = '-';
        }
    }

    if (this.snake) {
        for (i = 0; i < this.snake.coordinates.length; i++) {
            var x = this.snake.coordinates[i][0];
            var y = this.snake.coordinates[i][1];
            data[x][y] = 's';
        }
    }

    console.table(data);
};