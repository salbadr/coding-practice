"use strict";
/**
 * Clean this username so it contains only A–Z and 0–9:

"  $abC 12 %%% "
 */
(() => {
    const username = "  $abC 12 %%% ";
    function cleanInput(data) {
        const iterator = data.matchAll(/[a-zA-Z0-9]/g);
        let current = iterator.next();
        let str = '';
        while (!current.done) {
            str = str + current.value;
            current = iterator.next();
        }
        return str;
    }
    console.log(cleanInput(username));
})();
/***
 * const username = "  $abC 12 %%% "

function cleanInput(data: string) {
    return data.replace(/[^a-zA-Z0-9]/g, '');
}

console.log(cleanInput(username)); // "abC12"
 */ 
