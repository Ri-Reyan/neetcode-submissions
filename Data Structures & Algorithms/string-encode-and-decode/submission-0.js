class Solution {
  /**
   * @param {string[]} strs
   * @returns {string}
   */
  encode(strs) {
    return strs.map((str) => `${str.length}#${str}`).join("");
  }

  /**
   * @param {string} str
   * @returns {string[]}
   */
  decode(str) {
    const result = [];

    let i = 0;

    while (i < str.length) {
      // # পর্যন্ত length বের করা
      let j = i;

      while (str[j] !== "#") {
        j++;
      }

      const length = Number(str.slice(i, j));

      // # এর পর থেকে actual string শুরু
      const start = j + 1;

      // length অনুযায়ী string নেওয়া
      const word = str.slice(start, start + length);

      result.push(word);

      i = start + length;
    }

    return result;
  }
}