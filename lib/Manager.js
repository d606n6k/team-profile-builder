const Employee = require('./Employee');

class Manager extends Employee {
    constructor(officeNumber){
        super(empname, id, email);
        this.officeNumber = officeNumber;
    }
}

const newManger = new Manager("Bob", 12, "Bob@bob.com");
// newManger.getName();
console.log(newManger);