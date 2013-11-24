"use strict";

test('Point in area test', function () {
    var area = new Area(2, 2);

    ok(area.isPointInArea(new Point(0, 0)), 'Check top-left vertex.');
    ok(area.isPointInArea(new Point(1, 0)), 'Check top-right vertex.');
    ok(area.isPointInArea(new Point(0, 1)), 'Check bottom-left vertex.');
    ok(area.isPointInArea(new Point(1, 1)), 'Check bottom-right vertex.');

    ok(!area.isPointInArea(new Point(0, -1)), 'Check point out area');
    ok(!area.isPointInArea(new Point(-1, 0)), 'Check point out area');
    ok(!area.isPointInArea(new Point(-1, -1)), 'Check point out area');
    ok(!area.isPointInArea(new Point(1, 2)), 'Check point out area');
    ok(!area.isPointInArea(new Point(2, 1)), 'Check point out area');
    ok(!area.isPointInArea(new Point(2, 2)), 'Check point out area');
});