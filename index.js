const fs = require('fs')
const inquirer = require('inquirer')
const jest = require('jest')
const generateHTML = require('./src/generateHTML')

const questionsEmployee = () => {

return inquirer.prompt ([
    {
        type: 'input',
        name: 'name',
        message: "Enter team member's name",
        validate: function (answer) {
            if(answer = !/[a-z]/.test(answer)) {
                console.log('Please enter a valid name')
                return false
            }
            return true;
        }
    },
    {
        type: 'number',
        name: 'id',
        message: 'Enter valid employee ID number',
        validate: function (answer) {
            if(answer.id = !/[1-9]/.test(answer)) {
                console.log('Please enter a valid employee ID')
                return false
            }
            return true
        }
    },
    {
        type: 'input',
        name: 'email',
        message: 'Enter valid email address',
        validate: answer => {
            if(answer = !/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(answer)){
                console.log('Please enter valid email')
                return false
            }
            return true
        }
    },
    {
        type: 'list',
        name: 'position',
        message: 'Enter team member position',
        choices: ['Manager', 'Engineer', 'Intern']
    },  
])}



const init = () => {
    questionsEmployee()
        .then(({name, id, email, position}) => {
            let employeePosition = ''
            if(position === "Manager") {
                employeePosition = "Office Number"
            } else if(position === "Engineer"){
                employeePosition = "GitHub username"
            } else {
                employeePosition = "School name"
            }
            inquirer.prompt([{
                name: 'employeePosition',
                message: `Enter ${employeePosition}`
            },
            {
                type: 'confirm',
                name: 'addEmployee',
                message: 'Would you like to add another team member?',                
            }])

        })
        .then(() => {
            if(addEmployee) {
                questionsEmployee()
            }
        })
        .catch((err) => console.error(err))
}

init()
