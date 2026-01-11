/**
 * Q1:
 Given:
[
  { id: 1, name: "Tom" },
  { id: 2, name: "Ana" }
]

Convert it into:
{ "1": "Tom", "2": "Ana" }

 */

const data = [
  { id: 1, name: "Tom" },
  { id: 2, name: "Ana" }
]

function transform(data){
    const result = {};
    for (const item of data){
        result[item.id] = item.name;
    }

    return result;

}

const answer = transform(data);
console.log(answer)