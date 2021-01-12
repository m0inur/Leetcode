/**
 * @param {number[]} nums
 * @return {number}
 */

var findNumbers = function(nums) {
    var evenLen = 0;
    for(var i = 0; i < nums.length; i++) {
        if(nums[i].toString().length % 2 == 0) evenLen++;
    }
    return evenLen;
};