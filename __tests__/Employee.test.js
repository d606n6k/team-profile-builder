const Employee = require("../lib/Employee");

describe("Employee", () => {
    // initialization group
    describe("initialization", () => {
        it("should have a name", () => {
            // arrange
            const name = "William";
            // act
            const emp = new Employee(name);
            // assert
            expect(emp.name).toBe(name);
            expect(emp.id).toBe(id);
            expect(emp.email).toBe(email);
        });
    });

});