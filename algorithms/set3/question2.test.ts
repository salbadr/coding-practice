import { chunkyMonkey } from './question2'

describe('chunkyMonkey()', () => {
    it('["a", "b", "c", "d"] with size 2 should return [["a", "b"], ["c", "d"]]', () => {
        // arrange
        const values = ["a", "b", "c", "d"];
        const size = 2;

        // act
        const result = chunkyMonkey(values, size);

        // assert
        expect(result).toEqual([["a", "b"], ["c", "d"]]);
    });

    it('[0, 1, 2, 3, 4, 5] with size 4 should return [[0, 1, 2, 3], [4, 5]]', () => {
        // arrange
        const values = [0, 1, 2, 3, 4, 5];
        const size = 4;

        // act
        const result = chunkyMonkey(values, size);

        // assert
        expect(result).toEqual([[0, 1, 2, 3], [4, 5]]);
    });
});