/**
 * @param {number[]} nums
 * @return {number}
 */
let maximumDifference = function(nums) {
    let maxDiff = -1;

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if(i === j || i > j) continue;

            if(nums[i] < nums[j]) {
                maxDiff = Math.max(maxDiff, nums[j] - nums[i]);
            }
        }
    }

    return maxDiff;
};