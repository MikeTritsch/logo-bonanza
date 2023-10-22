const { Triangle, Square, Circle } = require('./lib/shapes');

function shapeSelector(shape) {
    if (shape === 'triangle') {
        const triangle = new Triangle();
    } else if (shape === 'sqaure') {
        const square = new Square();
    } else {
        const cirlce = new Circle();
    }
}