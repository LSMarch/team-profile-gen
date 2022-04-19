const Employee = require('./employee')
class Manager extends Employee{
    constructor(name, id, email, position, officeNumber) {
        super(name, id, email, position)
        this.officeNumber = officeNumber
    }

    getOfficeNumber(answers){
        //this.officeNumber = answers.officeNumber
        return this.officeNumber
    }
}

module.exports = Manager