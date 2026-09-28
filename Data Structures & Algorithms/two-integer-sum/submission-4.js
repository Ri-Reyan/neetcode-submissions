class Solution {
  /**
   * @param {number[]} nums
   * @param {number} target
   * @return {number[]}
   */
  twoSum(nums, target) {
  let seen = new Map();

  for (const [index, elm] of nums.entries()) {
    if (seen.has(target - elm)) {
      return [seen.get(target - elm), index];
    } else {
      seen.set(elm, index);
    }
  }
}
  }