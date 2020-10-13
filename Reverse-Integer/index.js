var max = Math.pow(2, 31) - 1;
var min = Math.pow(-2, 31);

var reverse = function (x) {
    x = parseInt(x.toString().split('').reverse().join('')) * Math.sign(x);
    if (x < max && x > min) {
        return x;
    } else {
        return 0;
    }
};

// Faster Than 96.53%