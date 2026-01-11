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


(() => {

    type UserType = {
        id: number,
        name: string,
        email: string,
        active: boolean,
        role: 'admin' | 'user'
    }
    const users: UserType[] = [
        { id: 1, name: 'Alice', email: 'alice@example.com', active: true, role: 'admin' },
        { id: 2, name: 'Bob', email: 'bob@example.com', active: false, role: 'user' },
        { id: 3, name: 'Charlie', email: 'charlie@example.com', active: true, role: 'user' }
    ];

    function getActiveUsers(userData: UserType[]): Pick<UserType, 'id' | 'name' | 'email'>[] {

        return userData.filter((user)=>user.active).map((user)=>({id: user.id, name: user.name, email: user.email}))
    }

    const result = getActiveUsers(users)
    console.log(result);

})()