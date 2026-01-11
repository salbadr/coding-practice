/**
Given:

local = [{id:1,email:"a"}, {id:2,email:"b"}]
remote = [{id:1,lastLogin:100}, {id:3,lastLogin:200}]


Merge by id and keep all ids appearing in either array.

Missing fields should be null.
 */


(() => {
    const local = [{ id: 1, email: "a" }, { id: 2, email: "b" }];
    const remote = [{ id: 1, lastLogin: 100 }, { id: 3, lastLogin: 200 }];

    function merger(local: { id: number, email: string }[], remote: { id: number, lastLogin: number }[]) {
        const localProps = Object.keys(local[0]);
        const remoteProps = Object.keys(remote[0]);

        fillNull(remote, localProps)
        fillNull(local, remoteProps)


        function fillNull(source, props) {
            for (const prop of props) {
                source.forEach(item => {
                    if (item[prop] === undefined) {
                        item[prop] = null
                    }
                })
            }
        }

        const result = []
        for (const localItem of local) {
            const foundRemoteItem = remote.find(remoteItem => remoteItem.id === localItem.id);
            let mergedSources = {}
            if (foundRemoteItem) {
                mergedSources = { ...localItem, ...foundRemoteItem };
                result.push(mergedSources);
            }
            else {
                result.push(localItem)
            }
        }

        for (const remoteItem of remote) {
            const foundRemoteItem = result.find(item => remoteItem.id === item.id);
            if (foundRemoteItem === undefined) {
                result.push(remoteItem);
            }

        }
        return result;

    }

    console.log(merger(local, remote));
})()

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