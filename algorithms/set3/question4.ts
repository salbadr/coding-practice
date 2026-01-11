export function sortByLength(strs: string[]): string[] {
    //  write code here.
    return strs.sort((a, b) => a.length - b.length)
}
