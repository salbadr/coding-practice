"use strict";
/**
 *  Given:
[
  { name: "A", score: 50, age: 21 },
  { name: "B", score: 50, age: 19 },
  { name: "C", score: 40, age: 22 }
]

Sort by score desc, then age asc.
 */
(() => {
    const employees = [
        { name: "A", score: 50, age: 21 },
        { name: "B", score: 50, age: 19 },
        { name: "C", score: 40, age: 22 }
    ];
    function sortEmployees(data) {
        const sortByScoreDesc = data.sort((a, b) => {
            if (a.score > b.score) {
                return -1;
            }
            else if (a.score < b.score) {
                return 1;
            }
            else {
                return 0;
            }
        });
        return sortByScoreDesc.sort((a, b) => {
            if (a.age < b.age) {
                return -1;
            }
            else if (a.age > b.age) {
                return 1;
            }
            else {
                return 0;
            }
        });
    }
    console.log(sortEmployees(employees));
})();
