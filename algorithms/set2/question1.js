/**
 * Question 1: Filter and Transform User Data
Difficulty: Easy

You have an array of user objects. Filter out inactive users and transform the remaining users to only include their id, name, and email.

Input:

const users = [
  { id: 1, name: 'Alice', email: 'alice@example.com', active: true, role: 'admin' },
  { id: 2, name: 'Bob', email: 'bob@example.com', active: false, role: 'user' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', active: true, role: 'user' }
];
Expected Output:

[
  { id: 1, name: 'Alice', email: 'alice@example.com' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com' }
]
 */
(function () {
    var users = [
        { id: 1, name: 'Alice', email: 'alice@example.com', active: true, role: 'admin' },
        { id: 2, name: 'Bob', email: 'bob@example.com', active: false, role: 'user' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', active: true, role: 'user' }
    ];
    function getActiveUsers(userData) {
        return userData.filter(function (user) { return user.active; }).map(function (user) { return ({ id: user.id, name: user.name, email: user.email }); });
    }
    var result = getActiveUsers(users);
    console.log(result);
})();
