class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {
        if (!nums.length) return 0;
        let max = 0;
        const set = new Set(nums);
        for (let i = 0; i < nums.length; i++) {
            if (set.has(nums[i] - 1)) continue;
            let cur = nums[i],
                len = 1;
            while (set.has(cur + 1)) {
                cur++;
                len++;
            }
            if (len > max) max = len;
        }
        return max;
    }
}
