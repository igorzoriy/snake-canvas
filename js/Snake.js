"use strict";

function Snake(x, y, length) {
    this.direction = 'down';
    this.coordinates = [];
    for (var i = 0; i < length; i++) {
        this.coordinates.push(new Point(x, y));
    }
}

Snake.prototype = {
    get head() {
        return this.coordinates[0];
    },

    get nextHead() {
        var x = this.head.x,
            y = this.head.y;
        switch (this.direction) {
            case 'right':
                x++;
                break;
            case 'down':
                y++;
                break;
            case 'left':
                x--;
                break;
            case 'up':
                y--;
                break;
        }
        return new Point(x, y);
    },

    move: function() {
        var next = this.nextHead;
        this.coordinates.unshift(next);
        this.coordinates.pop();
        return this;
    }
};
