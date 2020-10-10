var sortedSquares = function (A) {
    var ans = [];

    for (var i = 0; i < A.length; i++) {
        ans.push(Math.pow(A[i], 2));
    }

    ans.sort((a, b) => a - b);
    return ans;
};