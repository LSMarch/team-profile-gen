class Engineer extends Employee {
    constructor (name, id, email, github){
        super(name, id, email)
        this.github = github
    }

    getGithub() {
        this.github = answers.github
        return this.github
    }

    getRole(){
        return Engineer
    }
}

module.exports = Engineer