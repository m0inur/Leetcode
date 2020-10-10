var majorityElement = function (nums) {
    var occur = 0;
    nums.sort((a, b) => a - b);
    var target = Math.floor(nums.length / 2);

    for (var i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            occur++;
        } else {
            occur++;
            if (occur > target) {
                if (nums.length > 1) {
                    return nums[i - 1];
                } else {
                    return nums[0];
                }
            }
        }
    }
};