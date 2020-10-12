var containsNearbyAlmostDuplicate = function (nums, k, t) {
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                if (Math.abs(nums[i] - nums[j]) <= t && Math.abs(i - j) <= k) {
                    return true;
                }
            }
        }
    }

    return false;
};