"use strict";

test("Head test", function () {
    var snake = new Snake(0, 0, 3);
    deepEqual(snake.head, {x: 0, y: 0}, "Check initial position.");
    snake = new Snake(4, 8, 3);
    deepEqual(snake.head, {x: 4, y: 8}, "Check initial position.");
});

test("Move test", function () {
    var snake = new Snake(0, 0, 3);
    snake.move().move().move();
    deepEqual(snake.head, {x: 0, y: 3}, "Check moving with default direction.");
});

test("Rotate test", function () {
    var snake = new Snake(10, 10, 3);
    snake.direction = 'left';
    snake.move().move();
    deepEqual(snake.head, {x: 8, y: 10}, "Check rotation to left.");
    snake.direction = 'up';
    snake.move().move().move().move();
    deepEqual(snake.head, {x: 8, y: 6}, "Check rotation to up.");
});