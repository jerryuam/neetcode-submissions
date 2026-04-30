class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const uniqueNums= new Set(nums);
        if(uniqueNums.size < nums.length){
            return true;
        }else{
            return false;
        }
    }
}
