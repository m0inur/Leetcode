/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaximumXOR = function(nums) {
    var maxXOR = 0;

    for(var i = 0; i < nums.length; i++) {
        for(var j = 0; j < nums.length; j++) {
            maxXOR = Math.max(nums[i] ^ nums[j], maxXOR);
        }
    }

    return maxXOR;
};