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

        return "Employee";
    }
}

module.exports = Employee;