var kLengthApart = function (nums, k) {
    var dist = 0;

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            if (i != 0) {
                if (dist < k) {
                    return false;
                }
                dist = 0;
            }
        } else {
            dist++;
        }
    }

    return true;
};