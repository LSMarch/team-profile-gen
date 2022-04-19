const Employee = require("./employee")

//Employee
class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email)
        this.github = github
    }

    getRole() {
        return 'Engineer'
    }

    getGithub() {
        //this.github = answers.github
        return this.github
    }   
}

module.exports = Engineer