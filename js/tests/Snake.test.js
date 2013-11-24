"use strict";

var snake = new Snake(0, 0);

test("Move test", function () {
    deepEqual(snake.coordinates[0], {x: 0, y: 0}, 'Incorrect initial position.');
    snake.move();
    deepEqual(snake.coordinates[0], {x: 0, y: 1}, 'The snake should move down by default.');
});