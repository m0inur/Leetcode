var reverseWords = function (s) {
    s = s.split(" ");

    while (s.includes('')) {
        s.splice(s.indexOf(''), 1);
    }

    return s.reverse().join(" ");
};