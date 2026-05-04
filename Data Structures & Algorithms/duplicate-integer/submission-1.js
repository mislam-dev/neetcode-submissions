class Solution {
    /**
     * @param {number[]} nums
     * @return {boolean}
     */
    hasDuplicate(nums) {
        const n = nums.length
        const map = new Map()
        for(let i=0;i<n;i++){
            if(map.has(nums[i])) {
                return true
            }
            map.set(nums[i], 1)
        }
        return false;
    }
}
