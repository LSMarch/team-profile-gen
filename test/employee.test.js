const Employee = require('../lib/employee')

describe('gets employee name', () => {
    it('makes employee an object', () => {
        const employee = new Employee('Steve', 1, 'steve@steve.com', 'Manager')

        expect(employee.name).toMatch(/[a-z]/)
        expect(employee.id).toEqual(expect.any(Number))
        expect(employee.email).toMatch(/[@.]/)
        expect(employee.position).toMatch(/[a-z]/)
        
    });    
})

describe('getName()', () => {
    it('gets employee name', () => {
        const employee = new Employee('Steve', 1, 'steve@steve.com', 'Manager')
        expect(employee.getName()).toMatch(employee.name)
    }) 
})

describe('getId()', () => {
    it('gets employee id', () => {
        const employee = new Employee('Steve', 1, 'steve@steve.com', 'Manager')
        expect(employee.getId()).toBe(employee.id)
    }) 
})

describe('getEmail()', () => {
    it('gets employee email', () => {
        const employee = new Employee('Steve', 1, 'steve@steve.com', 'Manager')
        expect(employee.getEmail()).toMatch(employee.email)
    }) 
})
describe('getRole()', () => {
    it('gets employee role', () => {
        const employee = new Employee('Steve', 1, 'steve@steve.com', 'Manager')
        expect(employee.getRole()).toMatch(employee.position)
    }) 
})

