"use strict";

function Area(canvasId, config) {
    this.cellSize = config.cellSize || 25;
    this.cellPadding = config.cellPadding || 5;
    this.width = config.width || 5;
    this.height = config.height || 5;
    this.cellBorderColor = config.cellBorderColor || '#000000';
    this.emptyCellColor = config.emptyCellColor || '#FFFFFF';
    this.cellWithSnakeColor = config.cellWithSnakeColor || '#FF0000';
    this.cellWithFruitColor = config.cellWithFruitColor || '#00FF00';

    var canvasWidth = this.width * (this.cellSize + this.cellPadding) + this.cellPadding;
    var canvasHeight = this.height * (this.cellSize + this.cellPadding) + this.cellPadding;
    this.canvas = new Canvas(canvasId, canvasWidth, canvasHeight);
    this.snake = null;
    this.fruit = null;
}

Area.prototype.isPointInArea = function (point) {
    return point.x >= 0 && point.x < this.width && point.y >= 0 && point.y < this.height;
};

Area.prototype.addFruit = function () {
    var x, y, i, isEmptyCell;
    do {
        isEmptyCell = true;
        x = Math.floor(Math.random() * this.width);
        y = Math.floor(Math.random() * this.height);
        if (this.snake) {
            for (i = 0; i < this.snake.coordinates.length; i++) {
                if (x === this.snake.coordinates[i].x && y === this.snake.coordinates[i].y) {
                    isEmptyCell = false;
                    break;
                }
            }
        }
    } while (!isEmptyCell);
    this.fruit = new Point(x, y);
};

Area.prototype.render = function () {
    var hi, wi, leftTop, rightBottom, color, filled = {};

    if (this.snake) {
        for (hi = 0; hi < this.snake.coordinates.length; hi++) {
            var x = this.snake.coordinates[hi].x;
            var y = this.snake.coordinates[hi].y;
            if (!filled[x]) {
                filled[x] = {};
            }
            filled[x][y] = 1;
        }
    }
    if (this.fruit) {
        if (!filled[this.fruit.x]) {
            filled[this.fruit.x] = {};
        }
        filled[this.fruit.x][this.fruit.y] = 2;
    }

    this.canvas.clear();
    for (hi = 0; hi < this.height; hi++) {
        for (wi = 0; wi < this.width; wi++) {
            leftTop = new Point(
                this.cellPadding + wi * (this.cellSize + this.cellPadding),
                this.cellPadding + hi * (this.cellSize + this.cellPadding)
            );
            rightBottom = new Point(
                leftTop.x + this.cellSize,
                leftTop.y + this.cellSize
            );
            color = this.emptyCellColor;
            if (filled[wi] && filled[wi][hi] === 1) {
                color = this.cellWithSnakeColor;
            } else if (filled[wi] && filled[wi][hi] === 2) {
                color = this.cellWithFruitColor;
            }
            this.canvas.drawRectangle(leftTop, rightBottom, 5, this.cellBorderColor, color);
        }
    }
};
