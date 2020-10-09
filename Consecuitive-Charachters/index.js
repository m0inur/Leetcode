var maxPower = function (s) {
    var maxOccur = 0;
    var occur = 0;

    for (var i = 0; i < s.length; i++) {
        if (s[i] == s[i + 1]) {
            occur++;
        } else {
            maxOccur = Math.max(maxOccur, occur + 1);
            occur = 0;
        }
    }

    return maxOccur;
};