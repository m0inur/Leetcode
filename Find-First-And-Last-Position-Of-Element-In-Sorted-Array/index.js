var searchRange = function (nums, target) {
    var start = -1;

    if (nums.join(" ").split(target).length - 1 <= 1) {
        return [nums.indexOf(target), nums.indexOf(target)];
    } else {
        for (var i = 0; i < nums.length; i++) {
            if (nums[i] == target) {
                if (start == -1) {
                    start = i;
                } else {
                    if (nums[i] != nums[i + 1]) {
                        return [start, i];
                    }
                }
            }
        }
    }
};