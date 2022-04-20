const fs = require('fs')
const inquirer = require('inquirer')
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const teamRoster = []

const inputManager =  () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team manager's name",
            validate: function (answer) {
                if (answer = !/[a-z]/.test(answer)) {
                    console.log('Please enter a valid name')
                    return false
                }
                return true
            }
        },
        {
            type: 'number',
            name: 'id',
            message: 'Enter valid employee ID number',
            validate: function (answer) {
                if (answer = !/[1-9]/.test(answer)) {
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
                if (answer = !/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(answer)) {
                    console.log('Please enter valid email')
                    return false
                }
                return true
            }
        },
        {
            type: 'number',
            name: 'office',
            message: 'What is the office number?',
            validate: function (answer) {
                if (answer= !/[1-9]/.test(answer)) {
                    return false
                }
                return true
            }
        },
    ])
    .then(addManager => {
        const { name, id, email, office } = addManager
        const manager = new Manager(name, id, email, office)
        teamRoster.push(manager)
        console.log(manager)
    })    
}

const inputEmployee = () => {
    console.log(`
    ====================
    Adding Team Memebers
    ====================
    `)
    return inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'Please enter employee position',
            choices: ['Engineer', 'Intern']
        },
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
                    if(answer = !/[1-9]/.test(answer)) {
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
                type: 'input',
                name: 'github',
                message: 'Please enter GitHub username',
                when: (input) => input.position === 'Engineer',
                validate: function (answer) {
                    if(answer = !/[a-z]/.test(answer)) {
                        console.log('Please enter a valid name')
                        return false
                    }
                    return true;
                }
            }, 
            {
                type: 'input',
                name: 'school',
                message: 'Please enter school name',
                when: (input) => input.position === 'Intern',   
                validate: function (answer) {
                    if(answer = !/[a-z]/.test(answer)) {
                        console.log('Please enter a valid name')
                        return false
                    }
                    return true;
                }             
            },
            {
                type: 'confirm',
                name: 'addMore',
                message: 'Would you like to add another team memeber?',
                default: false
            },
        
    ])
    .then(teamData => {
        let {name, id, email, position, github, school, addMore} = teamData
        let teamMember

        if (position === 'Engineer') {
            teamMember = new Engineer (name, id, email, github)
            //console.log(teamMember)
        } else if (position === 'Intern') {
            teamMember = new Intern (name, id, email, school)
            //console.log(teamMember)
        }
        teamRoster.push(teamMember)

        if (addMore) {
            return inputEmployee(teamRoster)
        } else {
            return teamRoster
        }
    })
}

const writeFile = data => {
    fs.writeFile('./dist/index.html', data, err => {
        if (err) {
            console.log(err)
            return
        } else {
            console.log('Team page created!')
        }
    })
}

inputManager()
    .then(inputEmployee)
    .then(teamRoster =>{
        return generateHTML(teamRoster)
    })
    .then(teamPageHTML => {
        return writeFile(teamPageHTML)
    })
    .catch(err => {
        console.log(err)
    })
 

