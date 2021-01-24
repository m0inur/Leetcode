/**
 * @param {number[][]} intervals
 * @param {number[]} intervals[j]
 * @return {number[][]}
 */
var merge = function(intervals) {
	var mergedInterval = [];
	intervals.sort((a, b) => a[0] - b[0]);

	for (let i = 0; i < intervals.length; i++) {
		for (let j = 0; j < intervals.length; j++) {
			if (i == j) continue;
			if (intervals[i][0] == intervals[j][0] || intervals[i][1] == intervals[j][1] || intervals[i][0] < intervals[j][0] && intervals[j][0] <= intervals[i][1] || intervals[i][0] > intervals[j][0] && intervals[i][0] <= intervals[j][1]) {
				mergedInterval == [] ? mergedInterval = [Math.min(intervals[i][0], mergedInterval[0]), Math.max(intervals[i][1], mergedInterval[1])] : mergedInterval = [Math.min(intervals[i][0], intervals[j][0]), Math.max(intervals[i][1], intervals[j][1])];

				intervals.splice(j, 1, mergedInterval);
				intervals.splice(i, 1);
				j--;
			}
		}
	}

	return intervals;
};