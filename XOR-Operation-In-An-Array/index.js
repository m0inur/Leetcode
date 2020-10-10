var xorOperation = function (n, start) {
    var xor;

    for (var i = 0; i < n; i++) {
        xor = xor ^ start + i * 2;
    }

    return xor;
};