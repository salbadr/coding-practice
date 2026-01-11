/**
 * Sort objects by score descending:
 * 
 * [{name:"A",score:10},{name:"B",score:50}]
 */

type Employee = {
    name: string;
    score: number;
}
const employees = [{ name: "A", score: 10 }, { name: "B", score: 50 }];


(() => {
    function sortDesc(data: Employee[]) {
        return data.sort((a, b) => {
            if (a.score > b.score) {
                return -1;
            }
            else if (a.score < b.score) {
                return 1;
            }
            else {
                return 0
            }

        })
    }

    console.log(sortDesc(employees));
})()