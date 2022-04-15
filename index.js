const fs = require('fs')
const inquirer = require('inquirer')
const jest = require('jest')
const generateHTML = require('./src/generateHTML')

manager questions [
    {
        type: 'input',
        name: 'name',
        message: 'Enter team manager"s name'
    },
    {
        type: 'input',
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
]

engineer questions [
    {
        type: 'input',
        name: 'name',
        message: 'Enter employee name'
    },
    {
        type: 'input',
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
        name: 'github',
        message: 'Enter valid GitHub username'
    },
]

intern questions [
    [
        {
            type: 'input',
            name: 'name',
            message: 'Enter employee name'
        },
        {
            type: 'input',
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
            name: 'school',
            message: 'Enter school'
        },
    ]
]