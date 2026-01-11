/**
 * Sort objects by score descending:
 *
 * [{name:"A",score:10},{name:"B",score:50}]
 */
var employees = [{ name: "A", score: 10 }, { name: "B", score: 50 }];
(function () {
    function sortDesc(data) {
        return data.sort(function (a, b) {
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
    }
    console.log(sortDesc(employees));
})();
