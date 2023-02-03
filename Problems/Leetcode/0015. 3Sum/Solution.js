




/*
  Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.
  Notice that the solution set must not contain duplicate triplets.
  
  Example 1:
  Input: nums = [-1,0,1,2,-1,-4]
  Output: [[-1,-1,2],[-1,0,1]]
  
  Explanation: 
  nums[0] + nums[1] + nums[2] = (-1) + 0 + 1 = 0.
  nums[1] + nums[2] + nums[4] = 0 + 1 + (-1) = 0.
  nums[0] + nums[3] + nums[4] = (-1) + 2 + (-1) = 0.
  The distinct triplets are [-1,0,1] and [-1,-1,2].
  Notice that the order of the output and the order of the triplets does not matter.
  
  Example 2:
  Input: nums = [0,1,1]
  Output: []
  Explanation: The only possible triplet does not sum up to 0.
  
  Example 3:
  Input: nums = [0,0,0]
  Output: [[0,0,0]]
  Explanation: The only possible triplet sums up to 0.
  Constraints:
  3 <= nums.length <= 3000
  -105 <= nums[i] <= 105
  
  03-February-2023
*/


var threeSum = function (nums) {
  // Sort the array
  nums.sort((a, b) => a - b);
  // Length of the array
  const n = nums.length;
  // Resultant list
  const triplets = [];
  // Loop for each element of the array
  for (let i = 0; i < n; i++) {
    // Skip the duplicates
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue;
    }
    // Left and right pointers
    let j = i + 1;
    let k = n - 1;
    // Loop for all the remaining pairs
    while (j < k) {
      if (nums[i] + nums[j] + nums[k] === 0) {
        triplets.push([nums[i], nums[j], nums[k]]);
        j++;
        // Never let j refer to the same value twice (in an output) to avoid duplicates
        while (j < k && nums[j] === nums[j - 1]) {
          j++;
        }
      } else if (nums[i] + nums[j] + nums[k] < 0) {
        j++;
      } else {
        k--;
      }
    }
  }
  return triplets;
};
