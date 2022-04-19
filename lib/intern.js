const Employee = require('./employee')
class Intern extends Employee {
    constructor (name, id, email, position, school){
        super (name, id, email, position)
        this.school = school
    }

    getSchool () {
        
        return this.school
    }

    
}

module.exports = Intern