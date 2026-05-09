class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums: number[]) {
        const result = []
        for(let i =0;i<nums.length;i++){
            let d = 1;
            for(let j=0;j<nums.length;j++){
                if(i==j) continue;
                d = d * nums[j]
            }
            result.push(d)
        }
        return result;
    }
}
