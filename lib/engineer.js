const Employee = require("./employee")

//Employee
class Engineer extends Employee {
    constructor (name, id, email, position, github){
        super(name, id, email, position)
        this.github = github
    }

    getGithub() {
        //this.github = answers.github
        return this.github
    }   
}

module.exports = Engineer