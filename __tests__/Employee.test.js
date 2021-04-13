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
    // name
    // id
    // email

// describe getName()
describe("getName()", () => {
    it("should return the name", ()=> {
        // arr
        const name = "Some Name";
        const emp = new Employee(name, 1, "fake@email.com");

        // act
        const results = emp.getName();
        // assert
        expect(results).toBe(name);
    })
})
// getId()
// getEmail()
// getRole()—returns 'Employee'
describe("getRole()", () => {
    it("should return 'Employee'", () => {
        const name = "William";
        const emp = new Employee(name, 1, "will@test.com");
        expect(actual).toBe("Employee");
    })
    })
});