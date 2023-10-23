const inquirer = require('inquirer');
const fs = require('fs');
const { Circle, Square, Triangle } = require('./lib/shapes');

const questions = [
    {
        type: 'input',
        message: 'Please enter logo text (maximum 3 characters):',
        name: 'logoText',
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

function init() {
    inquirer.prompt(questions)
    .then((response) => {
        let shapeSVG = '';

        if (response.shape === 'circle') {
            const newCircle = new Circle(response.textColor, response.logoText, response.bkgrndColor);
            shapeSVG = newCircle.render();
        } else if (response.shape === 'square') {
            console.log('square');
            // shapeSVG = newSquare.render();
        } else {
            console.log('triangle');
            // shapeSVG = newCircle.render();
        };

        fs.writeFile('logo.svg', shapeSVG, (err) => {
            
        })
    })
}


init();