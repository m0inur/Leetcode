var searchInsert = function(nums, target) {
    if (nums[nums.length - 1] < target) {
        return nums.length;
    }

    for (var i = 0; i < nums.length; i++) {
        if (target <= nums[i]) {
            return i;
        } 
    }
};