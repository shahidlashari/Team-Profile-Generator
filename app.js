const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output")
const outputPath = path.join(OUTPUT_DIR, "team.html");
const render = require("./lib/htmlRenderer");
// Write code to use inquirer to gather information about the development team members,
const myTeam = [];

function employee() {
  inquirer
    .prompt([
        {
        type: "conform",
        message: "What is the manager's ID?",
        name: "managerID"

        },
        {
         // There is only 1 manager for a team.
         type: "input",
         message: "Who is the manager of this project?",
         name: "managerName",
         validate: (name)=> {return name!==""} 
     },
     {   // Employee ID.
         type: "input",
         message: "What is the manager's ID?",
         name: "managerID"
     },
     {   // Employee Email.
         type: "input",
         message: "What is the manager's email?",
         name: "managerEmail"
     },
     {  // Employee office number.
         type: "input",
         message: "What is the manager's office number?",
         name: "officeNumber"
     }]).then(managerAnswers => {
        
      let manager = new Manager(managerAnswers.managerName, managerAnswers.managerID, managerAnswers.managerEmail, managerAnswers.officeNumber);
        
         console.log("Now we will ask for employee information.")
         otherEmployeeData();
     });
}
function otherEmployeeData() {
    inquirer.prompt([
        {
            type: "list",
            message: "What is this employee's role?",
            name: "employeeRole",
            choices: ["Intern", "Engineer"]
        },
        //==================================================================
        // These questions are based on the employeeRole above.
        //==================================================================
        {
            type: "input",
            message: "What is the employee's name?",
            name: "employeeName"
        },
        {
            type: "input",
            message: "What is the employee's id?",
            name: "employeeId"
        },
        {
            type: "input",
            message: "What is the employee's email?",
            name: "employeeEmail"
        },
        {
            type: "input",
            message: "What is the Engineer's Github?",
            name: "github"
            // when: (userInput) => userInput.employeeRole === "Engineer"
        },
        {
            type: "input",
            message: "What's the Intern's school?",
            name: "school"
            // when: (userInput) => userInput.employeeRole === "Intern"
        },
        {
            type: "confirm",
            name: "newEmployee",
            message: "Would you like to add another team member?" // if yes, go back again. If no, renderHTML
        }
    ]).then(answers => {
        //============================================================
        // Pushes a new intern into the team members array
        //============================================================
        if (answers.employeeRole === "Intern") {
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
            otherEmployeeData();
        } else {
            //==================
            //renderHTML
            //==================
            let myHtml=render(myTeam);
            // var main = fs.readFileSync('./templates/main.html', 'utf8');
            
            // // Loop through the employees and print out all of their cards without replacing the previous one.
            // var managerCard = fs.readFileSync('./templates/Manager.html', 'utf8');
            // managerCard = managerCard.replace('{{name}}', manager.getName());
            // managerCard = managerCard.replace('{{role}}', manager.getRole());
            // managerCard = managerCard.replace('{{id}}', manager.getId());
            // managerCard = managerCard.replace('{{email}}', manager.getEmail());
            // managerCard = managerCard.replace('{{officeNumber}}', manager.getOfficeNumber());

            // //=====================================================
            // // Append all of the team members after manager
            // //=====================================================

            // var cards = managerCard; // Initial cards only has the Manager card info.
            // for (var i = 0; i < myTeam.length; i++) {
            //     var employee = myTeam[i];
            //     // Cards adds and then equals every new employee card info.
            //     cards += renderEmployee(employee);
            // }

            // // Adds cards to main.html and outputs to team.html.
            // main = main.replace('{{cards}}', cards);

            fs.writeFileSync('./output/team.html', myHtml);

            // Console.log that the html has been generated
            console.log("The team.html has been generated in output");
        }
    });
}

// renderEmployee function that is called above.

function renderEmployee(employee) {
    if (employee.getRole() === "Intern") {
        var internCard = fs.readFileSync('./templates/Intern.html', 'utf8');
        internCard = internCard.replace('{{name}}', employee.getName());
        internCard = internCard.replace('{{role}}', employee.getRole());
        internCard = internCard.replace('{{id}}', employee.getId());
        internCard = internCard.replace('{{email}}', employee.getEmail());
        internCard = internCard.replace('{{school}}', employee.getSchool());
        return internCard;
    } else if (employee.getRole() === "Engineer") {
        var engineerCard = fs.readFileSync('./templates/Engineer.html', 'utf8');
        engineerCard = engineerCard.replace('{{name}}', employee.getName());
        engineerCard = engineerCard.replace('{{role}}', employee.getRole());
        engineerCard = engineerCard.replace('{{id}}', employee.getId());
        engineerCard = engineerCard.replace('{{email}}', employee.getEmail());
        engineerCard = engineerCard.replace('{{github}}', employee.getGithub());
        return engineerCard;
    } else {
        console.log("else");
    }
}

managerData();






   