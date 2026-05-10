class Solution {
  /**
   * @param {number[]} nums
   * @return {number}
   */
  longestConsecutive(nums) {
    if (!nums.length) return 0;
    nums = nums.sort((a, b) => a - b);
    const result = [];
    let count = 1;
    for (let i = 0; i < nums.length - 1; i++) {
      if (nums[i] === nums[i + 1]) continue;
      if (nums[i] + 1 === nums[i + 1]) {
        count++;
        continue;
      }
      result.push(count);
      count = 1;
    }
    result.push(count);
    return Math.max(...result);
  }
}