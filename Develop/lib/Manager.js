// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Manager extends Employee {

    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;

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
    getOfficeNumber() {
        console.log(`OfficeNumber: ${this.officeNumber}`);
    }
    getRole() {
        console.log(`Role: ${this.role}`);
        return this.role.Manager
    }
}

module.export = Manager;
