class Solution {
    /**
     * @param {number[]} nums
     * @return {number[][]}
     */
    threeSum(nums) {
        const sortedNums = nums.sort((a, b) => a - b);
        const n = nums.length;
        const results = [];
        for (let i = 0; i < n; i++) {
            if (sortedNums[i] === sortedNums[i - 1]) continue;
            let j = i + 1,
                k = n - 1;
            while (j < k) {
                let sum = sortedNums[i] + sortedNums[j] + sortedNums[k];
                if (sum > 0) {
                    k--;
                } else if (sum < 0) {
                    j++;
                } else {
                    results.push([sortedNums[i], sortedNums[j], sortedNums[k]]);
                    j++;
                    k--;
                    while (j < k && sortedNums[j] === sortedNums[j - 1]) j++;
                }
            }
        }
        return results;
    }
}
