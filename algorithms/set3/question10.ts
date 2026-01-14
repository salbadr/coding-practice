export function insertDashes(arr: string): string {
    // write code here
    let strs = arr.split(' ')

    /**
     * Alternative solution
     * 
     *  const dashedWords = words.map((word) => {
       const chars = word.split('');
       
       return chars.join('-'); 
    });
     */

    return strs.map((str) => {
        let s = ''
        for (let i = 0; i < str.length - 1; i++) {
            s = s + str.at(i) + '-'
        }
        s = s + str.at(str.length - 1)
        return s;
    }).join(' ')

}
