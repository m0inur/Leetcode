/**
 * Initialize your data structure here.
 */
let MagicDictionary = function() {
    this.arr = [];
};

/**
 * @param {string[]} dictionary
 * @return {void}
 */
MagicDictionary.prototype.buildDict = function(dictionary) {
    this.arr.push(...dictionary);
};

/**
 * @param {string} searchWord
 * @return {boolean}
 */
MagicDictionary.prototype.search = function(searchWord) {
    for(let i = 0; i < this.arr.length; i++) {
        if(this.arr[i].length !== searchWord.length || this.arr[i] === searchWord) continue;

        for(let j = 0; j < this.arr[i].length; j++) {
            if(this.arr[i][j] !== searchWord[j]) {
                console.log("searchWord = " + searchWord + ", this.arr[i] = " + this.arr[i] +  ", mis match = " + searchWord[j] + " with " + this.arr[i][j]);

                var orgSearchWord = searchWord;
                searchWord = searchWord.split('');
                searchWord.splice(j, 1, this.arr[i][j]);
                searchWord = searchWord.join('');
                if(this.arr[i] === searchWord) {
                    return true;
                } else {
                    searchWord = orgSearchWord;
                    break;
                }
            }
        }
    }

    return false;
};


/**
 * Your MagicDictionary object will be instantiated and called as such:
 * var obj = new MagicDictionary()
 * obj.buildDict(dictionary)
 * var param_2 = obj.search(searchWord)
 */

Implement-Magic-Dictionary