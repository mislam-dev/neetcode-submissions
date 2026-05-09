class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs: string[]): string {
    let finalStr = "";
    for (let str of strs) {
      finalStr += str.length + "#" + str;
    }
    return finalStr;
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str: string): string[] {
    if (!str) return [];
    const decodedStrings: string[] = [];
    let i = 0;
    while (i < str.length) {
      let sizeStr = "";
      while (str[i] != "#") {
        sizeStr += str[i];
        i++;
      }
      let word = "";
      const size = Number(sizeStr);
      i++;
      for (let j = i; j < i + size; j++) {
        word += str[j];
      }
      decodedStrings.push(word);
      i += size;
    }
    return decodedStrings;
  }
}