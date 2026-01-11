/**
 * Question 2: Group Orders by Status
Difficulty: Easy

Given an array of order objects, group them by their status.

Input:

const orders = [
  { orderId: 1, status: 'pending', amount: 100 },
  { orderId: 2, status: 'shipped', amount: 200 },
  { orderId: 3, status: 'pending', amount: 150 },
  { orderId: 4, status: 'delivered', amount: 300 }
];
Expected Output:

{
  pending: [
    { orderId: 1, status: 'pending', amount: 100 },
    { orderId: 3, status: 'pending', amount: 150 }
  ],
  shipped: [
    { orderId: 2, status: 'shipped', amount: 200 }
  ],
  delivered: [
    { orderId: 4, status: 'delivered', amount: 300 }
  ]
}
 */


(() => {

    type OrderType = {
        orderId: number,
        status: 'pending' | 'shipped' | 'delivered',
        amount: number
    }
    const orders: OrderType[] = [
        { orderId: 1, status: 'pending', amount: 100 },
        { orderId: 2, status: 'shipped', amount: 200 },
        { orderId: 3, status: 'pending', amount: 150 },
        { orderId: 4, status: 'delivered', amount: 300 }
    ];

    function groupedOrders(orderData: OrderType[]) {

        return Object.groupBy(orderData, (order) => {
            return order.status
        })
    }
    const result = groupedOrders(orders)
    console.log(JSON.stringify(result, null, 4));

})()