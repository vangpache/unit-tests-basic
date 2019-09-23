//TESTING IN JAVASCRIPT

let sum = require('./sum.js')

describe('sum module tests', () => {
    //SIMPLE ADDING 
    //test() parameter is name of test
    //can write more than 1 expects of params
    test('Adding 1 and 2 gives 3', () => {
        expect(sum(1, 2)).toBe(3);
    })

    test('Adding -1 and 2 gives 1', () => {
        expect(sum(-1, 2)).toBe(1);
    })

    test('Adding 1.5 and 2 gives 3.5', () => {
        expect(sum(1.5, 2)).toBe(3.5);
    })

    test(`Adding '1' and 2 gives 3`, () => {
        expect(sum('1', 2)).toBe(3);
    })

    test('Adding 1 to nothing gives 1', () => {
        expect(sum(1)).toBe(1);
    })

    test(`Adding 'a' and 1 gives NaN`, () => {
        expect(sum('a', 1)).toBe(NaN);
    })
})





