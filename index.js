//Packages needed for this application
const inquirer = require("inquirer");
const fs = require('fs');
const generateMarkdown = require("./utils/generateMarkdown");

//Questions to prompt user for input
const questions = () => {
    return inquirer.prompt([
        {
            name: "title",
            type: "input",
            message: "What is the title of your project?",
        },
        {
            name: "description",
            type: "input",
            message: "Why did you build this project/what problem does it solve?",
        },
        {
            name: "installation",
            type: "input",
            message: "What steps are required for installation?",
        },
        {
            name: "usage",
            type: "input",
            message: "Provide instructions for how to use the application:",
        },
        {
            name: "contributing",
            type: "input",
            message: "Provide guidelines for other developers to contribute to your project:",
        },
        {
            name: "tests",
            type: "input",
            message: "List tests for your application and examples of how to run them:",
        },
        {
            name: "github",
            type: "input",
            message: "Enter your GitHub username to add to the questions section of the README:",
        },
        {
            name: "email",
            type: "input",
            message: "Enter your email address to add to the questions section of the README:",
        },
        {
            name: "license",
            type: "list",
            message: "Select a license for your project:",
            choices: ["MIT License", "Apache License 2.0", "GPL License (aka GNU General Public License v3.0)", "The Unlicense", "No License"],
        }
    ])
        .then((answers) => {
            return answers
        });
};

//Write README file
function writeToFile(fileName, data) { 
    fs.writeFile(fileName, data, (err) =>
    err ? console.error(err) : console.log('README.md file successfully generated!')
);
}

//Define function to initialize app
function init() {
    questions()
    .then((answers) => {return writeToFile('README.md', generateMarkdown(answers))})
    .catch((err) => console.error(err));
}

// Call function to initialize app
init();
