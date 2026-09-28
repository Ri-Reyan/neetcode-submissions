class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const frequency = new Map();

   
    for (const num of nums) {
      if (frequency.has(num)) {
        frequency.set(num, frequency.get(num) + 1);
      } else {
        frequency.set(num, 1);
      }
    }

    
    const entries = [...frequency.entries()];

    
    entries.sort((a, b) => b[1] - a[1]);

    
    return entries.slice(0, k).map(([num]) => num);
    }
}
