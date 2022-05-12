const fs = require('fs')
const inquirer = require('inquirer')
const Manager = require('./lib/manager')
const Engineer = require('./lib/engineer')
const Intern = require('./lib/intern')

const teamRoster = []

const init = () => {
    inputTeam();
    beginHTML();
};

function inputTeam() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "Enter team member's name",
            validate: function (answer) {
                if (answer = !/[a-z]/.test(answer)) {
                    console.log('Please enter a valid name')
                    return false
                }
                return true
            }
        },
        {
            type: 'list',
            name: 'role',
            message: "Enter team member's role",
            choices: [
                "Manager",
                "Engineer",
                "Intern"
            ]
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
        }
    ])
    .then(function({name, role, id, email}) {
        let roleInfo = ''
        if(role ==='Manager') {
            roleInfo = 'office number'
        } else if (role === 'Engineer') {
            roleInfo = 'GitHub username'
        } else {
            roleInfo = 'school name'
        }
        inquirer.prompt([
            {
                type: 'input',
                name: 'roleInfo',
                message: `Enter team member's ${roleInfo}`
            },
            {            
                type: 'confirm',
                name: 'addMore',
                message: 'Would you like to add another team memeber?',
                default: false                
            }
        ])
        .then(function({roleInfo, addMore}) {
            let teamMember;
            if (role === 'Manager') {
                teamMember = new Manager (name, id, email, roleInfo);
            } else if (role === 'Engineer') {
                teamMember = new Engineer (name, id, email, roleInfo);
            } else {
                teamMember = new Intern (name, id, email, roleInfo)
            }
            teamRoster.push(teamMember);
            addTeam(teamMember)
            .then(function() {
                if (addMore) {
                    inputTeam();
                } else {
                    endHTML();
                }
            });
        });                
    })
};

const beginHTML = () => {
    const html = `
    <!doctype html>
    <html lang="en">
        <head>    
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
            <script src="https://kit.fontawesome.com/308e3ed2db.js" crossorigin="anonymous"></script>
            <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/css/bootstrap.min.css" integrity="sha384-zCbKRCUGaJDkqS1kPbPd7TveP5iyJE0EjAuZQTgFLD2ylzuqKfdKlfG/eSrtxUkn" crossorigin="anonymous">
            <title>Hello, Team!</title>
        </head>
        <body>
            <header class="jumbotron jumbotron-fluid text-center bg-danger text-light">
                <div class="container">
                    <h1 class="display-4">Meet the Team</h1>          
                </div>
            </header>
            <main class="container d-flex justify-content-center flex-wrap">
                <div class="row">
                    <!--Team-->
    `;
    fs.writeFile('./dist/index.html', html, function(err){
        if (err) {
            console.log(err)
        }
    })
    //console.log('begin')
}

const addTeam = (member) => {
    return new Promise(function(resolve, reject) {
        const name = member.getName();
        const role = member.getRole();
        const id = member.getId();
        const email = member.getEmail();
        let data = '';
        if(role==='Manager') {
            const office = member.getOfficeNumber();
            data = `
            <div class="card m-4" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h2>${name}</h2>
                <h4>Manager</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">Office Number:${office}</li>
            </ul>
        </div>
            `
        } else if (role==='Engineer') {
            const github = member.getGithub();
            data = `
            <div class="card m-4" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h2>${name}</h2>
                <h4>Engineer</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">GitHub:${github}</li>
            </ul>
        </div>
            `
        } else {
            const school = member.getSchool();
            data = `
            <div class="card m-4" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h2>${name}</h2>
                <h4>Intern</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${id}</li>
                <li class="list-group-item"><a href="mailto:${email}">${email}</a></li>
                <li class="list-group-item">School:${school}</li>
            </ul>
        </div>
            `
        }
        console.log('adding team');
        fs.appendFile('./dist/index.html', data, function(err) {
            if (err) {
                return reject(err);
            };
            return resolve();
        })
    })
}

const endHTML = () => {
    const html = `
    </div>
            </main>    
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>    
        </body>
    </html>
    `;
    fs.appendFile('./dist/index.html', html, function (err) {
        if (err) {
            console.log(err);
        };        
    })
    console.log('finished');
}

init();
