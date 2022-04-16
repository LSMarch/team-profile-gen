//const Employee = require('../js/employee.js')
const employee = require ('../js/employee.js')

describe('employee', () => {
    it('Should have name, id, email properties after intall.', () => {
        const ted = new employee('ted',2,'ted@lasso.com')
        expect(ted.name).toBe('ted')
        expect(ted.id).toBe(2)
        expect(ted.email).toBe('ted@lasso.com')
    })
})