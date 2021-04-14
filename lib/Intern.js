const Employee = require('./Employee');

class Intern extends Employee {
    constructor(empname, id, email, school){
        super(empname, id, email);
        this.school = school;
    }
    getRole(){
        return "Intern";
    }
}

// test
const newIntern = new Intern("Sharron", 3, "sharron@bob.com", "UCSD");

console.log(newIntern);

module.exports = Intern;