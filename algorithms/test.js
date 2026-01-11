const user1 = { id: 1, name: 'Alice', password: 'secret', email: 'a@b.com' };

// Remove password field
const { password, ...userWithoutPassword } = user1;

console.log(userWithoutPassword);

const users = { firstName: 'John', lastName: 'Doe' };
const uppercased = Object.fromEntries(
    Object.entries(users).map(([key, val]) => [key.toUpperCase(), val])
);

console.log(uppercased);

console.log(Object.entries( { id: 1, name: "Tom" }))