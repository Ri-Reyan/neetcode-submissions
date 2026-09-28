class Solution {
  /**
   * @param {string[]} strs
   * @return {string[][]}
   */
  groupAnagrams(strs) {
    let grp = new Object();

    for (let i = 0; i < strs.length; i++) {
      let key = strs[i].split("").sort().join("");

      if (!grp[key]) {
        grp[key] = [];
      }

      grp[key].push(strs[i]);
    }

    return Object.values(grp);
  }
}