"use strict";

function Snake(config) {
    this.direction = 'down';
    var x = config.x || 0,
        y = config.y || 0,
        length = config.length || 3;
    this.coordinates = [];
    for (var i = 0; i < length; i++) {
        this.coordinates.push(new Point(x, y));
    }
    this.alive = true;
    this.aliveColor = config.aliveColor || '#FF0000';
    this.deathColor = config.deathColor || '#0000FF';
}

Snake.prototype = {
    get head() {
        return this.coordinates[0];
    },

    get tail() {
        return this.coordinates[this.length - 1];
    },

    get nextHead() {
        var next = this.head.clone();
        switch (this.direction) {
            case 'right':
                next.x++;
                break;
            case 'down':
                next.y++;
                break;
            case 'left':
                next.x--;
                break;
            case 'up':
                next.y--;
                break;
        }
        return next;
    },

    get color() {
        return this.alive ? this.aliveColor : this.deathColor;
    },

    get length() {
        return this.coordinates.length;
    },

    move: function () {
        if (this.alive) {
            var next = this.nextHead;
            this.coordinates.unshift(next);
            this.coordinates.pop();
        }
        return this;
    },

    death: function () {
        this.alive = false;
        return this;
    },

    eat: function () {
        this.coordinates.push(this.tail.clone());
        return this;
    },

    isPointInSnake: function (point) {
        for (var i = 0; i < this.length; i++) {
            if (point.equal(this.coordinates[i])) {
                return true;
            }
        }
        return false;
    }
};
