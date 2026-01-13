import { flattenTransform } from "./question7";

describe('flattenTransform', () => {

    it('should flatten categories into a single array of products', () => {
        const apiResponse = {
            categories: [
                {
                    name: 'Electronics',
                    products: [
                        { id: 1, name: 'Laptop', price: 1000 },
                        { id: 2, name: 'Phone', price: 500 }
                    ]
                },
                {
                    name: 'Furniture',
                    products: [
                        { id: 3, name: 'Desk', price: 300 }
                    ]
                }
            ]
        };

        const expectation = [
            { id: 1, name: 'Laptop', price: 1000, category: 'Electronics' },
            { id: 2, name: 'Phone', price: 500, category: 'Electronics' },
            { id: 3, name: 'Desk', price: 300, category: 'Furniture' }
        ]

        const result = flattenTransform(apiResponse);

        expect(result).toEqual(expectation);
    })
})