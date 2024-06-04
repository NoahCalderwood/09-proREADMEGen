// TODO: Include packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');
// TODO: Create an array of questions for user input
const questions = [
    //Description
    {
        type: 'input',
        message: 'What is the title of your project?',
        name: 'title',
    },
    {
        type: 'input',
        message: 'What was your motivation?',
        name: 'motivation',
    },
    {
        type: 'input',
        message: 'Why did you build this project?',
        name: 'reason',
    },
    {
        type: 'input',
        message: 'What problem does it solve?',
        name: 'solve',
    },
    {
        type: 'input',
        message: 'What did you learn?',
        name: 'learn',
    },
    //Table of Contents
    {
        type: 'input',
        message: 'What is your user name?',
        name: 'username',
    },
    //installation
    {
        type: 'input',
        message: 'What is required to install your project?',
        name: 'install',
    },
    //Usage
    {
        type: 'input',
        message: 'What steps are needed to use your project?',
        name: 'usage',
    },
    //Credits
    {
        type: 'input',
        message: 'Who are your collaborators?',
        name: 'collab',
    },
    {
        type: 'input',
        message: 'Are there any third-party assets used in the project?',
        name: 'assets',
    },
    //License
    {
        type: 'list',
        message: 'What license is used by the project?',
        name: 'license',
        choices: [
            'Apache-2.0',
            'GPL-3.0',
            'MIT',
            'None'
        ],
    },
    //Badges
    // {
    //     type: 'input',
    //     message: 'What is your user name?',
    //     name: 'username',
    // },
    //Features
    {
        type: 'input',
        message: 'List your features.',
        name: 'features',
    },
    //How to Contribute
    {
        type: 'input',
        message: 'How do you want others to contribute?',
        name: 'contribute',
    },
    //Tests
    {
        type: 'input',
        message: 'How do you run test for your projects?',
        name: 'tests',
    },


];

// TODO: Create a function to write README file

function writeToFile(fileName, data) {
    fs.writeFile(fileName, generateMarkdown(data), () => {
        console.log('README created')
    })
}

// TODO: Create a function to initialize app
function init() {
    inquirer
        .prompt(questions)
        .then((response) => {
            writeToFile('README.md', { ...response })
        })
}

// Function call to initialize app
init();
