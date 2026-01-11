"use strict";
/**
 *  You get an array of purchase events:
[
  { id: 1, user: "A", amount: 30 },
  { id: 2, user: "B", amount: 10 },
  { id: 3, user: "A", amount: 20 }
]

Return total amount per user:
{ A: 50, B: 10 }

 */
const events = [
    { id: 1, user: "A", amount: 30 },
    { id: 2, user: "B", amount: 10 },
    { id: 3, user: "A", amount: 20 }
];
function total(data) {
    return data.reduce((acc, item) => {
        if (!acc[item.user]) {
            acc[item.user] = item.amount;
        }
        else {
            acc[item.user] = acc[item.user] + item.amount;
        }
        return acc;
    }, {});
}
const result = total(events);
console.log(result);
