"use strict";

test("Clone test", function () {
    var p = new Point(1, 1);
    deepEqual(p.clone(), p, 'Check clone method.');
    notEqual(p.clone(), p, 'Check clone method.');
});

test("Equal test", function () {
    var p1 = new Point(0, 0),
        p2 = new Point(0, 0),
        p3 = new Point(3, 2);

    ok(p1.equal(p2), 'Check equal method.');
    ok(p2.equal(p1), 'Check equal method.');
    ok(!p1.equal(p3), 'Check equal method.');
    ok(!p2.equal(p3), 'Check equal method.');
    ok(!p3.equal(p1), 'Check equal method.');
    ok(!p3.equal(p2), 'Check equal method.');
});
