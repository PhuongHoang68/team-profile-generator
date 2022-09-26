const inquirer = require("inquirer");
const path= require("path");
const fs= require("fs");
const OUTPUT_DIR = path.resolve(__dirname, "output");
const outputPath = path.join(OUTPUT_DIR, "team.html");
const generateTeam = require("./src/template.js")

//role data
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');

teamArray =[];




//inquirer prompt from command line
function startApp() {
    function buildTeam() {
        inquirer.prompt([{
            type: "list",
            name: "addEmployeePrompt",
            message: "Please select employee type you are adding to your team",
            choices: ["Manager", "Engineer", "Intern", "I'm not adding more team members."]
        }]).then(function (userInput) {
            switch(userInput.addEmployeePrompt) {
              case "Manager":
                addManager();
                break;
              case "Engineer":
                addEngineer();
                break;
              case "Intern":
                addIntern();
                break;
      
              default:
                htmlBuilder();
            }
          })

    }
}


//adding NEW MANAGER
function addManager() {
    inquirer.prompt ([
      
      {
        type: "input",
        name: "managerName",
        message: "Please type in Manager's name"
      },
  
      {
        type: "input",
        name: "managerId",
        message: "Please type in Manager's ID."
      },
  
      {
        type: "input",
        name: "managerEmail",
        message: "Please type in Manager's email"
      },
  
      {
        type: "input",
        name: "managerOfficeNumber",
        message: "Please type in Manager's office number"
      }
  
    ]).then(answers => {
      const manager = new Manager(answers.managerName, answers.managerId, answers.managerEmail, answers.managerOfficeNumber);
      teamArray.push(manager);
      buildTeam();
    });
  
  }
  
  // adding NEW ENGINEER
  function addEngineer() {
      inquirer.prompt([
        
        {
          type: "input",
          name: "engineerName",
          message: "Please type in Engineer's name"
        },
  
        {
          type: "input",
          name: "engineerId",
          message: "Please type in Engineer's ID" 
        },
  
        {
          type: "input",
          name: "engineerEmail",
          message: "Please type in Engineer's email"
        },
  
        {
          type: "input",
          name: "engineerGithub",
          message: "Please type in Engineer's Github"
        }
  
      ]).then(answers => {
        const engineer = new Engineer(answers.engineerName, answers.engineerId, answers.engineerEmail, answers.engineerGithub);
        teamArray.push(engineer);
        buildTeam();
      });
  
    }
    



    //adding NEW INTERN
    function addIntern() {
      inquirer.prompt([
        
        {
          type: "input",
          name: "internName",
          message: "Please type in Intern's name"
        },
  
        {
          type: "input",
          name: "internId",
          message: "Please type in Intern's ID" 
        },
  
        {
          type: "input",
          name: "internEmail",
          message: "Please type in Intern's Email"
        },
  
        {
          type: "input",
          name: "internSchool",
          message: "Please type in Intern's school name"
        }
  
      ]).then(answers => {
        const intern = new Intern(answers.internName, answers.internId, answers.internEmail, answers.internSchool);
        teamArray.push(intern);
        buildTeam();
      });
  
    }
  

    
  
function htmlBuilder () {
      console.log("Your team is now built!")
  
      fs.writeFileSync(outputPath, generateTeam(teamArray), "UTF-8")
  
  };
  
buildTeam();
  
  
  
startApp();
