var numTeams = function (rating) {
    var n = rating.length;
    var teams = 0;

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            for (let k = 0; k < n; k++) {
                if (rating[i] < rating[j] && rating[j] < rating[k] || rating[i] > rating[j] && rating[j] > rating[k]) {
                    if (0 <= i && i < j && j < k && k < n) {
                        teams++;
                    }
                }
            }
        }
    }

    return teams;
};