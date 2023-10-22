const inquirer = require('inquirer');


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