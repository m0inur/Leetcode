var countSegments = function (s) {
    var regex = new RegExp(/[a-z]/);

    if (!regex.test(s)) {
        return 0;
    } else {
        s = s.trim().split(" ");
        while (s.includes('')) {
            s.splice(s.indexOf(''), 1);
        }

        return s.length;
    }
};