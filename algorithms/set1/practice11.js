/**
Given:

local = [{id:1,email:"a"}, {id:2,email:"b"}]
remote = [{id:1,lastLogin:100}, {id:3,lastLogin:200}]


Merge by id and keep all ids appearing in either array.

Missing fields should be null.
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
    var local = [{ id: 1, email: "a" }, { id: 2, email: "b" }];
    var remote = [{ id: 1, lastLogin: 100 }, { id: 3, lastLogin: 200 }];
    function merger(local, remote) {
        var localProps = Object.keys(local[0]);
        var remoteProps = Object.keys(remote[0]);
        fillNull(remote, localProps);
        fillNull(local, remoteProps);
        function fillNull(source, props) {
            var _loop_3 = function (prop) {
                source.forEach(function (item) {
                    if (item[prop] === undefined) {
                        item[prop] = null;
                    }
                });
            };
            for (var _i = 0, props_1 = props; _i < props_1.length; _i++) {
                var prop = props_1[_i];
                _loop_3(prop);
            }
        }
        var result = [];
        var _loop_1 = function (localItem) {
            var foundRemoteItem = remote.find(function (remoteItem) { return remoteItem.id === localItem.id; });
            var mergedSources = {};
            if (foundRemoteItem) {
                mergedSources = __assign(__assign({}, localItem), foundRemoteItem);
                result.push(mergedSources);
            }
            else {
                result.push(localItem);
            }
        };
        for (var _i = 0, local_1 = local; _i < local_1.length; _i++) {
            var localItem = local_1[_i];
            _loop_1(localItem);
        }
        var _loop_2 = function (remoteItem) {
            var foundRemoteItem = result.find(function (item) { return remoteItem.id === item.id; });
            if (foundRemoteItem === undefined) {
                result.push(remoteItem);
            }
        };
        for (var _a = 0, remote_1 = remote; _a < remote_1.length; _a++) {
            var remoteItem = remote_1[_a];
            _loop_2(remoteItem);
        }
        return result;
    }
    console.log(merger(local, remote));
})();
/**
 *
 * Issues with Your Code

Mutates original arrays - you're modifying local and remote directly
Assumes arrays aren't empty - Object.keys(local[0]) crashes if empty
O(n × m) performance - nested loops and find() calls
No TypeScript types - fillNull parameters are untyped
Complex logic - harder to understand and maintain
 *
 *
 * const local = [{ id: 1, email: "a" }, { id: 2, email: "b" }];
const remote = [{ id: 1, lastLogin: 100 }, { id: 3, lastLogin: 200 }];

type Local = { id: number, email: string };
type Remote = { id: number, lastLogin: number };
type Merged = { id: number, email: string | null, lastLogin: number | null };

function merger(local: Local[], remote: Remote[]): Merged[] {
    // Create maps for O(1) lookups
    const localMap = new Map(local.map(item => [item.id, item]));
    const remoteMap = new Map(remote.map(item => [item.id, item]));
    
    // Get all unique IDs
    const allIds = new Set([...localMap.keys(), ...remoteMap.keys()]);
    
    // Merge by ID
    return Array.from(allIds).map(id => ({
        id,
        email: localMap.get(id)?.email ?? null,
        lastLogin: remoteMap.get(id)?.lastLogin ?? null
    }));
}

console.log(merger(local, remote));
// [
//   { id: 1, email: "a", lastLogin: 100 },
//   { id: 2, email: "b", lastLogin: null },
//   { id: 3, email: null, lastLogin: 200 }
// ]
 *
 */ 
