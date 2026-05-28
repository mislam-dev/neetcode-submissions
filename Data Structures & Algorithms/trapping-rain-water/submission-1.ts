class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height: number[]): number {
        const n = height.length;
        const prefixMax = [];
        const suffixMax = [];

        // calcutate prefix max
        prefixMax[0] = height[0];
        for (let i = 1; i < n; i++) {
            prefixMax[i] = Math.max(prefixMax[i - 1], height[i]);
        }
        // calculate suffix max
        suffixMax[n - 1] = height[n - 1];
        for (let i = n - 2; i >= 0; i--) {
            suffixMax[i] = Math.max(suffixMax[i + 1], height[i]);
        }
        // find sum
        let sum = 0;
        for (let i = 0; i < n; i++) {
            if (height[i] < prefixMax[i] && height[i] < suffixMax[i]) {
                sum += Math.min(prefixMax[i], suffixMax[i]) - height[i];
            }
        }
        return sum;
    }
}
