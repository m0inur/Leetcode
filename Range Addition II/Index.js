/*
    Next Greater Element I
    
    The next greater element of some element x in an array is the first greater element that is to the right of x in the same array.
    
    You are given two distinct 0-indexed integer arrays nums1 and nums2, where nums1 is a subset of nums2.
    
    For each 0 <= i < nums1.length, find the index j such that nums1[i] == nums2[j] and determine the next greater element of nums2[j] in nums2. If there is no next greater element, then the answer for this query is -1.
    
    Return an array ans of length nums1.length such that ans[i] is the next greater element as described above.
 */
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
let nextGreaterElement = function(nums1, nums2) {
    let ans = [];
    for (let i = 0; i < nums1.length; i++) {
        let index = nums2.indexOf(nums1[i]);
        if(index === -1 || index === nums2.length) {
            ans.push(-1);
            continue;
        }

        let subSeq = nums2.slice(index, nums2.length);
        let hasPushed = false;

        for (let j = 0; j < subSeq.length; j++) {
            if(subSeq[j] > nums1[i]) {
                ans.push(subSeq[j]);
                hasPushed = true;
                break;
            }
        }

        if(!hasPushed) ans.push(-1);
    }

    return ans;
};

// Runtime: 68 ms, faster than 99.12% of JavaScript online submissions for Next Greater Element I.