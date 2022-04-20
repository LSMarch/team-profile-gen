const genManager = function (manager) {
    return `
        <div class="card m-4" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h2>${manager.name}</h2>
                <h4>Manager</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${manager.id}</li>
                <li class="list-group-item"><a href="mailto:${manager.email}">${manager.email}</a></li>
                <li class="list-group-item">Office Number:${manager.office}</li>
            </ul>
        </div>
    `    
}

const genEngineer = function (engineer) {
    return `
    <div class="card m-4" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h2>${engineer.name}</h2>
                <h4>Engineer</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${engineer.id}</li>
                <li class="list-group-item"><a href="mailto:${engineer.email}">${engineer.email}</a></li>
                <li class="list-group-item">GitHub:${engineer.github}</li>
            </ul>
        </div>
    `
}

const genIntern = function (intern) {
    return`
    <div class="card m-4" style="width: 18rem;">
            <div class="card-header bg-primary text-white">
                <h2>${intern.name}</h2>
                <h4>Intern</h4>
            </div>
            <ul class="list-group list-group-flush">
                <li class="list-group-item">ID:${intern.id}</li>
                <li class="list-group-item"><a href="mailto:${intern.email}">${intern.email}</a></li>
                <li class="list-group-item">School:${intern.school}</li>
            </ul>
        </div>
    `
}

generateHTML = function (cardArr) {
    cardArr = []  
    cardArr.forEach((teamMem) => {
        teamMem = cardArr[i]
        const position = teamMem.getRole(teamMem)

        if (position === 'Manager') {
            const managerCard = genManager(teamMem)
            cardArr.push(managerCard)
        } 
        if (position === 'Engineer') {
            const engineerCard = genEngineer(teamMem)
            cardArr.push(engineerCard)
        } 
        if (position === 'Intern') {
            const internCard = genIntern(teamMem)
            cardArr.push(internCard)
        }
    })

    const teamCards = cardArr.join(' ')
    //return teamCards

    const genTeam = genPageTeam(teamCards)
    return genTeam
    //console.log(teamCards)
}

const genPageTeam = (teamCards) => {
    return `
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
                <div>
                    <!--Team-->
                        ${teamCards}               
                </div>
            </main>    
            <script src="https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js" integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj" crossorigin="anonymous"></script>
            <script src="https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js" integrity="sha384-fQybjgWLrvvRgtW6bFlB7jaZrFsaBXjsOMm/tB9LTS58ONXgqbR9W8oWht/amnpF" crossorigin="anonymous"></script>    
        </body>
    </html>
    `
}

module.exports = generateHTML