var thirdMax = function (nums) {
    nums.sort((a, b) => b - a);

    for (var i = 0; i < nums.length - 1; i++) {
        if (nums[i] == nums[i + 1]) {
            nums.splice(i, 1);
            i--;
        }
    }

    if (nums.length >= 3) {
        return nums[2];
    } else {
        return nums[0]
    }
};