/*
    Given an array of strings words, return the words that can be typed using letters of the alphabet on only one row of American keyboard like the image below.
    
    In the American keyboard:
        the first row consists of the characters "qwertyuiop",
        the second row consists of the characters "asdfghjkl", and
        the third row consists of the characters "zxcvbnm".
        
    Example 1:
        Input: words = ["Hello","Alaska","Dad","Peace"]
        Output: ["Alaska","Dad"]
    
    Example 2:
        Input: words = ["omk"]
        Output: []
    
    Example 3:
        Input: words = ["adsdf","sfd"]
        Output: ["adsdf","sfd"]
        
    Constraints:
        1 <= words.length <= 20
        1 <= words[i].length <= 100
        words[i] consists of English letters (both lowercase and uppercase). 
 */

/**
 * @param {string[]} words
 * @return {string[]}
 */
let findWords = function(words) {
    let results = [];
    let keyboardLetterRows = [
        "qwertyuiop",
        "asdfghjkl",
        "zxcvbnm"
    ];

    for(let i = 0; i < words.length; i++) {

        for(let j = 0; j < keyboardLetterRows.length; j++) {
            let canType = false;

            for(let k = 0; k < words[i].length; k++) {
                let index = keyboardLetterRows[j].indexOf(words[i][k].toLowerCase());
                if(index === -1) break;
                if(k === words[i].length - 1) canType = true;
            }

            if(canType) {
                results.push(words[i]);
                break;
            }
        }
    }

    return results;
};

// Memory Usage: 37.9 MB, less than 95.33% of JavaScript online submissions for Keyboard Row.