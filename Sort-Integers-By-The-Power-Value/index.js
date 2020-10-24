/**
 * The power of an integer x is defined as the number
 * of steps needed to transform x into 1 using the
 * following steps:
 *  if x is even then x = x / 2
 *  if x is odd then x = 3 * x + 1
 * 
 * For example, the power of x = 3 is 7 because 3 needs
 * 7 steps to become 1 (3 --> 10 --> 5 --> 16 --> 8 --> 4 --> 2 --> 1).
 * 
 * Given three integers lo, hi and k.The task is to 
 * sort all integers in the interval[lo, hi] by the
 * power value in ascending order, if two or more
 * integers have the same power value sort them by
 * ascending order.
 * 
 * Return the k - th integer in the range[lo, hi] sorted by the power value.
 * 
 * Notice that for any integer x(lo <= x <= hi) it is guaranteed that x will transform into 1 * using these steps and that the power of x is will fit in 32 bit signed integer.
 */

/**
 * Constraints:
 *  1 <= lo <= hi <= 1000
 *  1 <= k <= hi - lo + 1
 */

/**
 * @param {number} lo
 * @param {number} hi
 * @param {number} k
 * @return {number}
 */
var getKth = function (lo, hi, k) {
    var x = 0;
    var pow = 0;
    var index = 0;
    var ans = 0;
    var powerMap = new Map();

    // Get powers
    for (let i = lo; i <= hi; i++) {
        x = i;

        while (x != 1) {
            if (x % 2 == 0) {
                x /= 2;
            } else {
                x = 3 * x + 1;
            }
            pow++;
        }

        powerMap.set(i, pow);
        index++;
        pow = 0;
    }

    // Sort map
    powerMap[Symbol.iterator] = function* () {
        yield*[...this.entries()].sort((a, b) => a[1] - b[1]);
    }

    // Get kth value
    for (var [key, value] of powerMap) {
        ans = key;
        if (k == 1) {
            return ans;
        }
        k--;
    }
    return ans;
}