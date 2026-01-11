"use strict";
/**
 *  Given an array of actions:
["jump", "shoot", "jump", "run", "shoot", "shoot"]

Return the most frequent action.

 */
const actions = ["jump", "shoot", "jump", "run", "shoot", "shoot"];
function frequency(data) {
    const frequencyMap = data.reduce((acc, item) => {
        if (!acc[item]) {
            acc[item] = 1;
        }
        else {
            acc[item] = acc[item] + 1;
        }
        return acc;
    }, {});
    let maxCount = 0;
    let maxAction = '';
    for (const [action, value] of Object.entries(frequencyMap)) {
        if (value > maxCount) {
            maxCount = value;
            maxAction = action;
        }
    }
    return maxAction;
}
console.log(frequency(actions));
