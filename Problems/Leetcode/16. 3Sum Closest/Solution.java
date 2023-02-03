




/*
  Given an integer array nums of length n and an integer target, find three integers in nums such that the sum is closest to target.

  Return the sum of the three integers.
  You may assume that each input would have exactly one solution.

  Example 1:
  Input: nums = [-1,2,1,-4], target = 1
  Output: 2
  Explanation: The sum that is closest to the target is 2. (-1 + 2 + 1 = 2).
  
  Example 2:
  Input: nums = [0,0,0], target = 1
  Output: 0
  Explanation: The sum that is closest to the target is 0. (0 + 0 + 0 = 0).

  Constraints:
  3 <= nums.length <= 500
  -1000 <= nums[i] <= 1000
  -104 <= target <= 104
  
  03-February-2023
*/

var threeSumClosest = function (nums, target) {
    // Sort the array
    nums.sort((a, b) => a - b);
    // Length of the array
    const n = nums.length;
    // Result
    let closest = nums[0] + nums[1] + nums[n - 1];
    // Loop for each element of the array
    for (let i = 0; i < n - 2; i++) {
        // Left and right pointers
        let j = i + 1;
        let k = n - 1;
        // Loop for all other pairs
        while (j < k) {
            let sum = nums[i] + nums[j] + nums[k];
            if (sum <= target) {
                j++;
            } else {
                k--;
            }
            if (Math.abs(closest - target) > Math.abs(sum - target)) {
                closest = sum;
            }
        }
    }
    return closest;
};
