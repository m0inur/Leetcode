/**
 * @param {string} word1
 * @param {string} word2
 * @return {boolean}
 */
let checkAlmostEquivalent = function(word1, word2) {
    let diffCountMap = new Map();

    for(let i = 0; i < word1.length; i++) {
        if(diffCountMap.has(word1[i])) continue;

        let count1 = getLetterCount(word1, word1[i]);
        let count2 = getLetterCount(word2, word1[i]);
        diffCountMap.set(word1[i], Math.abs(Math.abs(count1 - count2)))
        if(Math.abs(count1 - count2) > 3) return false;
    }

    for(let i = 0; i < word2.length; i++) {
        if(diffCountMap.has(word2[i])) continue;

        let count1 = getLetterCount(word2, word2[i]);
        let count2 = getLetterCount(word1, word2[i]);
        diffCountMap.set(word1[i], Math.abs(Math.abs(count1 - count2)))
        if(Math.abs(count1 - count2) > 3) return false;
    }

    console.log(diffCountMap)
    return true;
};

function getLetterCount(arr, letter) {
    let count = 0;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] === letter) {
            count++;
        }
    }
    return count;
}