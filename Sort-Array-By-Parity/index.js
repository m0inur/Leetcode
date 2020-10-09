var sortArrayByParity = function (A) {
    var value = 0;

    for (var i = 0; i < A.length; i++) {
        if (A[i] % 2 == 0) {
            value = A[i];
            A.splice(i, 1);
            A.unshift(value);
        }
    }

    return A;
};