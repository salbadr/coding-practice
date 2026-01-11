# Backend JavaScript Interview Questions

A collection of 10 practical algorithmic questions focused on real-world backend operations, arranged by increasing complexity.

---

## Question 1: Filter and Transform User Data

**Difficulty:** Easy

You have an array of user objects. Filter out inactive users and transform the remaining users to only include their `id`, `name`, and `email`.

**Input:**
```javascript
const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', active: true, role: 'admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', active: false, role: 'user' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', active: true, role: 'user' }
];
```

**Expected Output:**
```javascript
[
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
]
```

---

## Question 2: Group Orders by Status

**Difficulty:** Easy

Given an array of order objects, group them by their status.

**Input:**
```javascript
const orders = [
  { orderId: 1, status: 'pending', amount: 100 },
  { orderId: 2, status: 'shipped', amount: 200 },
  { orderId: 3, status: 'pending', amount: 150 },
  { orderId: 4, status: 'delivered', amount: 300 }
];
```

**Expected Output:**
```javascript
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
```

---

## Question 3: Calculate Revenue by Product Category

**Difficulty:** Easy-Medium

You have an array of sales transactions. Calculate the total revenue for each product category.

**Input:**
```javascript
const sales = [
  { product: 'Laptop', category: 'Electronics', price: 1000, quantity: 2 },
  { product: 'Phone', category: 'Electronics', price: 500, quantity: 3 },
  { product: 'Desk', category: 'Furniture', price: 300, quantity: 1 }
];
```

**Expected Output:**
```javascript
{
  Electronics: 3500,  // (1000 * 2) + (500 * 3)
  Furniture: 300      // (300 * 1)
}
```

---

## Question 4: Merge and Deduplicate Customer Records

**Difficulty:** Medium

You have two arrays of customer records from different sources. Merge them and remove duplicates based on email, keeping the record with the most recent `updatedAt` timestamp.

**Input:**
```javascript
const source1 = [
  { id: 1, email: 'alice@example.com', name: 'Alice', updatedAt: '2024-01-01' },
  { id: 2, email: 'bob@example.com', name: 'Bob', updatedAt: '2024-01-05' }
];

const source2 = [
  { id: 3, email: 'alice@example.com', name: 'Alice Smith', updatedAt: '2024-01-10' },
  { id: 4, email: 'charlie@example.com', name: 'Charlie', updatedAt: '2024-01-03' }
];
```

**Expected Output:**
```javascript
[
  { id: 3, email: 'alice@example.com', name: 'Alice Smith', updatedAt: '2024-01-10' },
  { id: 2, email: 'bob@example.com', name: 'Bob', updatedAt: '2024-01-05' },
  { id: 4, email: 'charlie@example.com', name: 'Charlie', updatedAt: '2024-01-03' }
]
```

---

## Question 5: Sort Products by Multiple Criteria

**Difficulty:** Medium

Sort an array of products first by category (alphabetically), then by price (descending), and finally by name (alphabetically) for products with the same category and price.

**Input:**
```javascript
const products = [
  { name: 'Phone', category: 'Electronics', price: 500 },
  { name: 'Laptop', category: 'Electronics', price: 1000 },
  { name: 'Desk', category: 'Furniture', price: 300 },
  { name: 'Chair', category: 'Furniture', price: 300 }
];
```

**Expected Output:**
```javascript
[
  { name: 'Laptop', category: 'Electronics', price: 1000 },
  { name: 'Phone', category: 'Electronics', price: 500 },
  { name: 'Chair', category: 'Furniture', price: 300 },
  { name: 'Desk', category: 'Furniture', price: 300 }
]
```

---

## Question 6: Flatten and Transform Nested API Response

**Difficulty:** Medium

You receive a nested API response with categories and their products. Flatten it into a single array of products, adding the category name to each product.

**Input:**
```javascript
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
```

**Expected Output:**
```javascript
[
  { id: 1, name: 'Laptop', price: 1000, category: 'Electronics' },
  { id: 2, name: 'Phone', price: 500, category: 'Electronics' },
  { id: 3, name: 'Desk', price: 300, category: 'Furniture' }
]
```

---

## Question 7: Aggregate User Activity Metrics

**Difficulty:** Medium-Hard

Given an array of user activity logs, calculate metrics for each user including: total sessions, total time spent (in minutes), and average session duration.

**Input:**
```javascript
const activityLogs = [
  { userId: 1, sessionId: 'a', startTime: '10:00', endTime: '10:30' },
  { userId: 1, sessionId: 'b', startTime: '14:00', endTime: '14:45' },
  { userId: 2, sessionId: 'c', startTime: '09:00', endTime: '09:20' },
  { userId: 1, sessionId: 'd', startTime: '16:00', endTime: '16:15' }
];
```

**Expected Output:**
```javascript
{
  1: {
    totalSessions: 3,
    totalTime: 90,      // 30 + 45 + 15 minutes
    avgDuration: 30     // 90 / 3
  },
  2: {
    totalSessions: 1,
    totalTime: 20,
    avgDuration: 20
  }
}
```

---

