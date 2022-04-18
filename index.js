const fs = require('fs')
const inquirer = require('inquirer')
const jest = require('jest')
const generateHTML = require('./src/generateHTML')

const askEmploy = () => {

return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: "Enter team manager's name",
        validate: function (answer) {
            if(answer = !/[a-z]/(answer)) {
                return console.log('Please enter a valid name')
            }
            return true;
        }
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
        type: 'input',
        name: 'office',
        message: 'Enter office number'
    },
    {
        type: 'list',
        name: 'add',
        message: 'Would you like to add a team member?',
        choices: ['Engineer', 'Intern', 'Exit']
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
    askEmploy()
        .then(() => console.log('yep'))
        .catch((err) => console.error(err))
}

init()
