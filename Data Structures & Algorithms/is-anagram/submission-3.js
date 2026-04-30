class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArray = Array.from(s).sort();
        let tArray = Array.from(t).sort();
        if(sArray.toString() == tArray.toString()){
            return true;
        }else{
            return false;
        }
    }
}
