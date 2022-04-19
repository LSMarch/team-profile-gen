const Manager = require('../lib/manager')

describe('getOfficeNumber', () => {
    it('gets manager office number', () => {
        const manager = new Manager('Steve', 1, 'steve@steve.com', 'Manager', 1)

        expect(manager.getOfficeNumber()).toBe(manager.officeNumber)
    })
})

