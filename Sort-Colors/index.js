/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var sortColors = function (nums) {
    return nums.sort((a, b) => a - b);
};

console.log(sortColors([3, 3, 2, 1, 2, 4]))