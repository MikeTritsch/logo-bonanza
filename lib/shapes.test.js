const { Circle, Square, Triangle } = require('./shapes');

describe('Triangle', () => {
    it('should return a SVG string that renders a red triangle with red letters reading TXT', () => {
        const shape = new Triangle('blue', 'TXT', 'red');
        shape.render();
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="90 10, 180 150, 0 150" fill="red" /> <text x="90" y="120" font-size="40" text-anchor="middle" fill="blue">TXT</text> </svg>');
    });
});

describe('Circle', () => {
    it('should return a SVG string that renders a pink circle with black letters reading txt', () => {
        const shape = new Circle('black', 'txt', 'pink');
        shape.render();
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="pink" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="black">txt</text> </svg>');
    });
});

describe('Square', () => {
    it('should return a SVG string that renders a purple sqaure with green letters reading #15', () => {
        const shape = new Square('green', '#15', 'purple');
        shape.render();
        expect(shape.render()).toEqual('<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" y="20" rx="20" ry="20" width="150" height="150" fill="purple" /> <text x="125" y="110" font-size="50" text-anchor="middle" fill="green">#15</text> </svg>');
    });
});