/**
 * Given an array of integers with possible duplicates, randomly
 * output the index of a given target number.You can assume
 * that the given target number must exist in the array.
 * 
 * Note:
 * The array size can be very large.Solution that uses too much
 * extra space will not pass the judge.
 */

/**
 * @param {number[]} nums
 */
var Solution = function (nums) {
    this.arr = nums;
    this.len = this.arr.length;
};

/** 
 * @param {number} target
 * @return {number}
 */
Solution.prototype.pick = function (target) {
    var nums = [...this.arr];
    var indices = [];
    var index = 0;
    var random = 0;

    while (nums.includes(target)) {
        index = nums.indexOf(target);
        indices.push(index + (this.len - nums.length));
        nums.splice(index, 1);
    }

    random = Math.floor(Math.random() * indices.length);
    return indices[random];
};

/** 
 * Your Solution object will be instantiated and called as such:
 * var obj = new Solution(nums)
 * var param_1 = obj.pick(target)
 */

/** Faster than 97% */