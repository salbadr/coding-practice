"use strict";
/**
 Parse this string:

"A:10,B:20,C:5"


Return:

{ A: 10, B: 20, C: 5 }
 */
(() => {
    const input = "A:10,B:20,C:5";
    function parser(data) {
        return data.split(',')
            .map(item => item.split(':'))
            .reduce((acc, item) => {
            acc[item[0]] = item[1];
            return acc;
        }, {});
    }
    console.log(parser(input));
})();
/**
 *
 * Issues

Values are strings, not numbers: { A: "10", B: "20", C: "5" } instead of { A: 10, B: 20, C: 5 }
TypeScript type safety: No type annotations, and acc[item[0]] assumes item has elements

 * function parser(data: string): Record<string, number> {
    return Object.fromEntries(
        data.split(',').map(item => {
            const [key, value] = item.split(':');
            return [key, Number(value)];
        })
    );
}
 */ 
