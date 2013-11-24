"use strict";

function Snake(x, y, length) {
    this.direction = 'down';
    this.coordinates = [];
    for (var i = 0; i < length; i++) {
        this.coordinates.push({x: x, y: y});
    }
}

Snake.prototype = {
    get head() {
        return this.coordinates[0];
    }
};

Snake.prototype.move = function () {
    var first = {
        x: this.head.x,
        y: this.head.y
    };
    switch (this.direction) {
        case 'right':
            first.x++;
            break;
        case 'down':
            first.y++;
            break;
        case 'left':
            first.x--;
            break;
        case 'up':
            first.y--;
            break;
    }
    this.coordinates.unshift(first);
    this.coordinates.pop();

    return this;
};