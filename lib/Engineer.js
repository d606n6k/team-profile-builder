const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(empname, id, email, github){
        super(empname, id, email);
        this.empname = empname;
        this.id = id;
        this.email = email;
        this.github = github;
       
    }
// question for office hours: why do I need to SET this.id, this.email and this.empname for the SUBCLASS for the below newManager variable to output to the console?

}
// test
const newEngineer = new Engineer("Gary", 2, "gary@bob.com", "GaryHub");

console.log(newEngineer);

module.exports = Engineer;