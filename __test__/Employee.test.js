const Employee = require('../lib/Employee');

test ("creating a new employee", ()=> {
    const employeeInstance = new Employee;
    expect(typeof(employeeInstance)).toBe("object");
});

test ("accurate employee name", ()=> {
    const name = "Phuong"
    const employeeInstance = new Employee(name);
    expect(employeeInstance.name).toBe(name);

});

test("getName method working", ()=> {
    const mockName = "Phuong";
    const employeeInstance = new Employee(mockName);
    expect(employeeInstance.getName()).toBe(mockName);
});

test("getRole accuracy", ()=> {
    const returnRole = "Employee";
    const employeeInstance= new Employee("Phuong", 3, "p.hoang6897@yahoo.com");
    expect(employeeInstance.getRole()).toBe(returnRole);
});