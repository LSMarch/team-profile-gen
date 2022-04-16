const fs = require('fs')
const inquirer = require('inquirer')
const jest = require('jest')
const generateHTML = require('./src/generateHTML')


const askManager = () => {
inquirer
.prompt([
    {
        type: 'input',
        name: 'name',
        message: "Enter manager's name",
        
    },
    {
        type: 'number',
        name: 'id',
        message: 'Enter valid employee ID number'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter valid email address'
    },
    {
        type: 'number',
        name: 'office',
        message: 'Enter office number'
    },
    {
        type: 'list',
        name: 'role',
        message: 'Would you like to add a team member?',
        choices: ['Manager','Engineer', 'Intern', 'Exit']
    },
])}

// engineer questions [
//     {
//         type: 'input',
//         name: 'name',
//         message: 'Enter employee name'
//     },
//     {
//         type: 'input',
//         name: 'id',
//         message: 'Enter valid employee ID number'
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'Enter valid email address'
//     },
//     {
//         type: 'input',
//         name: 'github',
//         message: 'Enter valid GitHub username'
//     },
// ]

// intern questions [
//     [
//         {
//             type: 'input',
//             name: 'name',
//             message: 'Enter employee name'
//         },
//         {
//             type: 'input',
//             name: 'id',
//             message: 'Enter valid employee ID number'
//         },
//         {
//             type: 'input',
//             name: 'email',
//             message: 'Enter valid email address'
//         },
//         {
//             type: 'input',
//             name: 'school',
//             message: 'Enter school'
//         },
//     ]
// ]

const init = () => {
  askManager ()
    
}

init()