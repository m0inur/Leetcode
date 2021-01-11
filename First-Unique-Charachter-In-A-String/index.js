/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
    s = s.split('');

    let str = [...s].sort();
    let isUnique = true;
    let index = -1;

    for (let i = 0; i < str.length; i++) {
        if (str[i] == str[i + 1]) {
            isUnique = false;
        } else {
            if (isUnique) {
                var indexOf = s.indexOf(str[i]);

                if (index == -1) {
                    index = indexOf;
                } else {
                    index = Math.min(index, indexOf);
                }
            }
            isUnique = true;
        }
    }

    return index;
};