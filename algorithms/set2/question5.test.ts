import { sortProducts } from "./question5";

describe('sortProducts', () => {

    it('Sort an array of products first by category (alphabetically), then by price (descending), and finally by name (alphabetically) for products with the same category and price.', () => {

        const products = [
            { name: 'Phone', category: 'Electronics', price: 500 },
            { name: 'Laptop', category: 'Electronics', price: 1000 },
            { name: 'Desk', category: 'Furniture', price: 300 },
            { name: 'Chair', category: 'Furniture', price: 300 }
        ];

        const result = sortProducts(products);

        const expectation = [
            { name: 'Laptop', category: 'Electronics', price: 1000 },
            { name: 'Phone', category: 'Electronics', price: 500 },
            { name: 'Chair', category: 'Furniture', price: 300 },
            { name: 'Desk', category: 'Furniture', price: 300 }
        ]

        expect(result).toEqual(expectation);
    })

})