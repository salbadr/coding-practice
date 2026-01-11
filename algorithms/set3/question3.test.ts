import { reverseAString } from "./question3";

describe('reverseAString()', () => {
    it('returns original string reversed', () => {
        // arrange
        const str = 'hello';

        // act
        const result = reverseAString(str);


        // assert
        expect(result).toBe('olleh');
    });
});