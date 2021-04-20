/**
 * @param {number[]} arr
 * @param {number[][]} queries
 * @return {number[]}
 */
let xorQueries = function(arr, queries) {
    let XORArr = [];
    let xor = 0;

    for (let i = 0; i < queries.length; i++) {
        let subArr = arr.slice(queries[i][0], queries[i][1] + 1);
        xor = 0;

        for(let j = 0; j < subArr.length; j++) {
            xor ^= subArr[j];
        }

        XORArr.push(xor);
    }

    return XORArr;
};