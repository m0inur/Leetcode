/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
	var mergedInterval = newInterval;

	for (let i = 0; i < intervals.length; i++) {
		if (intervals[i][0] == newInterval[0] || intervals[i][1] == newInterval[1] || intervals[i][0] < newInterval[0] && newInterval[0] <= intervals[i][1] || intervals[i][0] > newInterval[0] && intervals[i][0] <= newInterval[1]) {
			mergedInterval = [Math.min(intervals[i][0], mergedInterval[0]), Math.max(intervals[i][1], mergedInterval[1])];
			intervals.splice(i, 1);
			i--;
		}
	}

	intervals.push(mergedInterval);
	intervals.sort((a, b) => a[0] - b[0]);

	return intervals;
};
