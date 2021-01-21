/**
 * @param {number[][]} points
 * @return {number}
 */
var findMinArrowShots = function(points) {
	points.sort((a, b) => a[0] - b[0]);
	for (let i = 0; i < points.length - 1; i++) {
		if (points[i][0] == points[i + 1][0] || points[i][1] == points[i + 1][1] || points[i][0] < points[i + 1][0] && points[i + 1][0] <= points[i][1] || points[i][0] > points[i + 1][0] && points[i][0] <= points[i + 1][1]) {
			points[i + 1] = [Math.max(points[i][0], points[i + 1][0]), Math.min(points[i][1], points[i + 1][1])];
			points.splice(i, 1);
			i--;
		}
	}
	return points.length;
};