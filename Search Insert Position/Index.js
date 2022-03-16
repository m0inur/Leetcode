/**
* @param {number[]} nums
* @param {number} target
* @return {number}
*/
let searchInsert = function(nums, target) {
// check for the edge cases -
// i == 0 and nums[i] > val
// i = end - 1 and nums[i] < val

if (nums[0] > target) {
return 0;
} else if (nums[nums.length - 1] < target) {
return nums.length;
}

return binarySearch(nums, target, 0, nums.length - 1)
};

let binarySearch = function (nums, val, start, end) {
// if we went out of the list
if(start > end) return end;

let mid = Math.floor((start + end) / 2);

// A number can only enter if
// nums[mid] == val or
// nums[mid] < val and nums[mid + 1] > val
if(nums[mid] === val) {
return mid;
} else if (nums[mid] < val && nums[mid + 1] > val) {
return mid + 1;
}

if(nums[mid] > val) {
return binarySearch(nums, val, start, mid - 1)
} else {
return binarySearch(nums, val, mid + 1, end)
}
}