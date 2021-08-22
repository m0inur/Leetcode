/*
    Valid Parentheses
    
    Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

    An input string is valid if:
        Open brackets must be closed by the same type of brackets.
        Open brackets must be closed in the correct order.
        
    Example 1:
        Input: s = "()"
        Output: true
    
    Example 2:
        Input: s = "()[]{}"
        Output: true
    
    Example 3:
        Input: s = "(]"
        Output: false
    
    Example 4:
        Input: s = "([)]"
        Output: false
    
    Example 5:
        Input: s = "{[]}"
        Output: true
 
    Constraints:
        1 <= s.length <= 104
        s consists of parentheses only '()[]{}'.
 */

/**
 * @param {string} s
 * @return {boolean}
 */
let isValid = function(s) {
    let bracketsMap = new Map([
        ["(", ")"],
        ["[", "]"],
        ["{", "}"],
    ]);

    let expectingBracket = [];

    for (let i = 0; i < s.length; i++) {
        let val = bracketsMap.get(s[i]);

        if(val) {
            expectingBracket.unshift(val);
        } else {
            // Found closing brackets
            if(expectingBracket[0] === s[i]) {
                expectingBracket.shift();
            } else {
                return false;
            }
        }
    }

    return expectingBracket.length === 0;
};