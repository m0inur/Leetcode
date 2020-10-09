var findDisappearedNumbers = function (nums) {
    var ans = [];

    for (var i = 1; i <= nums.length; i++) {
        if (!nums.includes(i)) {
            ans.push(i);
        }
    }

    return ans;
};