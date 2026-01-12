/**
 * 
 * 
 * 
You have two arrays of customer records from different sources. Merge them and remove duplicates based on email, keeping the record with the most recent `updatedAt` timestamp.


const source1 = [
    { id: 1, email: 'alice@example.com', name: 'Alice', updatedAt: '2024-01-01' },
    { id: 2, email: 'bob@example.com', name: 'Bob', updatedAt: '2024-01-05' }
];

const source2 = [
    { id: 3, email: 'alice@example.com', name: 'Alice Smith', updatedAt: '2024-01-10' },
    { id: 4, email: 'charlie@example.com', name: 'Charlie', updatedAt: '2024-01-03' }
];
        
**/

type userRecords = {
    id: number,
    email: string,
    name: string,
    updatedAt: string
}

export function mergeAndDeDupe(source1: userRecords[], source2: userRecords[]): userRecords[] {

    const merged = [...source1, ...source2];

    return Array.from(new Map(merged.map((m) => [m.email, m])).values())

}