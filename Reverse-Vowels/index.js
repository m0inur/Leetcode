var reverseVowels = function (s) {
    s = s.split('');
    var regex = new RegExp(/[aeiouAEIOU]/);
    var vowels = "";
    var indexes = [];

    for (let i = 0; i < s.length; i++) {
        if (regex.test(s[i])) {
            vowels += s[i];
            indexes.push(i);
        }
    }
    vowels = vowels.split('').reverse();

    while (indexes.length > 0) {
        s[indexes[0]] = vowels[0];
        indexes.shift();
        vowels.shift();
    }

    return s.join('')
};