"use strict";

function Point(x, y) {
    this.x = x;
    this.y = y;
}

Point.prototype.clone = function () {
    return new Point(this.x, this.y);
};

Point.prototype.equal = function (point) {
    return point.x === this.x && point.y === this.y;
};