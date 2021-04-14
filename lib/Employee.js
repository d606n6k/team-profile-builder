class Employee {
    constuctor(empname, id, email){
        this.empname = empname;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.empname;
    }
    
    getId(){
        return this.id;
    }

    getEmail(){
        return this.email;
    }

    getRole(){
        return Employee.empname;
    }

    

}

module.exports = Employee;