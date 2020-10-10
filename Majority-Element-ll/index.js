var majorityElement = function (nums) {
    nums.sort((a, b) => a - b);
    var ans = [];
    var occur = 0;
    var target = Math.floor(nums.length / 3);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            occur++;
        } else {
            occur++;
            if (occur > target) {
                if (occur == 1 || nums.length == 1) {
                    ans.push(nums[i]);
                } else {
                    ans.push(nums[i - 1]);
                }
            }
            occur = 0;
        }
    }

    return ans;
};