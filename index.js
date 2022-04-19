const fs = require('fs')
const inquirer = require('inquirer')
const jest = require('jest')
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const teamRoster = []

const inputManager = () => {
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
        type: 'number',
        name: 'office',
        message: 'What is the office number?',
        validate: function(answer) {
            if(answer = !/[1-9]/.test(answer)) {
                return false
                console.log('Please enter a valid number')
            }
            return true
        }
    },
])
.then(addManager => {
    const {name, id, email, office} = addManager;
    const manager = new Manager (name, id, email, office);
    teamRoster.push(manager);
    console.log(manager);
})
}

const inputEmployee = () => {
    inquirer.prompt([
        {
            type: 'list',
            name: 'position',
            message: 'Please enter employee position',
            choices: ['Manager', 'Engineer', 'Intern']
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
                type: 'number',
                name: 'office',
                message: 'Please enter manager name',
                when: (input) => input.position === 'Manager',
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

    .then(memberInfo => {

        let {name, id, email, position, office, github, school, addMore} = memberInfo;
        let member

        if(position === 'Manager'){
            member = new Manager(name, id, email, office)
            console.log(member)
        } else if (position === 'Engineer'){
            member = new Engineer(name, id, email, github)
            console.log(member)
        } else {
            member = new Intern(name, id, email, school)
        }

        teamRoster.push(member)

        if(addMore){
            return inputEmployee(teamRoster)
        } else {
            return teamRoster
        }
    })
}

// const questionsEmployee = () => {

//  function questionsEmployee() {inquirer.prompt ([
//     {
//         type: 'input',
//         name: 'name',
//         message: "Enter team member's name",
//         validate: function (answer) {
//             if(answer = !/[a-z]/.test(answer)) {
//                 console.log('Please enter a valid name')
//                 return false
//             }
//             return true;
//         }
//     },
//     {
//         type: 'number',
//         name: 'id',
//         message: 'Enter valid employee ID number',
//         validate: function (answer) {
//             if(answer.id = !/[1-9]/.test(answer)) {
//                 console.log('Please enter a valid employee ID')
//                 return false
//             }
//             return true
//         }
//     },
//     {
//         type: 'input',
//         name: 'email',
//         message: 'Enter valid email address',
//         validate: answer => {
//             if(answer = !/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(answer)){
//                 console.log('Please enter valid email')
//                 return false
//             }
//             return true
//         }
//     },
//     {
//         type: 'list',
//         name: 'position',
//         message: 'Enter team member position',
//         choices: ['Manager', 'Engineer', 'Intern']
//     },  
// ])




// const init = () => {
//     questionsEmployee()
//         .then(({name, id, email, position}) => {
//             let employeePosition = ''
//             if(position === "Manager") {
//                 employeePosition = "Office Number"
//             } else if(position === "Engineer"){
//                 employeePosition = "GitHub username"
//             } else {
//                 employeePosition = "School name"
//             }
//             inquirer.prompt([{
//                 type: 'input',
//                 name: 'employeePosition',
//                 message: `Enter ${employeePosition}`
//             },
//             {
//                 type: 'list',
//                 name: 'addEmployee',
//                 message: 'Would you like to add another team member?',                
//                 choices: ['Yes', 'No']
//             }])
//                 .then(({employeePosition, addEmployee}) => {
//                     let newEmployee
//                     if(employeePosition === 'Manager'){
//                         newEmployee = new Manager(name, id, email, employeePosition)
//                     } else if (employeePosition === 'Engineer'){
//                         newEmployee = new Engineer(name, id, email, employeePosition)
//                     } else {
//                         newEmployee = new Intern (name, id, email, employeePosition)
//                     } //else
//                     teamRoster.push(newEmployee)
                    
//                     .then(() => {
//                         if(addEmployee === 'Yes') {
//                             questionsEmployee()
//                         } else {
//                             console.log('done')}                
//                     })
//                 })
//             })

//  }
        // .then(({employeePosition, addEmployee}) => {
        //     let newEmployee
        //     if(employeePosition === 'Manager'){
        //         newEmployee = new Manager(name, id, email, employeePosition)
        //     } else if (employeePosition === 'Engineer'){
        //         newEmployee = new Engineer(name, id, email, employeePosition)
        //     } else {
        //         newEmployee = new Intern (name, id, email, employeePosition)
        //     }
        //     teamRoster.push(newEmployee)
        //     //console.log(teamRoster)
        //     .then(() => {
        //         if(addEmployee === 'Yes') {
        //             questionsEmployee()
        //         } else {
        //             console.log('done')}                
        //     })
        // })
        // .then(() => {
        //     if(addEmployee) {
        //         questionsEmployee()
        //     }
        // })
//         .catch((err) => console.error(err))
// }
inputManager()
    .then(inputEmployee)
    .catch(err => {
        console.log(err)
    })
