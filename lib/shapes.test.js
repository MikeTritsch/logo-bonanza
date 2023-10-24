const { Circle, Square, Triangle } = require('./shapes');

describe('Triangle', () => {
    it('should return a triangle with undefined options for shape color, text color, and text', () => {
        const shape = new Triangle();
        shape.render();
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="90 10, 180 150, 0 150" fill="undefined" /> <text x="90" y="120" font-size="40" text-anchor="middle" fill="undefined">undefined</text> </svg>');
    });
});

describe('Circle', () => {
    it('should return a cirlce with undefined options for text color, text, and shape color', () => {
        const shape = new Circle();
        shape.render();
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="undefined" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="undefined">undefined</text> </svg>');
    });
});

describe('Square', () => {
    it('should return a square with undefined options for text color, text, and shape color', () => {
        const shape = new Square();
        shape.render();
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" y="20" rx="20" ry="20" width="150" height="150" fill="undefined" /> <text x="125" y="110" font-size="50" text-anchor="middle" fill="undefined">undefined</text> </svg>');
    });
});