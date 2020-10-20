/*  Given an array A of strings made only from lowercase letters,
 *  return a list of all characters that show up in all strings within the list(including duplicates).For example,
 *  if a character occurs 3 times in all strings but not 4 times, you need to include that character three times in the final answer.
 * 
 *  You may return the answer in any order.
 * 
 * Note:
 *   1 <= A.length <= 100
 *   1 <= A[i].length <= 100
 *   A[i][j] is a lowercase letter
 */

var commonChars = function (A) {
    var common = A[0].split('');
    var index = 0;

    for (let i = 1; i < A.length; i++) {
        A[i] = A[i].split('');
        for (let j = 0; j < common.length; j++) {
            index = A[i].indexOf(common[j]);
            if (index > -1) {
                A[i].splice(index, 1);
            } else {
                common.splice(j, 1);
                j--;
            }
        }
    }

    return common;
};