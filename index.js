// packages needed for this application
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const generatrMd = require("./utils/generateMarkdown");
const { type } = require("os");
// using promises
const writeFileAsync = util.promisify(fs.writeFile);
//  array of questions for user input
const questions = [
    {
        type: "input",
        message: "What is your GitHub user name?",
        name: "username"
    },
    {
        type: "input",
        message: "What is your email address?",
        name: "email"
    },
    {
        type: "input",
        message: "What is your project's title?",
        name: "title"
    },
    {
        type: "input",
        message: "Please write a short description of your project.",
        name: "description"
    },
    {
        type: "list",
        message: "What license should your project have?",
        name: "license",
        choices: [
            "MIT",
            "Unlicense",
            "Apache 2.0",
            "GNU v3",
            "BSD 3-Clause",
            "Mozilla Public License 2.0"
        ]
    },
    {
        type: "input",
        message: "What command should be run to install dependencies?",
        name: "installation",
        default: "npm i"
    },
    {
        type: "input",
        message: "What command should be run to run tests?",
        name: "tests",
        default: "npm run test"
    },
    {
        type: "input",
        message: "What does the user need to know about using the repository?",
        name: "usage"
    },
    {
        type: "input",
        message: "What does the user need to know about contributing to the repository?",
        name: "contribute"
    },

]

const promptUser = () => {
    return inquirer
    .prompt(questions);
}

// function to write README file
function writeToFile(fileName, data) {
    return writeFileAsync(fileName, data)
}

// function to initialize app
const init = async () => {
    try {
        console.log("README Generator. Answer The Following Questions: ")
        //asks the user to answer
        const answer = await promptUser();
        //creates markdown from the users answers
        const fileContent = generatrMd(answer);

        await writeToFile("./DEMO/READEME.md", fileContent);

        console.log("READEME.md created in DEMO folder.");
    } catch (err) {
        console.error("Problem creating README");
        console.log (err);
    }
    
}

// Function call to initialize app
init();
