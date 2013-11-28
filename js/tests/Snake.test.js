"use strict";

test("Head test", function () {
    var snake = new Snake({
        x: 0,
        y: 0,
        length: 3
    });
    deepEqual(snake.head, new Point(0, 0), "Check initial position.");
    snake = new Snake({
        x: 4,
        y: 8,
        length: 3
    });
    deepEqual(snake.head, new Point(4, 8), "Check initial position.");
});

test("Move test", function () {
    var snake = new Snake({
        x: 0,
        y: 0,
        length: 3
    });
    snake.move().move().move();
    deepEqual(snake.head, new Point(0, 3), "Check moving with default direction.");
    snake.death().move().move();
    deepEqual(snake.head, new Point(0, 3), "Check moving after death.");
});

test("Rotate test", function () {
    var snake = new Snake({
        x: 10,
        y: 10,
        length: 3
    });
    snake.direction = 'left';
    snake.move().move();
    deepEqual(snake.head, new Point(8, 10), "Check rotation to left.");
    snake.direction = 'up';
    snake.move().move().move().move();
    deepEqual(snake.head, new Point (8, 6), "Check rotation to up.");
});

test("Color test", function () {
    var alive = 'blue',
        death = 'red';
    var snake = new Snake({
        aliveColor: alive,
        deathColor: death
    });
    equal(snake.color, alive, "Check alive color.");
    snake.death();
    deepEqual(snake.color, death, "Check death color.");
});

test("Death test", function () {
    var alive = 'blue',
        death = 'red';
    var snake = new Snake({});
    equal(snake.alive, true, "Check alive.");
    snake.death();
    equal(snake.alive, false, "Check death.");
});

test("Eat test", function () {
    var snake = new Snake({});
    var length = snake.length;

    snake.eat().eat();
    equal(snake.length, length + 2, "Check length after eat.");
    deepEqual(snake.coordinates[snake.length], snake.coordinates[snake.length - 1], "Check last coordinate after eat.");
});