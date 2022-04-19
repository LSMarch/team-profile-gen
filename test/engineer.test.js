const Engineer = require('../lib/engineer')

describe('getGithub', () => {
    it('gets engineer github username', () => {
        const engineer = new Engineer('Steve', 1, 'steve@steve.com', 'Engineer', 'stev0')

        expect(engineer.getGithub()).toMatch(engineer.github)
    })
})