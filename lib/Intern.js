const Employee = require('./Employee');

class Intern extends Employee {
    constructor(empname, id, email, school){
        super(empname, id, email);
        this.empname = empname;
        this.id = id;
        this.email = email;
        this.school = school;
       
    }
// question for office hours: why do I need to SET this.id, this.email and this.empname for the SUBCLASS for the below newManager variable to output to the console?

}
// test
const newIntern = new Intern("Sharron", 3, "sharron@bob.com", "UCSD");

console.log(newIntern);

module.exports = Intern;