/**
 *  Given an array of actions:
["jump", "shoot", "jump", "run", "shoot", "shoot"]

Return the most frequent action.

 */
var actions = ["jump", "shoot", "jump", "run", "shoot", "shoot"];
function frequency(data) {
    var frequencyMap = data.reduce(function (acc, item) {
        if (!acc[item]) {
            acc[item] = 1;
        }
        else {
            acc[item] = acc[item] + 1;
        }
        return acc;
    }, {});
    var maxCount = 0;
    var maxAction = '';
    for (var _i = 0, _a = Object.entries(frequencyMap); _i < _a.length; _i++) {
        var _b = _a[_i], action = _b[0], value = _b[1];
        if (value > maxCount) {
            maxCount = value;
            maxAction = action;
        }
    }
    return maxAction;
}
console.log(frequency(actions));
