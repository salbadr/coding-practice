/**
 * Finds pairs of adjacent numbers that has the largest product
 * @param nums 
 */
export function adjacentElementsProduct(nums: number[]): number {
    let max = 0;
    for (let i = 0; i < nums.length-1; i++) {
        const current = nums[i];
        const next = nums[i + 1];
        const product = current * next;
        if(product> max){
            max = product;
        }
    }
    return max;
    //  write code here.
}

