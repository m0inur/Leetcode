var specialArray = function (nums) {
    var count = 0;

    for (let x = 0; x <= Math.max(...nums); x++) {
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] >= x) {
                count++;
            }
        }

        if (x == count) {
            return x;
        }
        count = 0;
    }

    return -1;
};