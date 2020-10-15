var findPoisonedDuration = function (timeSeries, duration) {
    var timeDiff = 0;
    var poisonedDur = duration;

    if (timeSeries.length == 0) {
        return 0;
    }

    for (let i = 0; i < timeSeries.length - 1; i++) {
        timeDiff = timeSeries[i + 1] - timeSeries[i];

        if (timeDiff >= duration) {
            poisonedDur += duration;
        } else {
            poisonedDur += timeDiff;
        }
    }

    return poisonedDur;
};