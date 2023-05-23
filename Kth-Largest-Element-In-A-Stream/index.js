/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function(k, nums) {
    this.k = k;
    this.nums = [];

    for (var i = 0; i < nums.length; i++) {
        this.nums = insertItem(this.nums, nums[i], 0, this.nums.length - 1);
    }
};

/** 
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function(val) {
    this.nums = insertItem(this.nums, val, 0, this.nums.length - 1);
    return this.nums[this.nums.length - this.k];
};

var insertItem = function(nums, val, l, r) {
    if (nums.length == 0) {
        nums.push(val)
        return nums
    }

    if (l == r) {
        // Insert at here
         if (val > nums[l]) {
            nums.splice(l + 1, 0, val);
        } else {
            nums.splice(l, 0, val);
        }
        return nums;
    }
    var mid = Math.floor((l + r) / 2);
    var midVal = nums[mid];
    
    // if mid is the same
    if (midVal == val) {
        // insert here
        nums.splice(mid, 0, val);
        return nums;
    } else if (l == r - 1) {
        if (val > nums[r]) {
            nums.splice(r + 1, 0, val);
        } else if (val > nums[l]) {
            nums.splice(r, 0, val);
        } else {
            nums.splice(l, 0, val);
        }
        return nums;
    } else if (midVal > val) {
        r = mid;
    } else if (midVal < val) {
        l = mid;
    }
    return insertItem(nums, val, l, r)
}
/** 
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
