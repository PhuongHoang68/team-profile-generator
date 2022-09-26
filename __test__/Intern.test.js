const e = require('express');
const Intern = require('../lib/Intern');

test ("getRole works accurately", ()=>{
    const returnRole = "Intern";
    const employeeInstance = new Intern("Phuong Hoang", 3, "p.hoang6897@yahoo.com", "PhuongHoang68");
    expect(employeeInstance.getRole()).toBe(returnRole);
});

test("school name", ()=>{
    const schoolTest = "Washu";
    const employeeInstance= new Intern("Phuong Hoang", 3, "p.hoang6897@yahoo.com", schoolTest);
    expect(employeeInstance.school).toBe(schoolTest);
});

test("getSchool works accurately", ()=> {
    const schoolTest = "Washu";
    const employeeInstance= new Intern("Phuong Hoang", 3, "p.hoang6897@yahoo.com", schoolTest);
    expect(employeeInstance.getSchool()).toBe(schoolTest);
});