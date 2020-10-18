var rob = function (nums) {
    var prevMax = 0;
    var prev = 0;
    var m = 0;

    for (var i = 0; i < nums.length; i++) {
        prev = m;
        m = Math.max(nums[i] + prevMax, m);
        prevMax = prev;
    }

    return m;
}