const fizz = require('../exercise1');

describe('fizzbuzz', () => {
    it('should throw an error if the input is not a number', () => {
        const args = ['a', null, undefined, false];
        args.forEach(arg => {
            expect(() => {fizz.fizzBuzz(arg)}).toThrow()
        })
    })

    it('should return FizzBuzz if the input is divisible by 3 and 5', () => {
        const result = fizz.fizzBuzz(15);
        expect(result).toBe('FizzBuzz')
    });

    it('should return Fizz if the input is only divisible by 3', () => {
        const result = fizz.fizzBuzz(3);
        expect(result).toBe('Fizz')
    });

    it('should return Buzz if the input is only divisible by 5', () => {
        const result = fizz.fizzBuzz(5);
        expect(result).toBe('Buzz')
    });

    it('should return the input if the input is not divisible by 3 or 5', () => {
        const result = fizz.fizzBuzz(2);
        expect(result).toBe(2)
    });
})