import { sumOddFibonacciNumbers } from "./question5";

/**
* Test Suite 
* 
*/
describe('sumOddFibonacciNumbers()', () => {
    it('returns sum of all odd Fibonnci numbers', () => {
        // arrange
        const num = 10;

        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 1: ", result);

        // assert
        expect(result).toBe(10);
    });

    it('returns sum of all odd Fibonnci numbers 2nd example', () => {
        // arrange
        const num = 1000;

        // act
        const result = sumOddFibonacciNumbers(num);

        // log
        console.log("result 2: ", result);

        // assert
        expect(result).toBe(1785);
    });
});