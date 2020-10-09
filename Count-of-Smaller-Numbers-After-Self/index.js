var countSmaller = function(nums) {
    var ans = [];
    var count = 0;

    for (var i = 0; i < nums.length; i++) {
        for (let j = i; j < nums.length; j++) {
            if (nums[i] > nums[j]) {
                count++;
            }
        }
        
        ans.push(count);
        count = 0;
    }

    return ans;
};