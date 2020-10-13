// Faster than 91.41%

var singleNumber = function (nums) {
    nums.sort((a, b) => a - b);
    var ans = [];

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            i++;
        } else {
            ans.push(nums[i]);
        }

        if (ans.length == 2) {
            return ans;
        }
    }
};