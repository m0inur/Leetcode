var findTheDifference = function (s, t) {
    s = s.split('');
    var index = 0;

    for (let i = 0; i < t.length; i++) {
        index = s.indexOf(t[i]);
        if (index == -1) {
            return t[i];
        } else {
            s.splice(index, 1);
        }
    }
};