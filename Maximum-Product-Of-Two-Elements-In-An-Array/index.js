var maxProduct = function (nums) {
    var maxProd = -Infinity;

    if (nums.length == 2) {
        return (nums[0] - 1) * (nums[1] - 1);
    }

    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i != j) {
                maxProd = Math.max(maxProd, (nums[i] - 1) * (nums[j] - 1));
            }
        }
    }

    return maxProd;
}