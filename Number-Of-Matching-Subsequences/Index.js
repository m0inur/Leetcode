// Given a string s and an array of strings words, return the number of words[i] that is a subsequence of s.
// A subsequence of a string is a new string generated from the original string with some characters (can be none) deleted without changing the relative order of the remaining characters.
// For example, "ace" is a subsequence of "abcde".

/**
 * @param {string} s
 * @param {string[]} words
 * @return {number}
 */
let numMatchingSubseq = function(s, words) {
    let matches = 0;

    for (let i = 0; i < words.length; i++) {
        let lastIndex = -1;

        for (let j = 0; j < words[i].length; j++) {
            let currIndex = s.indexOf(words[i][j], lastIndex + 1)

            // current index does not exist
            if(currIndex === -1) {
                lastIndex = -1;
                break;
            }
            else if(currIndex > lastIndex) {
                lastIndex = currIndex;
            } else {
                lastIndex = -1;
                break;
            }
        }

        if(lastIndex !== -1) {
            matches++;
        }
    }

    return matches;
};

let s = "dsahjpjauf", words = ["ahjpjau","ja","ahbwzgqnuk","tnmlanowax"];
console.log(numMatchingSubseq(s, words));