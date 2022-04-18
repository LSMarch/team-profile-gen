const Employee = require('../test/employee')

describe('Name', () => {
    it('makes employee object', () => {
        const employee = new Employee('Steve', 1, 'steve@steve.com')

        expect(employee.name).toMatch(/[a-z]/i)
        expect(employee.id).toBe(Number)
        expect(employee.email).toMatch(String)
        
    })
})