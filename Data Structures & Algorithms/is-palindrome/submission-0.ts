class Solution {
    isAlphaNumeric(s: string): boolean {
        const c = s.charCodeAt(0);
        return (c >= 65 && c <= 90) || (c >= 97 && c <= 122) || (c >= 48 && c <= 57);
    }
    /**
     * @param {string} s
     * @return {boolean}
     */
    isPalindrome(s: string): boolean {
        if (!s) return true;
        s = s.toLowerCase();
        let i = 0,
            j = s.length - 1;
        while (i < j) {
            if (!this.isAlphaNumeric(s[i])) {
                i++;
                continue;
            }
            if (!this.isAlphaNumeric(s[j])) {
                j--;
                continue;
            }
            if (s[i] !== s[j]) {
                return false;
            }
            i++;
            j--;
        }
        return true;
    }
}
