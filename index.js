const fs = require('fs')
const inquirer = require('inquirer')
//const jest = require('jest')
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')
const Employee = require('./lib/employee')

const teamRoster = []

const inputManager = async () => {
    const addManager = await inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team manager's name",
            validate: function (answer_1) {
                if (answer_1 = !/[a-z]/.test(answer_1)) {
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
            validate: function (answer_3) {
                if (answer_3 = !/[1-9]/.test(answer_3)) {
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
            validate: answer_5 => {
                if (answer_5 = !/\b[\w\.-]+@[\w\.-]+\.\w{2,4}\b/.test(answer_5)) {
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
            validate: function (answer_7) {
                if (answer_7 = !/[1-9]/.test(answer_7)) {
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

const inputEmployee = async() => {
    console.log(`
    =================
    I'm going to scream
    =================
    `)
    await inquirer.prompt([
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
            // {
            //     type: 'number',
            //     name: 'office',
            //     message: 'Please enter manager name',
            //     when: (input) => input.position === 'Manager',
            //     validate: function (answer) {
            //         if(answer = !/[a-z]/.test(answer)) {
            //             console.log('Please enter a valid name')
            //             return false
            //         }
            //         return true;
            //     }
            // },
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

        // if (position === 'Manager') {
        //     teamMember = new Manager (name, id, email, office)
        //     console.log(teamMember)
        // } else
        if (position === 'Engineer') {
            teamMember = new Employee (name, id, email, github)
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
            console.log('for the love of god and all that is holy')
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

// function startingHTML() {
//     const html = `
//     <!doctype html>
// <html lang="en">
//   <head>    
//     <meta charset="utf-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
//     <script src="https://kit.fontawesome.com/308e3ed2db.js" crossorigin="anonymous"></script>
//     <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">

//     <title>Hello, Team!</title>
//   </head>
//   <body>
//     <header class="jumbotron jumbotron-fluid text-center bg-danger text-light">
//         <div class="container">
//           <h1 class="display-4">Meet the Team</h1>          
//         </div>
//     </header>
//     <main class="container d-flex justify-content-center flex-wrap">
//     `
//     fs.writeFile('./dist/index.html', html, function(err){
//         if(err){
//             console.log(err)
//         }
//     })
//     console.log('starting')
// }

// function addingHtml(employeeMember) {
//     return new Promise(function(resolve,reject) {
//         const name = employeeMember.getName()
//         const position = employeeMember.getRole()
//         const id = employeeMember.getId()
//         const email = employeeMember.getEmail()
//         let data = ''
//         if (position === 'Manager'){
//             const officeNum = employeeMember.getOfficeNumber()
//             data = `
//             <div class="card m-4" style="width: 18rem;">
//             <div class="card-header bg-primary text-white">
//               <h2>${name}</h1>
//               <h4>${position}</h4>
//             </div>
//             <ul class="list-group list-group-flush">
//               <li class="list-group-item">Id: ${id}</li>
//               <li class="list-group-item"><a href="mailto:${email}>${email}</a></li>
//               <li class="list-group-item">Office Number: ${office}</li>
//             </ul>
//           </div>
//             `
//         } else if (position === 'Engineer') {
//             data = `
//             <div class="card m-4" style="width: 18rem;">
//             <div class="card-header bg-primary text-white">
//               <h2>${name}</h1>
//               <h4>${position}</h4>
//             </div>
//             <ul class="list-group list-group-flush">
//               <li class="list-group-item">Id: ${id}</li>
//               <li class="list-group-item"><a href="mailto:${email}>${email}</a></li>
//               <li class="list-group-item">GitHub: ${github}</li>
//             </ul>
//           </div>
//             `
//         }
//         console.log('adding')
//         fs.appendFile('./dist/index.html', data, function(err){
//             if(err){
//                 return reject(err)
//             }
//             return resolve()
//         })
//     })
// }
    

//     .then(memberInfo => {

//         let {name, id, email, position, office, github, school, addMore} = memberInfo;
//         let member

//         if(position === 'Manager'){
//             member = new Manager(name, id, email, office)
//             console.log(member)
//         } else if (position === 'Engineer'){
//             member = new Engineer(name, id, email, github)
//             console.log(member)
//         } else {
//             member = new Intern(name, id, email, school)
//             console.log(member)
//         }

//         teamRoster.push(member)

//         if(addMore){
//             return inputEmployee(teamRoster)
//         } else {
//             return teamRoster
            
//         }
//     })
//     console.log(teamRoster)
// }

// const writeFile = data => {
//     fs.writeFileSync('./dist/index.html',data, err => {
//         if(err) {
//             console.log(err)
//             return
//         } else {
//         console.log('Done')
//         }
//     })
// }

// function init(){
// startingHTML()
// inputManager()
//     .then(inputEmployee)
//     // .then(teamRoster => {
//     //     return generateHTML(teamRoster)
//     // })
//     // .then(html => {
//     //     return writeFile(html)
//     // })    
//     .catch(err => {
//         console.log(err)
//     })

// }


// inputManager()
//     .then(inputEmployee)
//     .then(teamRoster => {
//         return generateHTML(teamRoster)
//     })
//     .then(html => {
//         return writeFile(html)
//     })    
//     .catch(err => {
//         console.log(err)
//     })

//init()