class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        let solutions = new Map();

        for ( let i=0; i<=nums.length; i++){
            let complement = target - nums[i];
            if(solutions.has(complement)){
                return [solutions.get(complement), i];
            }else{
                solutions.set(nums[i], i);
            }
            console.log(solutions);
        }

        return [];
    }
}
