// class Shape {
//     constructor() {
//         this.color = '';
//     }
//     setColor(color) {
//         this.color = color;
//     }
// }

// class Circle extends Shape {
//     render() {
//         return `<circle cx="150" cy="100" r="80" fill="${this.color}" />`
//     }
// }

// class Triangle extends Shape {
//     render() {
//         return `<polygon points="50 15, 100 100, 0 100" fill="${this.color}" />`
//     }
// }

// class Square extends Shape {
//     render() {
//         return `<rect x="50" y="20" rx="20" ry="20" width="150" height="150" fill="${this.color}" />`
//     }
// }

// module.exports = { Square, Triangle, Circle }


class Shape {
    constructor(textColor, text, shapeColor) {
        this.textColor = textColor;
        this.text = text;
        this.shapeColor = shapeColor;
    }
}

class Circle extends Shape {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor)
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" /> <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`
    }
}

class Square extends Shape {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor)
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="50 15, 100 100, 0 100" fill="${this.shapeColor}" /> <text x="125" y="120" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

class Triangle extends Shape {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor)
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" y="20" rx="20" ry="20" width="150" height="150" fill="${this.shapeColor}" /> <text x="50" y="90" font-size="30" text-anchor="middle" fill="${this.textColor}">${this.text}</text>`
    }
}

module.exports = { Circle, Square, Triangle };