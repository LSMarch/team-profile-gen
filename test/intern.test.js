const Intern = require('../lib/intern')

describe('getSchool', () => {
    it('gets intern school name', () => {
        const intern = new Intern('Steve', 1, 'steve@steve.com', 'Intern', 'Tartan Highschool')

        expect(intern.getSchool()).toMatch(intern.school)
    })
})