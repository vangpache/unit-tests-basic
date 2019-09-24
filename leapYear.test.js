let leapYear = require('./leapYear.js')

describe('leapYear module tests', () => {
    test(`a year that is divisible by 4 and 100 and 400 gives boolean TRUE`, () => {
        expect(leapYear(2400)).toBe(true);
        expect(leapYear(1600)).toBe(true);
        expect(leapYear(400)).toBe(true);
    })
    test('a year that is divisible by 4 and 100 but not 400 gives boolean false', () => {
        expect(leapYear(1800)).toBe(false);
        expect(leapYear(1900)).toBe(false);
        expect(leapYear(200)).toBe(false);
    })
    test('a year that is only divisible by 4 and not 100 gives boolean true', () => {
        expect(leapYear(2024)).toBe(true);
        expect(leapYear(1616)).toBe(true);
        expect(leapYear(384)).toBe(true);
    })
})