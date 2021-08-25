/*
    Find Unique Binary String   
    
    Given an array of strings nums containing n unique binary strings each of length n, return a binary string of length n that does not appear in nums. If there are multiple answers, you may return any of them.

    Example 1:
        Input: nums = ["01","10"]
        Output: "11"
        Explanation: "11" does not appear in nums. "00" would also be correct.
        
    Example 2:
        Input: nums = ["00","01"]
        Output: "11"
        Explanation: "11" does not appear in nums. "10" would also be correct.
        
    Example 3:
        Input: nums = ["111","011","001"]
        Output: "101"
        Explanation: "101" does not appear in nums. "000", "010", "100", and "110" would also be correct.
         
    Constraints:
        n == nums.length
        1 <= n <= 16
        nums[i].length == n
        nums[i] is either '0' or '1'.
        All the strings of nums are unique.

 */
function getBinaryString(n) {
    let str = "";

    for (let i = 0; i < n; i++) {
        let rand = Math.floor((Math.floor(Math.random() * 1000) % 2));
        str += rand;
    }

    return str;
}

/**
 * @param {string[]} nums
 * @return {string}
 */
let findDifferentBinaryString = function(nums) {
    let n = nums.length;
    let isSame = true;
    let str = "";
    while(isSame) {
        str = getBinaryString(n);
        isSame = nums.includes(str);
    }
    return str;
};

// Runtime: 68 ms, faster than 99.10% of JavaScript online submissions for Find Unique Binary String.