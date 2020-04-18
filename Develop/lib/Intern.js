// TODO: Write code to define and export the Intern class.  HINT: This class should inherit from Employee.

const Employee = require("./employee");

class Intern extends Employee {

    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, school) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.school = school;

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
    getSchool() {
        console.log(`School: ${this.school}`);
    }
    getRole() {
        console.log(`Role: ${this.role}`);
        return this.role.Intern
    }
}

module.export = Intern;
