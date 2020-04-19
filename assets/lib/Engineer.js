// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Engineer extends Employee {

    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, github) {
        super (name, id, email);
        this.github = github;

    }
    getGithub() {
        console.log(`Username: ${this.github}`);
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;
