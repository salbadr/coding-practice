/**
 * 
 * Given an array of nums, remove each kth element
 */


export function extractEachKth(nums:number[], k: number) {

    return nums.filter((nums, index)=>(index+1)%k!==0);
    //  write code here.
}
