var arrayPairSum = function (nums) {
    nums.sort((a, b) => a - b);
    var sum = 0;
    var n = Math.floor(nums.length / 2);

    while (n > 0) {
        sum += Math.min(nums[0], nums[1]);
        nums = nums.slice(2);
        n--;
    }

    return sum;
};