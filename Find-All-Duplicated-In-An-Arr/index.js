var findDuplicates = function (nums) {
    var ans = [];
    nums.sort((a, b) => a - b);
    for (let i = 0; i < nums.length; i++) {
        if (!ans.includes(nums[i])) {
            if (nums[i] == nums[i + 1]) {
                ans.push(nums[i]);
            }
        }
    }

    return ans;
};