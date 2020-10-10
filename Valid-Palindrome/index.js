var isPalindrome = function (str) {
    var regex = new RegExp(/[a-z0-9]/);

    str = str.toLocaleLowerCase().split('');
    for (let i = 0; i < str.length; i++) {
        if (!regex.test(str[i])) {
            str.splice(i, 1);
            i--;
        }
    }

    str = str.join('').replace(/ /g, '');
    if (str == str.split('').reverse().join('')) {
        return true;
    } else {
        return false;
    }
}