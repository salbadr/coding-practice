export function chunkyMonkey<T>(values: T[], size: number): T[][] {
    //  write code here.
    const result: T[][] = []
    for (let start = 0; start < values.length; start += size) {

        result.push(values.slice(start, start + size))

    }

    console.log(result)

    return result
}