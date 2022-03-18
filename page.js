// These are your dependencies//
const mysql = require("mysql")
const inquirer = require("inquirer")
const consoleTable = require("console.table");
//--STARTING OPTIONS--//
const allRoles = {
    available: "show every role available",
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
    console.log('test for main')
    inquirer.prompt( {
        name: "first",
        type: "list",
        choices: [initialPage.Role, initialPage.TeamMates, initialPage.Production]

    })
}

function Production() {
    inquirer.prompt({
        name:"second",
        type:"list",
choices: [ allRoles.available, allRoles.add, allRoles.delete, allRoles.initialPage ]
    })
}