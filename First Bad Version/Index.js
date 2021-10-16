/*
    First Bad Version
 */
/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
let solution = function(isBadVersion) {
    /**
     * @param {integer} n Total versions
     * @return {integer} The first bad version
     */
    return function(n) {
        if(n === 1) return 1;
        if(isBadVersion(n) && !isBadVersion(n - 1)) return n;

        return binarySearch(isBadVersion, 0, n - 1);
    };
};

// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
function binarySearch(isBadVersion, l, r)
{
    if (r >= l) {
        let mid = Math.floor(l + (r - l) / 2);

        // if current one is the bad version and the last one is a good version
        if (isBadVersion(mid) && !isBadVersion(mid - 1))
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (isBadVersion(mid))
            return binarySearch(isBadVersion, l, mid - 1);

        // Else the element can only be present
        // in right subarray
        return binarySearch(isBadVersion, mid + 1, r);
    }

    // We reach here when element is not
    // present in array
    return -1;
}