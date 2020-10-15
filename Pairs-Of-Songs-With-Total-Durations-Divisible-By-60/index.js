var numPairsDivisibleBy60 = function (time) {
    var pairs = 0;

    for (let i = 0; i < time.length; i++) {
        for (let j = i + 1; j < time.length; j++) {
            if ((time[i] + time[j]) % 60 == 0) {
                pairs++;
            }
        }
    }

    return pairs;
};