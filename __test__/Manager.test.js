const Manager = require('../lib/Manager');


//start writing tests
test ("Create an office number", () => {
    const officeNumberTest = 3;
    const employeeInstance = new Manager("Phuong", 3, "p.hoang6897@yahoo.com", officeNumberTest);
    expect(employeeInstance.officeNumber).toBe(officeNumberTest);
});

test ("whether function officeNumber will return the correct value", () => {
    const officeNumberTest = 3;
    const employeeInstance = new Manager("Phuong", 3, "p.hoang6897@yahoo.com", officeNumberTest);
    expect(employeeInstance.getOfficeNumber()).toBe(officeNumberTest);
});

test("role returns accurately", ()=> {
    const returnRole = "Manager";
    const employeeInstance = new Manager("Phuong", 3, "p.hoang6897@yahoo.com");
    expect(employeeInstance.getRole()).toBe(returnRole);
});