class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    
    groupAnagrams(strs) {
        if (!strs || strs.lenght === 0) {
            return []
        }
        const map = new Map()

        strs.forEach(str => {
            const s = str.split('').sort().join('')
            if(map.has(s)) {
                map.set(s , [...map.get(s), str])
            }else {
                map.set(s , [str])
            }
        })
        return Array.from(map.values())
    }
}
