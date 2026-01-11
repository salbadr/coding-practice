/**
Q9:
Merge:

users = [{id:1,name:"Tom"}]
scores = [{id:1,score:50}]


Into:

[{id:1,name:"Tom",score:50}]
 */


(() => {
    const users = [{ id: 1, name: "Tom" }]
    const scores = [{ id: 1, score: 50 }];

    function merger(users: { id: number, name: string }[], scores: { id: number, score: number }[]) {
        const result = []
        for (const user of users) {
            const foundScore = scores.find(score => score.id === user.id);
            let mergedSources = {}
            if (foundScore) {
                mergedSources = { ...user, ...foundScore };
                result.push(mergedSources);
            }


        }
        return result;
    }

    console.log(merger(users, scores));
})()

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