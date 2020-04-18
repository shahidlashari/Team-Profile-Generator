// TODO: Write code to define and export the Engineer class.  HINT: This class should inherit from Employee.
// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Engineer extends Employee {

    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, github) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.github = github;

    }

    getName() {
        console.log(`Name: ${this.name}`);

    }
    getId() {
        console.log(`ID: ${this.id}`);

    }
    getEmail() {
        console.log(`Email: ${this.email}`);
    }
    getGithub() {
        console.log(`Username: ${this.github}`);
    }
    getRole() {
        console.log(`Role: ${this.role}`);
        return this.role.Engineer
    }
}

module.export = Engineer;
