/** 
 * Given an array of integers representing coordinates of obstacles
 * Assuming you are jumping from coordinate 0 to right. You can make jumps = the integer
 * Find min length of the jumps to avoid all obstacles
 * @param nums 
 */
export function avoidObstacles(nums: number[]) {

    let jumps = 0;
    nums.sort()
    const largestNumber = nums[nums.length - 1];

    for (let i = 1; i <= largestNumber; i += 1) {

        const avoidedObstacle = nums.every((num) => num % i !== 0)
        if (avoidedObstacle) {
            jumps = i;
        }

    }
    return jumps
}

