// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./employee");

class Intern extends Employee {

    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, school) {
        super(name, id, email);
        this.school = school;

    }
    getSchool() {
        console.log(`School: ${this.school}`);
        return this.school;
    }
    getRole() {
       
        return "Intern";
    }
}

module.exports = Intern;
