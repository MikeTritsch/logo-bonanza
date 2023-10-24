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
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <rect x="50" y="20" rx="20" ry="20" width="150" height="150" fill="${this.shapeColor}" /> <text x="125" y="110" font-size="50" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`
    }
}

class Triangle extends Shape {
    constructor(textColor, text, shapeColor) {
        super(textColor, text, shapeColor)
    }

    render() {
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"> <polygon points="90 10, 180 150, 0 150" fill="${this.shapeColor}" /> <text x="90" y="120" font-size="40" text-anchor="middle" fill="${this.textColor}">${this.text}</text> </svg>`
    }
}

module.exports = { Circle, Square, Triangle };