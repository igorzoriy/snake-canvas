"use strict";

test("Head test", function () {
    var snake = new Snake(0, 0, 3);
    deepEqual(snake.head, new Point(0, 0), "Check initial position.");
    snake = new Snake(4, 8, 3);
    deepEqual(snake.head, new Point(4, 8), "Check initial position.");
});

test("Move test", function () {
    var snake = new Snake(0, 0, 3);
    snake.move().move().move();
    deepEqual(snake.head, new Point(0, 3), "Check moving with default direction.");
});

test("Rotate test", function () {
    var snake = new Snake(10, 10, 3);
    snake.direction = 'left';
    snake.move().move();
    deepEqual(snake.head, new Point(8, 10), "Check rotation to left.");
    snake.direction = 'up';
    snake.move().move().move().move();
    deepEqual(snake.head, new Point (8, 6), "Check rotation to up.");
});