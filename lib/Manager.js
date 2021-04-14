const Employee = require('./Employee');

class Manager extends Employee {
    constructor(empname, id, email, officeNumber){
        super(empname, id, email);
        this.officeNumber = officeNumber;
    }

    getRole(){
        return "Manager";
    }

    getOfficeNumber(){
        return this.officeNumber;
    }

}

module.exports = Manager;