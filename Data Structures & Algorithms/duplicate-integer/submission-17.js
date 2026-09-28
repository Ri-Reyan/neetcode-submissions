class Solution {
  hasDuplicate(nums) {
    if (0 <= nums.length && nums.length <= 10**5) {
      nums.sort((a, b) => a - b);
      for (let i = 0; i < nums.length - 1; i++) {
        if ((-10)**9 <= nums[i] && nums[i] <= 10**9) {
          if(nums[i] === nums[i + 1]) {
            return true
          }
        }
      }
      return false
    }
  }
}
