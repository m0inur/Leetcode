var canConstruct = function (ransomNote, magazine) {
    ransomNote = ransomNote.split('');
    magazine = magazine.split('');
    var index = 0;

    for (let i = 0; i < ransomNote.length; i++) {
        index = magazine.indexOf(ransomNote[i]);

        if (index == -1) {
            return false;
        } else {
            magazine.splice(index, 1);
        }
    }

    return true;
};