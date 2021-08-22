/**
 * @param {number[]} nums
 * @return {number}
 */
let maxSubArray = function(nums) {
    let maxSub = nums[0];
    let currSum = 0;

    for (let i = 0; i < nums.length; i++) {
        if(currSum < 0) currSum = 0;
        currSum += nums[i];
        maxSub = Math.max(maxSub, currSum);
    }

    return maxSub;
};