/**
 * @param {number[]} nums
 * @return {number[][]}
 */
let permuteUnique = function(nums) {
    let permutations = [];
    let uniquePermutations = [];
    let nonUniquePermutations = [];
    p_helper(nums, 0, permutations);
    
    for(let i = 0; i < permutations.length; i++) {
        let joinedUniquePermutations = [...uniquePermutations].join('');
        if(!joinedUniquePermutations.includes(permutations[i])) {
            uniquePermutations.push(permutations[i])
        } else {
            nonUniquePermutations.push(permutations[i].join(''));
            console.log(nonUniquePermutations);
        }
    }
    
    return uniquePermutations;
};

function p_helper(nums, index, results) {
    // If its the last index
    if (index === nums.length) {
        results.push([...nums]);
    }

    // Start from the given index
    for (let i = index; i < nums.length; i++) {
        // Swap the given index with i
        swap(nums, index, i);
        p_helper(nums, index+1, results);
        swap(nums, index, i);
    }
}

function swap(nums, i1, i2) {
    let tmp = nums[i1];
    nums[i1] = nums[i2];
    nums[i2] = tmp;
}

let nums = [1,1,2];
console.log(permuteUnique(nums));