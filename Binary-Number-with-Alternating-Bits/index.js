/**
 * @param {number} n
 * @return {boolean}
 */
function binary(num) {
    var binaryNum = [];
    var c;
    while (num != 1) {
        c = Math.floor(num / 2);
        binaryNum.unshift(num % 2);
        num = c;
    }
    binaryNum.unshift(1)
    return binaryNum
}

var hasAlternatingBits = function(n) {
	var binaryNum = binary(n);

	for(var i = 0; i < binaryNum.length; i++) {
		if(binaryNum[i] == binaryNum[i + 1]) {
			return false;
		}
	}

	return true;
};

