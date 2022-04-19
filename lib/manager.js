const Employee = require('./employee')
class Manager extends Employee{
    constructor(name, id, email, office) {
        super(name, id, email)
        this.office = office
    }

    getRole() {
        return 'Manager'
    }

    getOfficeNumber(answers){
        //this.officeNumber = answers.officeNumber
        return this.office
    }
}

module.exports = Manager