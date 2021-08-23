/**
 * @param {number} n
 * @return {boolean}
 */
let isPowerOfFour = function(n) {
    if(n === 0) return false;
    while(n !== 1) {
        if(n % 4 !== 0) {
            return false
        }
        n = Math.floor(n/4)
    }
    return true
};