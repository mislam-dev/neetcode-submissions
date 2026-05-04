class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        const map = new Map();

        for(let i=0;i<s.length;i++){
            let v = 1
            if(map.has(s[i])) {
                v += map.get(s[i])
            }
            map.set(s[i], v)
        }

        for(let i=0;i<t.length;i++){
            
            if(!map.has(t[i])){
                return false
            }
            const v = map.get(t[i]) 
            if(!v) return false
            map.set(t[i], v-1)
        }

        return true
    }
}
