class Solution {
    /**
     * @param {string} s
     * @param {number} k
     * @return {number}
     */
    characterReplacement(s: string, k: number): number {
        let maxFreq = 0;
        let windowSize = 0;
        let left = 0;
        const freqMap = new Map<string, number>();
        for (let right = 0; right < s.length; right++) {
            freqMap.set(s[right], (freqMap.get(s[right]) || 0) + 1);

            maxFreq = Math.max(maxFreq, freqMap.get(s[right])!);

            windowSize = right - left + 1;
            if (windowSize - maxFreq > k) {
                freqMap.set(s[left], freqMap.get(s[left])! - 1);
                left++;
            }
            maxFreq = Math.max(maxFreq, freqMap.get(s[right])!);

            windowSize = right - left + 1;
        }
        return windowSize;
    }
}
