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
    type Employee = {
        name: string;
        score: number;
        age: number;
    }
    const employees: Employee[] = [
        { name: "A", score: 50, age: 21 },
        { name: "B", score: 50, age: 19 },
        { name: "C", score: 40, age: 22 }
    ];



    function sortEmployees(data: Employee[]) {
        const sortByScoreDesc = data.sort((a, b) => {
            if (a.score > b.score) {
                return -1;
            }
            else if (a.score < b.score) {
                return 1;
            }
            else {
                return 0
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
                return 0
            }

        });
    }

    console.log(sortEmployees(employees));
})()