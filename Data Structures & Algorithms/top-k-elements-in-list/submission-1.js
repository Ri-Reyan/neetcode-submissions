class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
  const map = new Map();
  const reverseMap = new Map();

  const result = [];

  for (const num of nums) {
    const key = num;

    if (map.has(key)) {
      map.set(key, map.get(key) + 1);
    } else {
      map.set(key, 1);
    }
  }

  for (const [num, frequency] of map) {
    if (reverseMap.has(frequency)) {
      reverseMap.get(frequency).push(num);
    } else {
      reverseMap.set(frequency, [num]);
    }
  }

  const keys = [...reverseMap.keys()].sort((a, b) => b - a);

  // 4. Take top k elements
  for (const frequency of keys) {
    for (const num of reverseMap.get(frequency)) {
      result.push(num);

      if (result.length === k) {
        return result;
      }
    }
  }

  return result;
}
}
