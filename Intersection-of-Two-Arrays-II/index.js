// Given two arrays, write a function to compute their intersection.

/*
 * Note:
 *   Each element in the result should appear as many times as it shows in both arrays.
 *   The result can be in any order.
 */

/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    var arr = [];
    var arr2 = [];
    var ans = [];
    var index = 0;

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
        index = arr2.indexOf(arr[i]);
        if (index > -1) {
            ans.push(arr[i]);
            arr2.splice(index, 1);
        }
    }

    return ans;
};