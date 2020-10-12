var isHappy = function (n) {
    var num = 0;
    var count = 0;
    n = n.toString().split('');

    while (num != 1) {
        num = 0;
        count++;
        for (let i = 0; i < n.length; i++) {
            num += Math.pow(n[i], 2);
        }
        n = num.toString().split('');

        if (count > 10) {
            return false;
        }
    }

    return true;
};