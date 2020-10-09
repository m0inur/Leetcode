var numSmallerByFrequency = function (queries, words) {
    var ans = [];
    var wordsOccurs = [];
    var queryOccur = 0;
    var wordsOccur = 0;
    var count = 0;

    for (let i = 0; i < queries.length; i++) {
        count = 0;
        queries[i] = queries[i].split('').sort().join('');
        queryOccur = queries[i].split(queries[i][0]).length - 1;

        for (let j = 0; j < words.length; j++) {
            if (i == 0) {
                words[j] = words[j].split('').sort().join('');
                wordsOccur = words[j].split(words[j][0]).length - 1;
                wordsOccurs.push(wordsOccur);

                if (queryOccur < wordsOccur) {
                    count++;
                }
            } else {
                if (queryOccur < wordsOccurs[j]) {
                    count++;
                }
            }
        }

        ans.push(count);
    }

    return ans;
};