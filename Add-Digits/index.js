var addDigits = function (num) {
    num = num.toString().split('');
    var sum;

    while (num.length != 1) {
        sum = 0;

        for (let i = 0; i < num.length; i++) {
            sum += parseInt(num[i]);
        }
        num = sum.toString().split('');
    }

    return num[0];
};