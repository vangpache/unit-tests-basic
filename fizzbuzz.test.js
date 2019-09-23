
let fizzbuzz = require('./fizzbuzz.js')

describe ('fizzbuzz module tests', () => {
    test(`number is divisible by 3 gives 'Fizz'`, () => {
        expect(fizzbuzz(3)).toBe('Fizz');
        expect(fizzbuzz(6)).toBe('Fizz');
        expect(fizzbuzz(-3)).toBe('Fizz');
        expect(fizzbuzz(-6)).toBe('Fizz');
        expect(fizzbuzz('3')).toBe('Fizz');
        expect(fizzbuzz('6')).toBe('Fizz');
        
    })
    test(`number is divisible by 5 gives 'Buzz'`, () => {
        expect(fizzbuzz(5)).toBe('Buzz');
        expect(fizzbuzz(10)).toBe('Buzz');
        expect(fizzbuzz(-5)).toBe('Buzz');
        expect(fizzbuzz(-10)).toBe('Buzz');
        expect(fizzbuzz('5')).toBe('Buzz');
        expect(fizzbuzz('10')).toBe('Buzz');
    })
    test(`number is divisible by 3 and 5 gives 'FizzBuzz'`, () => {
        expect(fizzbuzz(15)).toBe('FizzBuzz');
        expect(fizzbuzz(30)).toBe('FizzBuzz');
        expect(fizzbuzz(0)).toBe('FizzBuzz');
        expect(fizzbuzz(-15)).toBe('FizzBuzz');
        expect(fizzbuzz(-30)).toBe('FizzBuzz');
        expect(fizzbuzz('15')).toBe('FizzBuzz');
        expect(fizzbuzz('30')).toBe('FizzBuzz');
    })
    test(`number is not divisible by 3 or 5 gives the number`, () => {
        expect(fizzbuzz(7)).toBe(7);
        expect(fizzbuzz(16)).toBe(16);
        expect(fizzbuzz(-7)).toBe(-7);
        expect(fizzbuzz(-16)).toBe(-16);
        expect(fizzbuzz('7')).toBe(7);
        expect(fizzbuzz('16')).toBe(16);
    })

})