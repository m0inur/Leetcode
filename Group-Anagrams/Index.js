/*
    Group Anagrams
    
    Given an array of strings strs, group the anagrams together. You can return the answer in any order.
    An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
 
    Examples: 
        Example 1:
            Input: strs = ["eat","tea","tan","ate","nat","bat"]
            Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
        
        Example 2:
            Input: strs = [""]
            Output: [[""]]
            
        Example 3:
            Input: strs = ["a"]
            Output: [["a"]]
     
    Constraints:
        1 <= strs.length <= 104
        0 <= strs[i].length <= 100
        strs[i] consists of lower-case English letters.
 */

/**
 * @param {string[]} strings
 * @return {string[][]}
 */
let groupAnagrams = function (strings) {
    let groupedIndividualAnagramsMap = new Map();
    let arr = [];
    let index = 0;

    for (let i = 0; i < strings.length; i++) {
        let str = [...strings[i]].sort().join('');
        if (!groupedIndividualAnagramsMap.has(str)) {
            groupedIndividualAnagramsMap.set(str, index);
            index++;
        }

        let j = groupedIndividualAnagramsMap.get(str);
        if (arr[j] === undefined) {
            arr.push([strings[i]]);
        } else {
            arr[j].push(strings[i]);
        }
    }
    return arr;
};

/*
    Runtime: 128 ms, faster than 94.01% of JavaScript online submissions for Group Anagrams.
    Memory Usage: 48.5 MB, less than 96.35% of JavaScript online submissions for Group Anagrams.
 */