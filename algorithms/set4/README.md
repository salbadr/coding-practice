# Promise Mastery: 20 Coding Challenges

A comprehensive set of JavaScript Promise challenges designed to prepare you for backend engineering interviews. These challenges cover everything from fundamentals to advanced patterns like request deduplication, caching, and concurrency control.

## 📋 Table of Contents

- [Challenge Overview](#challenge-overview)
- [Topics Covered](#topics-covered)
- [Challenges](#challenges)
- [Practice Tips](#practice-tips)

## Challenge Overview

These 20 challenges are ordered by increasing difficulty, starting with basic Promise concepts and building up to production-grade systems. Each challenge focuses on specific topics commonly tested in senior backend interviews.

**Difficulty Levels:**
- ⭐☆☆☆☆ - Beginner
- ⭐⭐☆☆☆ - Easy
- ⭐⭐⭐☆☆ - Intermediate
- ⭐⭐⭐⭐☆ - Advanced
- ⭐⭐⭐⭐⭐ - Expert

## Topics Covered

1. Promise Fundamentals
2. Promise Combinators
3. Promise Identity & Sharing
4. In-Flight Request Deduplication
5. Shared State Across Async Calls
6. Race Conditions
7. Error Handling Patterns
8. Cleanup & Lifecycle Management
9. Time-Based Logic
10. Concurrency Control
11. Cancellation & Abort Patterns
12. Async Iteration & Streams
13. Event Loop & Microtasks
14. Idempotency & Side Effects
15. Real-World Promise Patterns

## Challenges

### Challenge 1: Basic Promise Creation
**Topics:** Promise Fundamentals  
**Difficulty:** ⭐☆☆☆☆

Implement a function `delay(ms)` that returns a Promise that resolves after `ms` milliseconds.

```javascript
// Usage:
delay(1000).then(() => console.log('Done!'));
```

**Skills tested:** Creating Promises, resolve

---

### Challenge 2: Promise Chaining with Transformation
**Topics:** Promise Fundamentals, Chaining  
**Difficulty:** ⭐☆☆☆☆

Implement a function `fetchUserAge(userId)` that:
1. Fetches user data (simulate with a Promise)
2. Extracts the birth year
3. Calculates and returns the current age

Chain the operations properly.

```javascript
// Example implementation structure:
async function fetchUserAge(userId) {
  // Your code here
}

// Usage:
fetchUserAge(123).then(age => console.log(age));
```

**Skills tested:** Promise chaining, returning values vs returning Promises

---

### Challenge 3: Error Propagation
**Topics:** Error Handling, Chaining  
**Difficulty:** ⭐⭐☆☆☆

Implement `safeDivide(a, b)` that returns a Promise. It should reject if `b` is 0, otherwise resolve with `a/b`. Then create a chain that catches the error and returns a default value of 0.

```javascript
function safeDivide(a, b) {
  // Your code here
}

// Usage:
safeDivide(10, 2).then(result => console.log(result)); // 5
safeDivide(10, 0).catch(err => console.log('Error:', err)).then(() => 0);
```

**Skills tested:** reject, catch, error propagation in chains

---

### Challenge 4: Promise.all for Parallel Requests
**Topics:** Promise Combinators  
**Difficulty:** ⭐⭐☆☆☆

Implement `fetchAllUsers(userIds)` that takes an array of user IDs and fetches all users in parallel, returning an array of user objects. Handle the case where any fetch fails.

```javascript
async function fetchAllUsers(userIds) {
  // Your code here
}

// Usage:
fetchAllUsers([1, 2, 3]).then(users => console.log(users));
```

**Skills tested:** Promise.all, failure behavior, error handling

---

### Challenge 5: Choosing the Right Combinator
**Topics:** Promise Combinators  
**Difficulty:** ⭐⭐☆☆☆

You have 3 data sources (APIs) with different reliability. Implement `fetchFromFastestSource(sources)` that tries all sources simultaneously and returns the first successful result. If all fail, reject with all errors.

```javascript
async function fetchFromFastestSource(sources) {
  // Your code here
  // sources is an array of async functions: [fetchFromAPI1, fetchFromAPI2, fetchFromAPI3]
}

// Usage:
const sources = [
  async () => fetch('https://api1.com/data'),
  async () => fetch('https://api2.com/data'),
  async () => fetch('https://api3.com/data')
];
fetchFromFastestSource(sources).then(data => console.log(data));
```

**Hint:** Choose between `Promise.race`, `Promise.any`, etc.

**Skills tested:** Promise.race, Promise.any, differences in failure behavior and short-circuiting

---

### Challenge 6: Promise Memoization (Simple)
**Topics:** Promise Identity & Sharing  
**Difficulty:** ⭐⭐⭐☆☆

Implement `memoize(fn)` that caches the result of an async function. If called with the same argument, it should return the cached Promise (not re-execute the function).

```javascript
function memoize(fn) {
  // Your code here
}

const expensiveOp = memoize(async (x) => {
  await delay(1000);
  return x * 2;
});

// Both should share the same Promise
expensiveOp(5);
expensiveOp(5);
```

**Skills tested:** Promise identity, Promise memoization, storing Promises in Maps

---

### Challenge 7: In-Flight Request Deduplication
**Topics:** In-Flight Deduplication, Promise Sharing  
**Difficulty:** ⭐⭐⭐☆☆

Implement `dedupeRequests(fn)` that ensures if the same request is made multiple times before the first completes, all callers receive the same Promise.

```javascript
function dedupeRequests(fn) {
  // Your code here
}

const fetchUser = dedupeRequests(async (id) => {
  return await api.getUser(id);
});

// These 3 calls should result in only 1 actual API call
fetchUser(1);
fetchUser(1);
fetchUser(1);
```

**Skills tested:** Coalescing concurrent requests, key-based deduplication, storing Promises in Maps

---

### Challenge 8: Promise Cleanup on Completion
**Topics:** Cleanup & Lifecycle, In-Flight Deduplication  
**Difficulty:** ⭐⭐⭐☆☆

Enhance your Challenge 7 solution to clean up the cache entry after the Promise settles (both success and failure cases).

```javascript
function dedupeRequests(fn) {
  // Your enhanced code here with cleanup
}

// The cache should be empty after the Promise settles
```

**Skills tested:** finally usage, cleanup on error vs success, memory leak prevention

---

### Challenge 9: Race Condition Detection
**Topics:** Race Conditions, Shared State  
**Difficulty:** ⭐⭐⭐☆☆

Given this buggy code, identify the race condition and fix it:

```javascript
let counter = 0;

async function incrementCounter() {
  const current = counter;
  await delay(100); // simulate async work
  counter = current + 1;
}

// Called twice in parallel - what's the bug?
Promise.all([incrementCounter(), incrementCounter()]);

// Expected: counter = 2
// Actual: counter = 1 (race condition!)
```

**Question:** Why does this happen? How would you fix it?

**Skills tested:** Time-of-check vs time-of-use, interleaving async calls, ensuring consistency across awaits

---

### Challenge 10: Timeout Wrapper
**Topics:** Time-Based Logic, Promise.race  
**Difficulty:** ⭐⭐⭐☆☆

Implement `withTimeout(promise, ms)` that rejects if the promise doesn't resolve within `ms` milliseconds.

```javascript
function withTimeout(promise, ms) {
  // Your code here
}

// Usage:
const result = await withTimeout(fetchUser(1), 3000);
// Throws if fetchUser takes > 3 seconds
```

**Skills tested:** Promise.race with timers, timeout handling

---

### Challenge 11: Cache with TTL (Time-To-Live)
**Topics:** Time-Based Logic, Caching, Cleanup  
**Difficulty:** ⭐⭐⭐⭐☆

Implement a cache that:
- Stores async function results
- Expires entries after a TTL
- Deduplicates in-flight requests
- Cleans up on error (don't cache failures)

```javascript
class TTLCache {
  constructor(ttl) {
    // Your code here
  }

  wrap(fn) {
    // Your code here
  }
}

// Usage:
const cache = new TTLCache(5000); // 5 second TTL
const cachedFetch = cache.wrap(fetchUser);
```

**Skills tested:** TTL implementation, expiration policies, preventing poisoned caches, resource cleanup

---

### Challenge 12: Error Handling - Preventing Poisoned Cache
**Topics:** Error Handling, Caching  
**Difficulty:** ⭐⭐⭐⭐☆

Your Challenge 11 caches errors too. Fix it so that:
- Failed requests don't get cached
- In-flight failed requests are cleaned up
- Subsequent calls retry instead of returning cached errors

```javascript
class TTLCache {
  // Enhanced implementation
}

// Test:
const cachedFetch = cache.wrap(unreliableAPI);
await cachedFetch(1); // fails
await cachedFetch(1); // should retry, not return cached error
```

**Skills tested:** Errors in async functions, preventing poisoned caches, cleanup on failure

---

### Challenge 13: Promise.allSettled with Retry
**Topics:** Promise Combinators, Error Handling, Time-Based Logic  
**Difficulty:** ⭐⭐⭐⭐☆

Implement `fetchAllWithRetry(tasks, maxRetries)` that:
- Executes all tasks in parallel
- Retries failed tasks up to `maxRetries` times
- Returns results in the same order
- Uses exponential backoff (1s, 2s, 4s...)

```javascript
async function fetchAllWithRetry(tasks, maxRetries) {
  // Your code here
}

// Usage:
const tasks = [
  async () => fetchUser(1),
  async () => fetchUser(2),
  async () => fetchUser(3)
];
const results = await fetchAllWithRetry(tasks, 3);
```

**Skills tested:** Promise.allSettled, retry logic, backoff strategies, partial failures

---

### Challenge 14: Concurrency Limiter
**Topics:** Concurrency Control  
**Difficulty:** ⭐⭐⭐⭐☆

Implement `limitConcurrency(tasks, limit)` that executes an array of async tasks with a maximum of `limit` running concurrently.

```javascript
async function limitConcurrency(tasks, limit) {
  // Your code here
}

// Usage:
const tasks = [task1, task2, task3, task4, task5];
await limitConcurrency(tasks, 2); // max 2 at a time

// Expected execution:
// Time 0: task1, task2 start
// Time 1: task1 finishes, task3 starts
// Time 2: task2 finishes, task4 starts
// etc.
```

**Skills tested:** Limiting parallelism, queues, worker pools

---

### Challenge 15: Request Cancellation
**Topics:** Cancellation & Abort Patterns  
**Difficulty:** ⭐⭐⭐⭐☆

Implement `makeCancelable(promise)` that returns an object with:
- `promise`: the wrapped promise
- `cancel()`: a method to cancel the operation

When canceled, the promise should reject with a cancellation error, and any ongoing work should be aborted if possible.

```javascript
function makeCancelable(promise) {
  // Your code here
}

// Usage:
const { promise, cancel } = makeCancelable(fetchUser(1));
setTimeout(() => cancel(), 1000);

try {
  await promise;
} catch (err) {
  console.log('Cancelled:', err.message);
}
```

**Note:** Promises themselves are not cancelable - you're creating a wrapper pattern.

**Skills tested:** AbortController, cancelable Promises (conceptually), handling stale requests

---

### Challenge 16: Debounced Async Function
**Topics:** Time-Based Logic, Concurrency Control  
**Difficulty:** ⭐⭐⭐⭐☆

Implement `debounce(fn, delay)` for async functions. It should:
- Wait for `delay` ms of inactivity before executing
- Cancel previous pending calls
- Return a Promise that resolves with the result

```javascript
function debounce(fn, delay) {
  // Your code here
}

// Usage:
const debouncedSearch = debounce(searchAPI, 300);

debouncedSearch('a');   // cancelled
debouncedSearch('ab');  // cancelled
debouncedSearch('abc'); // executes after 300ms of inactivity

const result = await debouncedSearch('abcd');
```

**Skills tested:** Debouncing vs throttling, cancellation patterns, time-based logic

---

### Challenge 17: Read-Through Cache with Background Refresh
**Topics:** Real-World Patterns, Time-Based Logic, Race Conditions  
**Difficulty:** ⭐⭐⭐⭐⭐

Implement a cache that:
- Returns cached value immediately if available
- Refreshes in the background if data is older than `refreshAfter` ms
- Ensures only one refresh happens at a time (no duplicate refreshes)
- Expires after `expireAfter` ms

```javascript
class ReadThroughCache {
  constructor(options) {
    // options: { refreshAfter, expireAfter }
    // Your code here
  }

  async get(key, fetchFn) {
    // Your code here
  }
}

// Usage:
const cache = new ReadThroughCache({
  refreshAfter: 5000,  // Refresh after 5s
  expireAfter: 10000   // Expire after 10s
});

const data = await cache.get('user:1', () => fetchUser(1));
// Returns cached data immediately, refreshes in background if stale
```

**Skills tested:** Read-through cache, background refresh, stale-while-revalidate pattern, race condition prevention

---

### Challenge 18: Event Loop & Microtask Ordering
**Topics:** Event Loop & Microtasks  
**Difficulty:** ⭐⭐⭐⭐⭐

Predict and explain the output order, then implement a function that ensures correct ordering:

```javascript
console.log('1');
setTimeout(() => console.log('2'), 0);
Promise.resolve().then(() => console.log('3'));
console.log('4');

// Question 1: What's the order? Why?

// Question 2: Implement enforceOrder() to guarantee execution order
async function enforceOrder(callbacks) {
  // Your code here
  // Should execute callbacks in order, regardless of microtask/macrotask timing
}

// Usage:
enforceOrder([
  () => console.log('A'),
  () => Promise.resolve().then(() => console.log('B')),
  () => setTimeout(() => console.log('C'), 0),
  () => console.log('D')
]);
// Should always output: A, B, C, D
```

**Skills tested:** Event loop phases, microtask queue vs macrotask queue, Promise resolution timing

---

### Challenge 19: Idempotent Queue Processor
**Topics:** Idempotency, Concurrency Control, Error Handling  
**Difficulty:** ⭐⭐⭐⭐⭐

Implement a queue processor that:
- Processes tasks with exactly-once semantics
- Handles retries for failures
- Prevents duplicate processing (idempotency)
- Maintains order within a key
- Allows parallel processing across different keys

```javascript
class IdempotentQueue {
  constructor(options) {
    // options: { concurrency, maxRetries }
    // Your code here
  }

  add(key, task) {
    // Your code here
  }

  async start() {
    // Your code here
  }
}

// Usage:
const queue = new IdempotentQueue({
  concurrency: 3,
  maxRetries: 3
});

queue.add('user-1', task1);
queue.add('user-1', task2); // waits for task1 (same key)
queue.add('user-2', task3); // runs in parallel (different key)

await queue.start();
```

**Skills tested:** Exactly-once semantics, idempotency, preventing duplicate side effects, safe retries, concurrency control

---

### Challenge 20: Complete Fetch Cache System
**Topics:** All Topics Combined  
**Difficulty:** ⭐⭐⭐⭐⭐

Implement a production-grade fetch cache with:
- In-flight request deduplication
- TTL-based expiration
- Background refresh (stale-while-revalidate)
- Concurrency limiting
- Request timeout
- AbortController support
- Retry with exponential backoff
- Error handling (don't cache errors)
- Memory cleanup
- LRU eviction when cache is full

```javascript
class FetchCache {
  constructor(options) {
    // options: {
    //   ttl: 60000,
    //   refreshAfter: 30000,
    //   maxSize: 100,
    //   maxConcurrent: 5,
    //   timeout: 5000,
    //   maxRetries: 3
    // }
    // Your code here
  }

  async fetch(url, options = {}) {
    // Your code here
    // Should support options.signal for AbortController
  }

  clear() {
    // Your code here
  }

  delete(key) {
    // Your code here
  }
}

// Usage:
const cache = new FetchCache({
  ttl: 60000,
  refreshAfter: 30000,
  maxSize: 100,
  maxConcurrent: 5,
  timeout: 5000,
  maxRetries: 3
});

const abortController = new AbortController();
const data = await cache.fetch('https://api.example.com/data', {
  signal: abortController.signal
});

// Later, if needed:
abortController.abort();
```

**Skills tested:** Everything from challenges 1-19 combined into a production-ready system

---

## Practice Tips

### 1. **Start from Challenge 1**
Work your way up sequentially. Each challenge builds on concepts from previous ones.

### 2. **Test Edge Cases**
For every solution, test:
- Concurrent calls (what if called twice before the first finishes?)
- Error scenarios (network failures, timeouts)
- Cleanup (memory leaks, dangling references)
- Race conditions (interleaved execution)

### 3. **Ask Critical Questions**
- "What if this is called twice before the first finishes?"
- "What happens on error?"
- "Is there proper cleanup?"
- "Could this cause a memory leak?"
- "Is this idempotent?"

### 4. **Implement Tests**
Write test cases for each challenge:
```javascript
// Example test structure
describe('Challenge 7: In-Flight Request Deduplication', () => {
  it('should deduplicate concurrent requests', async () => {
    // Your test here
  });

  it('should allow new requests after completion', async () => {
    // Your test here
  });

  it('should handle errors correctly', async () => {
    // Your test here
  });
});
```

### 5. **Time Yourself**
- Beginner (⭐): 10-15 minutes
- Easy (⭐⭐): 15-20 minutes
- Intermediate (⭐⭐⭐): 20-30 minutes
- Advanced (⭐⭐⭐⭐): 30-45 minutes
- Expert (⭐⭐⭐⭐⭐): 45-60 minutes

### 6. **Review and Refactor**
After solving each challenge:
- Can it be simplified?
- Are there edge cases you missed?
- Is the code readable?
- Would you understand this in 6 months?

### 7. **Understand, Don't Memorize**
Focus on understanding the underlying patterns:
- Why is Promise deduplication important?
- When would you use Promise.race vs Promise.any?
- What are the tradeoffs of different caching strategies?

### 8. **Common Pitfalls to Avoid**
- Forgetting to clean up cache entries
- Not handling errors in Promise chains
- Creating new Promises instead of reusing them
- Ignoring race conditions in async code
- Caching rejected Promises (poisoned cache)
- Not considering concurrent execution

## Additional Resources

### Documentation
- [MDN Promise Documentation](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
- [MDN Async/Await](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)
- [AbortController](https://developer.mozilla.org/en-US/docs/Web/API/AbortController)

### Concepts to Review
- JavaScript Event Loop
- Microtasks vs Macrotasks
- Promise states and transitions
- Memory management in long-running applications
- Idempotency in distributed systems

## Interview Tips

1. **Communicate Your Thinking**
   - Explain your approach before coding
   - Discuss tradeoffs
   - Mention edge cases you're considering

2. **Start Simple**
   - Get a working solution first
   - Then optimize and handle edge cases

3. **Discuss Real-World Applications**
   - Where would you use this pattern?
   - What are the production considerations?
   - How would you monitor this in production?

4. **Know When to Use What**
   - `Promise.all`: All must succeed
   - `Promise.race`: First to settle (success or failure)
   - `Promise.any`: First to succeed
   - `Promise.allSettled`: Wait for all, get all results

5. **Common Interview Questions**
   - "How would you handle rate limiting?"
   - "What if the same request is made 100 times simultaneously?"
   - "How would you prevent duplicate writes to a database?"
   - "Explain the difference between microtasks and macrotasks"

---

## Contributing

Feel free to:
- Add more challenges
- Suggest improvements
- Share your solutions
- Report issues or unclear descriptions

## License

MIT License - Feel free to use these challenges for learning and interview preparation.

---

**Good luck with your interview preparation!** 🚀

Remember: Understanding these patterns deeply is more valuable than memorizing solutions. Focus on the "why" behind each pattern, and you'll be well-prepared for any Promise-related interview question.