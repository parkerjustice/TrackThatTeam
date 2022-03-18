// These are your dependencies//
const mysql = require("mysql")
const inquirer = require("inquirer")
const consoleTable = require("console.table");
//--STARTING OPTIONS--//
const allRoles = {
    all: "show every role available",
    add: "add a new role",
    delete: "delete a role",
}

const yourStartingPoint = mysql.createConnection (

    {

    }
)