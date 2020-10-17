/**
 * Initialize your data structure here.
 */
var RandomizedSet = function () {
    this.set = []
};

/**
 * Inserts a value to the set. Returns true if the set did not already contain the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function (val) {
    if (this.set.includes(val)) {
        return false
    }
    this.set.push(val)
    return true
};

/**
 * Removes a value from the set. Returns true if the set contained the specified element. 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function (val) {
    const index = this.set.indexOf(val);
    if (index > -1) {
        this.set.splice(index, 1);
        return true
    }
    return false
};

/**
 * Get a random element from the set.
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function () {
    const randomNum = Math.floor(Math.random() * this.set.length)
    return this.set[randomNum]
};

/** 
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */