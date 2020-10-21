/**
 * Given an m x n matrix.If an element is 0, set its entire row and column to 0. Do it in -place.
 * 
 * Constraints:
 *  m == matrix.length
 *  n == matrix[0].length
 *  1 <= m, n <= 200
 *  -231 <= matrix[i][j] <= 231 - 1
 */

/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function (matrix) {
    var index = 0;
    var rowlen = matrix[0].length;
    var colI = [];
    var row = [];

    for (let i = 0; i < matrix.length; i++) {
        if (matrix[i].includes(0)) {
            row = [...matrix[i]];

            while (row.includes(0)) {
                index = row.indexOf(0);
                colI.push(index + (rowlen - row.length));
                row.splice(index, 1);
            }
            for (let j = 0; j < matrix[i].length; j++) {
                matrix[i][j] = 0;
            }
        }
    }

    for (let i = 0; i < colI.length; i++) {
        for (let j = 0; j < matrix.length; j++) {
            matrix[j][colI[i]] = 0;
        }
    }
    return matrix;
};