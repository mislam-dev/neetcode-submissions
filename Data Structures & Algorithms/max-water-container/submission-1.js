class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;
        let i = 0,
            j = heights.length - 1;
        while (i < j) {
            let width = j - i;
            let height = Math.min(heights[i], heights[j]);

            maxArea = Math.max(maxArea, width * height);

            if (heights[i] < heights[j]) {
                i++;
            } else {
                j--;
            }
        }

        return maxArea;
    }
}
