class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices: number[]): number {
        const n = prices.length;

        const suffixMax: number[] = [];
        suffixMax[n - 1] = prices[n - 1];

        for (let i = n - 2; i >= 0; i--) {
            suffixMax[i] = Math.max(suffixMax[i + 1], prices[i]);
        }
        let result = 0;
        for (let i = 0; i < n; i++) {
            let profit = suffixMax[i] - prices[i];
            result = Math.max(profit, result);
        }
        return result;
    }
}
