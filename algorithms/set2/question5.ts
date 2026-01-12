/**
 * Sort an array of products first by category (alphabetically),
 *  then by price (descending),
 *  and finally by name (alphabetically) for products with the same category and price.
 * 
 *  const products = [
            { name: 'Phone', category: 'Electronics', price: 500 },
            { name: 'Laptop', category: 'Electronics', price: 1000 },
            { name: 'Desk', category: 'Furniture', price: 300 },
            { name: 'Chair', category: 'Furniture', price: 300 }
        ];
 */

type ProductType = {
    name: string,
    category: string,
    price: number
}
export function sortProducts(products: ProductType[]): ProductType[] {
    products.sort((a, b) => {

        if (a.category < b.category) {
            return -1
        }
        else if (a.category > b.category) {
            return 1
        }

        return 0
    }).sort((a, b) => b.price - a.price)
        .sort((a, b) => {
            if (a.category === b.category && a.price === b.price && a.name < b.name) {
                return -1
            }

            return 0
        })


    return products


}