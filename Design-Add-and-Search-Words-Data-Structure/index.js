/**
 * Initialize your data structure here.
 */
let WordDictionary = function() {
    this.words = [];
};

/**
 * @param {string} word
 * @return {void}
 */
WordDictionary.prototype.addWord = function(word) {
    this.words.push(word);
};

WordDictionary.prototype.search = function(word) {
    let regex = new RegExp(word);

    for (let i = 0; i < this.words.length; i++) {
        if(this.words[i].length !== word.length) continue;
        if(regex.test(this.words[i])) return true;
    }

    return false;
}

/**
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */