/**
 * @param {string} text
 * @return {number}
 */
var maxNumberOfBalloons = function(text) {
    var searchString = "balloon";
	var instances = 0;

	text = text.split('');

	for(var i = 0; i < searchString.length; i++) {
		var j = text.indexOf(searchString[i]);
		if(j != -1) {
			text.splice(j, 1);
		} else {
			break;
		}
		if(i == searchString.length - 1) {
			instances++;
			i = -1;
		}
	}

	return instances;
};