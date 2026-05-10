class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (!nums.length) return 0;
    nums = nums.sort((a, b) => a - b);
    let maxCount = 1;
    let count = 1;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) continue;
      if (nums[i] + 1 === nums[i + 1]) {
        count++;
        continue;
      }
      if (count > maxCount) maxCount = count;
      count = 1;
    }

    return count > maxCount ? count : maxCount;
  }
}