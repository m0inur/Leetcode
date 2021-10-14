/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	            -1 if num is lower than the guess number
 *			             1 if num is higher than the guess number
 *                       otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function(n) {
    if (guess(n) === 0) return n;
    if (guess(1) === 0) return 1;

    return binarySearch(0, n-1)
};



// A recursive binary search function. It returns
// location of x in given array arr[l..r] is present,
// otherwise -1
function binarySearch(l, r)
{
    if (r >= l) {
        var mid = Math.floor(l + (r - l) / 2);

        // If the element is present at the middle
        // itself
        if (guess(mid) === 0)
            return mid;

        // If element is smaller than mid, then
        // it can only be present in left subarray
        if (guess(mid) === -1)
            return binarySearch(l, mid - 1);

        // Else the element can only be present
        // in right subarray
        return binarySearch(mid + 1, r);
    }

    // We reach here when element is not
    // present in array
    return -1;
}
 