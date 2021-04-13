class Employee {
    constuctor(name, id, email){
        this.name = name;
        this.id = id;
        this.email = email;
    }

    getName() {
        return this.name;
    }
    
    getId(){

    }

    getRole(){

        // returns 'Employee'
    }
}

module.exports = Employee;