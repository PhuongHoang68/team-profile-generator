const Engineer = require ('../lib/Engineer');

test ("Github create works", ()=> {
    const gitHubTest = "PhuongHoang68";
    const employeeInstance = new Engineer("Phuong Hoang", 3, "p.hoang6897@yahoo.com", gitHubTest);
    expect(employeeInstance.github).toBe(gitHubTest);
});

test("getGithub will function accurately", ()=> {
    const gitHubTest = "PhuongHoang68";
    const employeeInstance = new Engineer("Phuong Hoang", 3, "p.hoang6897@yahoo.com", gitHubTest);
    expect(employeeInstance.getGithub()).toBe(gitHubTest);

});

test("getRole works accurately", ()=> {
    const returnRole = "Engineer";
    const employeeInstance= new Engineer("Phuong Hoang", 3, "p.hoang6897@yahoo.com", "PhuongHoang68");
    expect(employeeInstance.getRole()).toBe(returnRole);
});