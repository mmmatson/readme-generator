//Packages needed for this application
const inquirer = require("inquirer");

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
        .then((answer) => {
            console.log(answer.title);
            console.log(answer.description);
            console.log(answer.installation);
            console.log(answer.usage);
            console.log(answer.contributing);
            console.log(answer.tests);
            console.log(answer.github);
            console.log(answer.email);
            console.log(answer.license);
        });
};


// TODO: Create a function to write README file
function writeToFile(fileName, data) { }

//Define function to initialize app
function init() {
    questions();
}

// Call function to initialize app
init();
