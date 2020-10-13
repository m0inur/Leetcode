var selfDividingNumbers = function (left, right) {
    var selfDivNum;
    var num = 0;
    var ans = [];

    for (let i = left; i <= right; i++) {
        selfDivNum = true;
        num = i.toString().split('')
        if (!num.includes('0')) {
            for (let x = 0; x < num.length; x++) {
                if (num.join('') % num[x] != 0) {
                    selfDivNum = false;
                }
            }
            if (selfDivNum) {
                ans.push(num.join(''))
            }
        }
    }

    return ans;
};