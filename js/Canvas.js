'use strict';

function Canvas(id, width, height) {
    this.width = width;
    this.height = height;
    var element  = document.getElementById(id);
    element.width = this.width;
    element.height = this.height;
    this.context = element.getContext('2d');
}

Canvas.prototype.drawRectangle = function (start, end, borderWidth, borderColor, color) {
    var x = start.x,
        y = start.y,
        w = end.x - start.x,
        h = end.y - start.y;
    if (color) {
        this.context.fillStyle = color;
        this.context.fillRect(x, y, w, h);
    }
    this.context.lineWidth = borderWidth;
    this.context.strokeStyle = borderColor;
    this.context.strokeRect(x + borderWidth / 2, y + borderWidth / 2, w - borderWidth / 2, h - borderWidth / 2);
};

Canvas.prototype.clear = function () {
    this.context.clearRect(0 , 0, this.width, this.height);
};
