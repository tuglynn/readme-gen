// TODO: Include packages needed for this application
const fs = require('fs');
const inquirer = require('inquirer');

const generateMarkdown = require('./utils/generateMarkdown.js')

// TODO: Create an array of questions for user input
const questions = [{
        type: 'input',
        message: 'what is the title of your project?',
        name: 'title'
    },
    {
        type: 'input',
        message: 'type a brief description of the project',
        name: 'description'
    },
    {
        type: 'input',
        message: 'how do you install the app?',
        name: 'installation'
    },
    {
        type: 'input',
        message: 'what is it used for?',
        name: 'usage'
    },
    {
        type: 'list',
        message: 'what type of license?',
        name: 'license',
        choices: ['MIT', 'Drivers License', 'Fishing License']
    },
    {
        type: 'input',
        message: 'whats your github username?',
        name: 'contribution'
    },
    {
        type: 'input',
        message: 'how to test the app?',
        name: 'tests'
    },
    {
        type: 'input',
        message: 'enter your email address',
        name: 'question'
    }
];

inquirer.prompt([...questions]).then((answer) => {
    fs.writeFile('read.md', generateMarkdown(answer), (err) => {
        if (err) throw err;
        console.log('You made a readme.md');
    })
});

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();