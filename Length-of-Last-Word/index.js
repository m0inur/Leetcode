/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
	s = s.toLowerCase().trim().split(" ");
	var regex = new RegExp(/[a-z]/);

	for(var i = s.length - 1; i >= 0; i--) {
		if(regex.test(s[i])) {
			return s[i].length;
		}
	}

	return 0;
};