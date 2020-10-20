// Given two arrays, write a function to compute their intersection.

/*
 * Note:
 *   Each element in the result must be unique.
 *   The result can be in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function (nums1, nums2) {
    var arr = [];
    var arr2 = [];
    var ans = [];
    var minLen = 0;

    // Arr = smallest array 
    // Arr2 = biggest array
    if (nums1.length < nums2.length) {
        arr = nums1;
        arr2 = nums2;
    } else {
        arr = nums2;
        arr2 = nums1;
    }

    for (let i = 0; i < arr.length; i++) {
        if (arr2.includes(arr[i])) {
            if (!ans.includes(arr[i])) {
                ans.push(arr[i]);
            }
        }
    }

    return ans;
};