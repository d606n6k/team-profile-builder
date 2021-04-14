const Employee = require('./Employee');

class Manager extends Employee {
    constructor(empname, id, email, officeNumber){
        super(empname, id, email);
        this.officeNumber = officeNumber;
    }
// question for office hours: why do I need to SET this.id, this.email and this.empname for the SUBCLASS for the below newManager variable to output to the console?
    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

}

module.exports = Manager;