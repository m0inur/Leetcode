var findErrorNums = function (nums) {
    nums.sort((a, b) => a - b);
    var dup;
    var miss;

    for (let i = 0; i < nums.length; i++) {
        if (!nums.includes(i + 1)) {
            miss = i + 1;
        }

        if (nums[i] == nums[i + 1]) {
            dup = nums[i];
            i++;
        }


        if (dup != undefined && miss != undefined) {
            return [dup, miss];
        }
    }
    return [dup, miss];
};