// Imports
const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

// Inquirer questions
const questions = [
    {
        type: 'input',
        message: 'Please enter logo text (maximum 3 characters):',
        name: 'logoText',
        // Error handling
        validate: (text) => text.length <= 3 || 'Text must be less than 3 characters'
    },
    {
        type: 'input',
        message: 'Please enter a text color (keyword or hexadecimal number):',
        name: 'textColor',
    },
    {
        type: 'input',
        message: 'Please enter a logo color (keyword or hexadecimal number):',
        name: 'bkgrndColor',
    },
    {
        type: 'list',
        message: 'Please select a shape:',
        name: 'shape',
        choices: ['circle', 'triangle', 'square'],
    },
]

// Firing off the inquirer questions
function init() {
    inquirer.prompt(questions)
    // Waiting for the user response
    .then((response) => {
        
        // Initializing shapeSVG variable (will be used to store user content)
        let shapeSVG = '';

        // Conditional logic chain revolving around shape selection
        if (response.shape === 'circle') {
            const newCircle = new Circle(response.textColor, response.logoText, response.bkgrndColor);
            // Calls the render method
            shapeSVG = newCircle.render();
        } else if (response.shape === 'square') {
            const newSquare = new Square(response.textColor, response.logoText, response.bkgrndColor);
            shapeSVG = newSquare.render();
        } else {
            console.log('triangle');
            const newTriangle = new Triangle(response.textColor, response.logoText, response.bkgrndColor);
            shapeSVG = newTriangle.render();
        };

        // Creates the SVG file with the user specifications + error handling
        fs.writeFile('logo.svg', shapeSVG, (err => {
            err ? console.error(err) : console.log('Success! Generating SVG Logo...')
        }));
    })
    // Error handling
    .catch(err => {
        console.log(err.message);
    })
}

init();