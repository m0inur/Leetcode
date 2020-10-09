var pivotIndex = function (nums) {
    var leftSum = 0;
    var rightSum = 0;

    for (var i = 1; i < nums.length; i++) {
        rightSum += nums[i];
    }

    for (var i = 0; i < nums.length; i++) {
        if (leftSum == rightSum) {
            return i;
        } else {
            leftSum += nums[i];
            rightSum -= nums[i + 1]
        }

    }

    return -1
};