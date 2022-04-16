class Employee {
    constructor (name, id, email) {
        this.name = name
        this.id = id
        this.email = email
    }

    getName (answers) {
        this.name =  answers.name
        return this.name
    }

    getId (answers) {
        this.id = answers.id
        return this.id
    }

    getEmail (answers) {
        this.email = answers.email
        return this.email
    }

    getRole () {
        return Employee
    }
}

module.exports = Employee