var findMedianSortedArrays = function (nums1, nums2) {
    var arr = [];

    arr = nums1.concat(nums2);
    arr.sort((a, b) => a - b);

    var n = arr.length;
    var mid = Math.floor(n / 2);

    if (n % 2 != 0) {
        return arr[mid];
    } else {
        return ((arr[mid] + arr[mid - 1]) / 2).toFixed(5);
    }
};