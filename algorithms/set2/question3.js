"use strict";
/**
 * Question 3: Calculate Revenue by Product Category
Difficulty: Easy-Medium

You have an array of sales transactions. Calculate the total revenue for each product category.

Input:

const sales = [
  { product: 'Laptop', category: 'Electronics', price: 1000, quantity: 2 },
  { product: 'Phone', category: 'Electronics', price: 500, quantity: 3 },
  { product: 'Desk', category: 'Furniture', price: 300, quantity: 1 }
];
Expected Output:

{
  Electronics: 3500,  // (1000 * 2) + (500 * 3)
  Furniture: 300      // (300 * 1)
}

 */
(() => {
    const sales = [
        { product: 'Laptop', category: 'Electronics', price: 1000, quantity: 2 },
        { product: 'Phone', category: 'Electronics', price: 500, quantity: 3 },
        { product: 'Desk', category: 'Furniture', price: 300, quantity: 1 }
    ];
    function groupedOrders(salesData) {
        return salesData.reduce((acc, data) => {
            if (!acc[data.category]) {
                acc[data.category] = 0;
            }
            acc[data.category] = acc[data.category] + (data.price * data.quantity);
            return acc;
        }, {});
    }
    const result = groupedOrders(sales);
    console.log(JSON.stringify(result, null, 4));
})();
