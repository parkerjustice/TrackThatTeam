// These are your dependencies//
const mysql = require("mysql")
const inquirer = require("inquirer")
const consoleTable = require("console.table");
//--STARTING OPTIONS--//
const allRoles = {
    all: "show every role available",
    add: "add a new role",
    delete: "delete a role",
    initialPage: "going back to homepage"
}

const initialPage = {
Production: "all the roles",
TeamMates: "these are the employees",
Role: "the specific roles"

}

//functions 

function mainPage() {
    console.log('test')
    inquirer.prompt({
        type: "list", message: "pick one",
        choices: [initialPage.Role, initialPage.TeamMates, initialPage.Production]
        
    })
}