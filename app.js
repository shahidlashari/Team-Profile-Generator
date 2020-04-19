const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
// Code to use inquirer to gather information about the development of team members,
const myTeam = [];
let manager;
let intern;
let engineer;
function employees() {
    inquirer
        .prompt([
            {
                message: "Please Enter to develop your team!",
                name: "buildTeam"
            },
            {

                type: "list",
                message: "What is this employee's role?",
                name: "employeeRole",
                choices: ["Manager", "Engineer", "Intern"]
            },
            {
                type: "input",
                message: "What is the employee's name?",
                name: "employeeName",
                validate: (name) => { return name !== "" }
            },
            {   // Employee ID.
                type: "input",
                message: "What is the employee's ID?",
                name: "employeeId"
            },
            {   // Employee Email.
                type: "input",
                message: "What is the employee's email?",
                name: "employeeEmail"
            },
            {  // Employee office number.
                type: "input",
                message: "What is the manager's office number?",
                name: "officeNumber",
                when: (userInput) => userInput.employeeRole === "Manager"
            },
            {
                type: "input",
                message: "What is the Engineer's Github?",
                name: "github",
                when: (userInput) => userInput.employeeRole === "Engineer"
            },
            {
                type: "input",
                message: "What's the Intern's school?",
                name: "school",
                when: (userInput) => userInput.employeeRole === "Intern"
            },
            {
                type: "confirm",
                name: "newEmployee",
                message: "Would you like to add another team member?" // if yes, go back again. If no, renderHTML
            }]).then(answers => {
                //Manager answers
                manager = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.officeNumber);
                //Intern answers
                intern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
                //Engineer answers
                engineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github);
            
                if (answers.employeeRole === "Manager") {
                      // Pushes a new Manager into the team members array
                    let newManager = new Manager(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.officeNumber);
                    myTeam.push(newManager);
                } else if (answers.employeeRole === "Intern") {
                     // Pushes a new Intern into the team members array
                    let newIntern = new Intern(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.school);
                    myTeam.push(newIntern);
                } else if (answers.employeeRole === "Engineer") {

                    // Pushes a new Engineer into the team members array
                    let newEngineer = new Engineer(answers.employeeName, answers.employeeId, answers.employeeEmail, answers.github);
                    myTeam.push(newEngineer);
                } else {
                    console.log("else");
                }
                if (answers.newEmployee === true) {
                    employees();
                } else {
                    //==================
                    //renderHTML
                    //==================
                    let myHtml = render(myTeam);
                    // write file to output folder
                    fs.writeFileSync('./output/team.html', myHtml);

                    // Console.log that the html has been generated
                    console.log("The team.html has been generated in output");

                }
            })
        }

employees();