/**
 * @param {number[]} nums
 * @return {string[]}
 */
let summaryRanges = function(nums) {
    let summaryRangeArr = [];
    let startingNum = "empty";

    for(let i = 0; i < nums.length; i++) {
        if(nums[i] + 1 === nums[i + 1]) {
            if (startingNum === "empty") startingNum = nums[i];
        } else {
            summaryRangeArr.push(startingNum === "empty" ? nums[i].toString() : startingNum + "->" + nums[i]);
            startingNum = "empty";
        }
    }

    return summaryRangeArr;
};