## Question 8: Join Users with Their Orders

**Difficulty:** Medium-Hard

You have two arrays: users and orders. Create a result array where each user object includes an array of their orders. Users without orders should have an empty orders array.

**Input:**
```javascript
const users = [
  { userId: 1, name: 'Alice' },
  { userId: 2, name: 'Bob' },
  { userId: 3, name: 'Charlie' }
];

const orders = [
  { orderId: 101, userId: 1, amount: 100 },
  { orderId: 102, userId: 1, amount: 200 },
  { orderId: 103, userId: 2, amount: 150 }
];
```

**Expected Output:**
```javascript
[
  {
    userId: 1,
    name: 'Alice',
    orders: [
      { orderId: 101, userId: 1, amount: 100 },
      { orderId: 102, userId: 1, amount: 200 }
    ]
  },
  {
    userId: 2,
    name: 'Bob',
    orders: [
      { orderId: 103, userId: 2, amount: 150 }
    ]
  },
  {
    userId: 3,
    name: 'Charlie',
    orders: []
  }
]
```

---

## Question 9: Paginate and Filter Search Results

**Difficulty:** Hard

Implement a function that takes an array of items, a search query, filter criteria, sort options, and pagination parameters. Return the paginated results with metadata.

**Function Signature:**
```javascript
function searchAndPaginate(items, options) {
  // Your implementation here
}
```

**Input:**
```javascript
const items = [
  { id: 1, name: 'Apple iPhone', category: 'Electronics', price: 999, inStock: true },
  { id: 2, name: 'Samsung Phone', category: 'Electronics', price: 799, inStock: false },
  { id: 3, name: 'Google Pixel', category: 'Electronics', price: 699, inStock: true },
  { id: 4, name: 'OnePlus Phone', category: 'Electronics', price: 599, inStock: true },
  // ... more items
];

const options = {
  query: 'phone',              // search in name (case-insensitive)
  filters: {                   // exact match filters
    category: 'Electronics',
    inStock: true
  },
  sortBy: 'price',            // field to sort by
  sortOrder: 'asc',           // 'asc' or 'desc'
  page: 1,                    // current page (1-indexed)
  pageSize: 2                 // items per page
};
```

**Expected Output:**
```javascript
{
  data: [
    { id: 4, name: 'OnePlus Phone', category: 'Electronics', price: 599, inStock: true },
    { id: 3, name: 'Google Pixel', category: 'Electronics', price: 699, inStock: true }
  ],
  page: 1,
  pageSize: 2,
  total: 3,        // total matching items
  totalPages: 2    // total pages
}
```

---

## Question 10: Process and Normalize E-commerce Order Data

**Difficulty:** Hard

You're receiving orders from multiple e-commerce platforms with different formats. Normalize them into a consistent format, calculate totals, apply discounts, and group by customer.

**Input:**
```javascript
const amazonOrders = [
  {
    order_id: 'AMZ123',
    customer_email: 'alice@example.com',
    items: [
      { product_name: 'Laptop', unit_price: 1000, qty: 1 }
    ],
    discount_percent: 10
  },
  {
    order_id: 'AMZ124',
    customer_email: 'bob@example.com',
    items: [
      { product_name: 'Mouse', unit_price: 50, qty: 2 }
    ],
    discount_percent: 0
  }
];

const shopifyOrders = [
  {
    id: 'SHOP456',
    customer: { email: 'alice@example.com' },
    line_items: [
      { title: 'Phone', price: 500, quantity: 2 }
    ],
    discount_code: { amount: 50 }  // flat discount in dollars
  },
  {
    id: 'SHOP457',
    customer: { email: 'charlie@example.com' },
    line_items: [
      { title: 'Keyboard', price: 100, quantity: 1 }
    ],
    discount_code: { amount: 0 }
  }
];
```

**Expected Output Format:**

First, normalize each order to:
```javascript
{
  orderId: string,
  customerEmail: string,
  items: [{ name: string, price: number, quantity: number }],
  subtotal: number,
  discount: number,
  total: number
}
```

Then group all orders by `customerEmail`:
```javascript
{
  'alice@example.com': [
    {
      orderId: 'AMZ123',
      customerEmail: 'alice@example.com',
      items: [{ name: 'Laptop', price: 1000, quantity: 1 }],
      subtotal: 1000,
      discount: 100,
      total: 900
    },
    {
      orderId: 'SHOP456',
      customerEmail: 'alice@example.com',
      items: [{ name: 'Phone', price: 500, quantity: 2 }],
      subtotal: 1000,
      discount: 50,
      total: 950
    }
  ],
  'bob@example.com': [ /* ... */ ],
  'charlie@example.com': [ /* ... */ ]
}
```

---

## Tips for Success

These questions test practical skills you'll use daily as a backend developer:

- Data transformation and mapping
- Aggregation and grouping
- Filtering and searching
- Sorting with multiple criteria
- Merging and joining datasets
- Handling real-world data formats

Focus on writing clean, readable code with proper error handling. Consider edge cases like empty arrays, missing properties, and invalid data. Good luck with your interview preparation!