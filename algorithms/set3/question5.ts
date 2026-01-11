/**
 * The first six Fibonacci numbers, starting with 0 and 1, are 0, 1, 1, 2, 3, 5, 
 * 
 * Given a positive integer num, return the sum of all odd Fib numbers that are less than num
 * @param num 
 */
export function sumOddFibonacciNumbers(num: number) {
    //  write code here.

    return generateFibonacciNumbers(0, 1, 0)


    function generateFibonacciNumbers(current: number, next: number, sum: number) {
        if (current % 2 == 1) {
            sum += current

        }
        if (next <= num) {

            return generateFibonacciNumbers(next, current + next, sum)
        }

        return sum

    }


}
