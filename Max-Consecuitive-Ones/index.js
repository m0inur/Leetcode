var findMaxConsecutiveOnes = function (nums) {
    var maxOccur = 0;
    var occur = 0;

    if (Math.max(...nums) == 0) {
        return 0;
    }

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == 1) {
            if (nums[i] == nums[i + 1]) {
                occur++;
            }
        } else {
            maxOccur = Math.max(maxOccur, occur + 1);
            occur = 0;
        }

        if (i == nums.length - 1) {
            if (nums[nums.length - 1] == 1) {
                maxOccur = Math.max(maxOccur, occur + 1);
            }
        }
    }

    return maxOccur;
}