class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        let sArray = Array.from(s).sort();
        let tArray = Array.from(t).sort();
        console.log(sArray);
        console.log(tArray);
        //console.log(sArray.sort());
        //console.log(tArray.sort());
        if(sArray.toString() == tArray.toString()){
            return true;
        }else{
            return false;
        }
    }
}
