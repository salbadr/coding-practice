type Product = {
    id: number,
    name: string,
    price: number
}

type CategoriesResponse = {
    categories: { name: string, products: Product[] }[]
}
/**
 * 
 * You receive a nested API response with categories and their products.
 * Flatten it into a single array of products, adding the category name to each product.
 * const apiResponse = {
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
 */

export function flattenTransform(response: CategoriesResponse): (Product & { category: string })[] {
    const result = response.categories.flatMap((value) => {
        return value.products.map((product) => ({ ...product, category: value.name }))
    });

    return result;

}