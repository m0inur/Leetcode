/**
 * @param {string[]} words
 * @param {number} k
 * @return {string[]}
 */
var topKFrequent = function(words, k) {
	var frequenciesMap = new Map();
	var frequency = 1;
	var frequencyArr = [];

	words.sort();

	for (var i = 0; i < words.length; i++) {
		if (words[i] == words[i + 1]) {
			frequency++;
		} else {
			frequenciesMap.set(words[i], frequency);
			frequency = 1;
		}
	}
 	frequenciesMap = new Map([...frequenciesMap.entries()].sort((a, b) => b[1] - a[1]));

	for (var [key, value] of frequenciesMap) {
		if (frequencyArr.length < k) {
			frequencyArr.push(key);
		}
	}

	return frequencyArr;
};
