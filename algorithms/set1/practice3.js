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
var data = [
    { id: 1, name: "Tom" },
    { id: 2, name: "Ana" }
];
function transform(data) {
    var result = {};
    for (var _i = 0, data_1 = data; _i < data_1.length; _i++) {
        var item = data_1[_i];
        result[item.id] = item.name;
    }
    return result;
}
var answer = transform(data);
console.log(answer);
