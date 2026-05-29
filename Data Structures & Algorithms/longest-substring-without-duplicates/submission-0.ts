class Solution {
    /**
     * @param {string} s
     * @return {number}
     */
    lengthOfLongestSubstring(s: string): number {
        let max = 0;
        const store = new Map<string, number>();

        let l = 0,
            r = 0;
        while (r < s.length) {
            const v = store.get(s[r]);
            if (v != undefined && v >= l) l = v + 1;

            max = Math.max(max, r - l + 1);
            store.set(s[r], r);
            r++;
        }
        return max;
    }
}
