/**
 * @param {number[]} nums
 * @return {number[]}
 */
var frequencySort = function(nums) {
    let frequenciesMap = new Map();
    let frequency = 1;
    let topFrequent = [];
    let ans = [];

    nums.sort((a, b) => a - b);

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] == nums[i + 1]) {
            frequency++;
        } else {
            frequenciesMap.set(nums[i], frequency);
            frequency = 1;
        }
    }

    frequenciesMap = new Map([...frequenciesMap.entries()].sort((a, b) => {
        if(a[1] < b[1]) return a[1] - b[1];
        if(a[1] == b[1]) return b[0] - a[0];
    }));

    for(let[key, value] of frequenciesMap) {
        for(let i = 0; i < value; i++) {
            ans.push(key);
        }
    }
    return ans;
};
