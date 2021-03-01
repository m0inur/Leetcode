/**
 * @param {string[]} dictionary
 * @param {string} sentence
 * @return {string}
 */
let replaceWords = function(dictionary, sentence) {
    dictionary.sort((a, b) => a.length - b.length);
    sentence = sentence.split(" ");

    for(let i = 0; i < sentence.length; i++) {
        for(let j = 0; j < dictionary.length; j++) {
            let regex = new RegExp(dictionary[j]);
            let str = sentence[i].split('').splice(0, dictionary[j].length).join('');

            if(regex.test(str)) {
                sentence[i] = dictionary[j];
            }
        }
    }

    return sentence.join(" ");
};