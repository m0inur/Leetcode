/**
 * initialize your data structure here.
 */
let MinStack = function() {
    this.arr = [];
};

/**
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    this.arr.push(val);
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.arr.splice(this.arr.length - 1, 1);
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.arr[this.arr.length - 1];
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return Math.min(...this.arr);
};