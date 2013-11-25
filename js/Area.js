"use strict";

function Area(width, height) {
    var canvasId = 'area';
    this.sellSize = 50;
    this.sellPadding = 15;

    this.width = width;
    this.height = height;

    var canvasWidth = this.width * (this.sellSize + this.sellPadding) + this.sellPadding;
    var canvasHeight = this.height * (this.sellSize + this.sellPadding) + this.sellPadding;
    this.canvas = new Canvas(canvasId, canvasWidth, canvasHeight);
    this.snake = null;
}

Area.prototype.isPointInArea = function (point) {
    return point.x >= 0 && point.x < this.width && point.y >= 0 && point.y < this.height;
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

    this.canvas.clear();
    for (hi = 0; hi < this.height; hi++) {
        for (wi = 0; wi < this.width; wi++) {
            leftTop = new Point(
                this.sellPadding + wi * (this.sellSize + this.sellPadding),
                this.sellPadding + hi * (this.sellSize + this.sellPadding)
            );
            rightBottom = new Point(
                leftTop.x + this.sellSize,
                leftTop.y + this.sellSize
            );
            color = '#FFFFFF';
            if (filled[wi] && filled[wi][hi] === 1) {
                color = '#FF0000';
            }
            this.canvas.drawRectangle(leftTop, rightBottom, 5, '#000011', color);
        }
    }
};
