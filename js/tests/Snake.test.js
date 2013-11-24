"use strict";

test("Head test", function () {
    var snake = new Snake(0, 0);
    deepEqual(snake.head, {x: 0, y: 0}, 'Check initial position.');
    snake = new Snake(4, 8);
    deepEqual(snake.head, {x: 4, y: 8}, 'Check initial position.');
});

test("Move test", function () {
    var snake = new Snake(0, 0);
    snake.move().move().move();
    deepEqual(snake.head, {x: 0, y: 3}, 'Check moving with default direction.');
});