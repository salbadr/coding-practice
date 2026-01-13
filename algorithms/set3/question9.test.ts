import { arrayMaximalAdjacentDifference } from "./question9";

describe('arrayMaximalAdjacentDifference()', () => {
    it('returns largest difference between adjacent values', () => {
        // arrange
        const nums = [2, 4, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 1: ", result);
        
        // assert
        expect(result).toBe(3);
    });

    it('returns largest difference between adjacent values example 2', () => {
        // arrange
        const nums = [2, 9, 1, 0];
        
        // act
        const result = arrayMaximalAdjacentDifference(nums);

        // log
        console.log("result 2: ", result);
        
        // assert
        expect(result).toBe(8);
    });
});