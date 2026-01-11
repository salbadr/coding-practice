/**
Q9:
Merge:

users = [{id:1,name:"Tom"}]
scores = [{id:1,score:50}]


Into:

[{id:1,name:"Tom",score:50}]
 */
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
(function () {
    var users = [{ id: 1, name: "Tom" }];
    var scores = [{ id: 1, score: 50 }];
    function merger(users, scores) {
        var result = [];
        var _loop_1 = function (user) {
            var foundScore = scores.find(function (score) { return score.id === user.id; });
            var mergedSources = {};
            if (foundScore) {
                mergedSources = __assign(__assign({}, user), foundScore);
                result.push(mergedSources);
            }
        };
        for (var _i = 0, users_1 = users; _i < users_1.length; _i++) {
            var user = users_1[_i];
            _loop_1(user);
        }
        return result;
    }
    console.log(merger(users, scores));
})();
/***
 *
 *
 * Issues with Your Code

Performance: O(n × m) - you're calling find() for each user, which searches through all scores
Unnecessary variable: mergedSources is declared outside the if block but only used inside
Missing users: If a user has no score, they're excluded from results (might be intentional?)
TypeScript: Return type not specified, result typed as any[]

 *
 * const users = [{ id: 1, name: "Tom" }]
const scores = [{ id: 1, score: 50 }];

type User = { id: number, name: string };
type Score = { id: number, score: number };
type MergedUser = User & Score;

function merger(users: User[], scores: Score[]): MergedUser[] {
    // Create a Map for O(1) lookups
    const scoreMap = new Map(scores.map(s => [s.id, s.score]));
    
    return users
        .map(user => {
            const score = scoreMap.get(user.id);
            return score !== undefined
                ? { ...user, score }
                : null;
        })
        .filter((item): item is MergedUser => item !== null);
}
 *
 */ 
