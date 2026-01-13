/**
 * 
 * Find maximul adjacent distance
 */

export function arrayMaximalAdjacentDifference(nums: number[]) {
    //  write code here.
    const differences = [];

    for (let i = 1; i < nums.length; i = i + 2) {

        const current = nums[i];
        const prev = nums[i - 1];
        const next = nums[i + 1] ?? 0;

        differences.push(Math.abs(current - prev));
        differences.push(Math.abs(next - current));


    }

    return Math.max(...differences);
}
