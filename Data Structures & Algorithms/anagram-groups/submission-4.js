class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    const map = new Map();

  for (const str of strs) {
    const key = str.split("").sort().join("");

    if (map.has(key)) {
      const arr = map.get(key);
      arr.push(str);
      map.set(key, arr);
    } else {
      const arr = [str];
      map.set(key, arr);
    }
  }

  return [...map.values()];
  }
}