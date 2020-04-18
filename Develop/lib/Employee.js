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
      
    }
    getId() {
        console.log(`ID: ${this.id}`);

    }
    getEmail(){
        console.log(`Email: ${this.email}`);
    }
    //clarify
    getRole(){
      
      console.log(`Role: ${this.role}`);
        retun this.role.Employee;
    }
  }
  module.export = Employee;