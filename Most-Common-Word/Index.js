/*
    Given a string paragraph and a string array of the banned words banned, return the most frequent word that is not banned. 
    It is guaranteed there is at least one word that is not banned, and that the answer is unique.
    
    The words in paragraph are case-insensitive and the answer should be returned in lowercase.

  Example 1:
    Input: paragraph = "Bob hit a ball, the hit BALL flew far after it was hit.", banned = ["hit"]
    Output: "ball"
    Explanation: 
    "hit" occurs 3 times, but it is a banned word.
    "ball" occurs twice (and no other word does), so it is the most frequent non-banned word in the paragraph. 
    Note that words in the paragraph are not case sensitive,
    that punctuation is ignored (even if adjacent to words, such as "ball,"), 
    and that "hit" isn't the answer even though it occurs more because it is banned.
    
  Example 2:
    Input: paragraph = "a.", banned = []
    Output: "a"
     
  Constraints:
    1 <= paragraph.length <= 1000
    paragraph consists of English letters, space ' ', or one of the symbols: "!?',;.".
    0 <= banned.length <= 100
    1 <= banned[i].length <= 10
    banned[i] consists of only lowercase English letters.
 */

/**
 * @param {string} paragraph
 * @param {string[]} banned
 * @return {string}
 */
let mostCommonWord = function (paragraph, banned) {
    let paragraphMap = new Map();

    paragraph = paragraph.toLowerCase();
    let wordBreakers = [" ", "!", "?", "'", ",", ";", "."]
    let n = paragraph.length;
// Get the words and their frequencies
    for (let i = 0; i < n; i++) {
        let minIndex = Number.POSITIVE_INFINITY;
        for (let j = 0; j < wordBreakers.length; j++) {
            let index = paragraph.indexOf(wordBreakers[j]);
            if (index !== -1 && index < minIndex) {
                minIndex = index;
            }
        }

        let word = paragraph.slice(0, minIndex).trim();
        paragraph = paragraph.slice(minIndex + 1, paragraph.length);

        if (banned.includes(word) || word === "") continue;
        let val = paragraphMap.get(word);
        if (!val) {
            paragraphMap.set(word, 1);
        } else {
            paragraphMap.set(word, val + 1);
        }
    }

    paragraphMap = new Map([...paragraphMap.entries()].sort((a, b) => b[1] - a[1]));
    return paragraphMap.keys().next().value;
};