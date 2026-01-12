import { mergeAndDeDupe } from "./question4";

describe('mergeAndDeDupe', () => {

    it('should merge records, remove duplicates based on email, keeping records with most recent updatedAt', () => {

        const source1 = [
            { id: 1, email: 'alice@example.com', name: 'Alice', updatedAt: '2024-01-01' },
            { id: 2, email: 'bob@example.com', name: 'Bob', updatedAt: '2024-01-05' }
        ];

        const source2 = [
            { id: 3, email: 'alice@example.com', name: 'Alice Smith', updatedAt: '2024-01-10' },
            { id: 4, email: 'charlie@example.com', name: 'Charlie', updatedAt: '2024-01-03' }
        ];

        const result = mergeAndDeDupe(source1, source2);

        const expectation = [
            { id: 3, email: 'alice@example.com', name: 'Alice Smith', updatedAt: '2024-01-10' },
            { id: 2, email: 'bob@example.com', name: 'Bob', updatedAt: '2024-01-05' },
            { id: 4, email: 'charlie@example.com', name: 'Charlie', updatedAt: '2024-01-03' }
        ]

        expect(result).toEqual(expectation);
    })

})