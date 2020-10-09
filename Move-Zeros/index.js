var moveZeroes = function (nums) {
    var removed = 0;

    while (nums.includes(0)) {
        nums.splice(nums.indexOf(0), 1);
        removed++;
    }

    while (removed != 0) {
        nums.push(0);
        removed--;
    }

    return nums;
};