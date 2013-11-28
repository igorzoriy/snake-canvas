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

    get color() {
        return this.alive ? this.aliveColor : this.deathColor;
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
    }
};
