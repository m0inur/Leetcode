var maxProduct = function (nums) {
    let max = Number.NEGATIVE_INFINITY;

    for (let i = 0; i < nums.length; i++) {
        let product = 1
        for (let j = i; j < nums.length; j++) {
            product = product * nums[j]
            max = Math.max(product, max)
        }
    }

    return max
};