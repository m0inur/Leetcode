/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
let backspaceCompare = function(s, t) {
    s = removeBackspaces(s);
    t = removeBackspaces(t);
    return s === t;
};

function removeBackspaces(str) {
    let index = str.indexOf("#");
    while(index !== -1) {
        if(index === 0) {
            str = str.slice(0, index) + "" + str.slice(index + 1, str.length);
        } else {
            str = str.slice(0, index - 1) + "" + str.slice(index + 1, str.length);
        }

        index = str.indexOf("#");
    }

    return str;
}