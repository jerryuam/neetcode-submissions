class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        //console.log(nums);
        //const totalNums= nums.length;
        //console.log(totalNums);
        const uniqueNums= new Set(nums);
        //console.log(uniqueNums);
        //console.log(uniqueNums.size);
        if(uniqueNums.size < nums.length){
            return true;
        }else{
            return false;
        }
    }
}
