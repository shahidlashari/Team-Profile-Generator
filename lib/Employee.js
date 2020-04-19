// TODO: Write code to define and export the Employee class

class Employee {
    // Just like constructor functions, classes can accept arguments
    constructor(name, id, email) {
      this.name = name;
      this.id = id;
      this.email = email;
    }
    getName() {
      console.log(`Name: ${this.name}`);
      return this.name
    }
    getId() {
        console.log(`ID: ${this.id}`);
      return this.id
    }
    getEmail(){
        console.log(`Email: ${this.email}`);
        return this.email
    }
    getRole(){
      return "Employee" ;
    }
  }
  module.exports = Employee;