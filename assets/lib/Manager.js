// TODO: Write code to define and export the Manager class. HINT: This class should inherit from Employee.
const Employee = require("./employee");

class Manager extends Employee {

    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email, officeNumber) {
        super(name, id, email);
        this.officeNumber = officeNumber;

    }
    getOfficeNumber() {
        console.log(`OfficeNumber: ${this.officeNumber}`);
        return this.officeNumber;
    }
    getRole() {
        
        return "Manager";
    }
}

module.exports = Manager;
