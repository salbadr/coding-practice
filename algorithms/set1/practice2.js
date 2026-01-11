"use strict";
/**
 * You are given a function:

async function fetchScore(id: number): Promise<number> {
   // returns a score after random delay
}

Task:

Write:
async function fetchAllScores(ids: number[]): Promise<number>;


That:

Fetches all scores in parallel
Returns the total
Retries each failed call up to 2 times
Never fails — if still failing, treat score as 0

Focus:

Promise.all
retry logic
clean async control
 */
const studentData = [
    { "id": 1, "name": "Alice", "group": "A", "score": 91 },
    { "id": 2, "name": "Bob", "group": "B", "score": 85 },
    { "id": 3, "name": "Cara", "group": "A", "score": 77 },
    { "id": 4, "name": "Dan", "group": "B", "score": 93 }
];
// returns a score after random delay
async function fetchScore(id) {
    // generate random number from 100 to 1000
    const delay = Math.floor(Math.random() * 1000);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const student = studentData.find(d => d.id == id);
            if (student) {
                resolve(student.score);
            }
            else {
                reject(id);
            }
        }, delay);
    });
}
async function fetchAllScores(ids) {
    const results = await Promise.allSettled(ids.map(id => fetchScore(id)));
    let total = 0;
    for (const element of results) {
        let score = 0;
        if (element.status === 'rejected') {
            score = await retry(element.reason);
        }
        else if (element.status === 'fulfilled') {
            score = element.value;
        }
        total = total + score;
    }
    ;
    return total;
}
async function retry(id, retries = 0) {
    let score = 0;
    try {
        if (retries >= 2) {
            return score;
        }
        score = await fetchScore(id);
    }
    catch (err) {
        retries++;
        score = await retry(err, retries);
    }
    return score;
}
(async function main() {
    // Example with no failures
    const success = await fetchAllScores([1, 2, 3, 4]);
    console.log('The total with successes is', success);
    // Example with failures
    const failures = await fetchAllScores([1, 9, 8, 4]);
    console.log('The total with failures is', failures);
})();
/***
 * Move retry inside the Promise
 * async function fetchWithRetry(id: number, retries = 2): Promise<number> {
    try {
        return await fetchScore(id);
    } catch {
        if (retries === 0) return 0;
        return fetchWithRetry(id, retries - 1);
    }
}

async function fetchAllScores(ids: number[]): Promise<number> {
    const results = await Promise.all(ids.map(id => fetchWithRetry(id)));

    return results.reduce((sum, score) => sum + score, 0);
}

 */ 
