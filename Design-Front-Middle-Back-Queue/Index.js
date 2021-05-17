/*
    Task:
    Design a queue that supports push and pop operations in the front, middle, and back.
    
    Implement the FrontMiddleBack class:
    
    FrontMiddleBack() Initializes the queue.
    void pushFront(int val) Adds val to the front of the queue.
    void pushMiddle(int val) Adds val to the middle of the queue.
    void pushBack(int val) Adds val to the back of the queue.
    int popFront() Removes the front element of the queue and returns it. If the queue is empty, return -1.
    int popMiddle() Removes the middle element of the queue and returns it. If the queue is empty, return -1.
    int popBack() Removes the back element of the queue and returns it. If the queue is empty, return -1.
    Notice that when there are two middle position choices, the operation is performed on the frontmost middle position choice. For example:
    
    Pushing 6 into the middle of [1, 2, 3, 4, 5] results in [1, 2, 6, 3, 4, 5].
    Popping the middle from [1, 2, 3, 4, 5, 6] returns 3 and results in [1, 2, 4, 5, 6].
    
    Example: 
    Input:
    ["FrontMiddleBackQueue", "pushFront", "pushBack", "pushMiddle", "pushMiddle", "popFront", "popMiddle", "popMiddle", "popBack", "popFront"]
    [[], [1], [2], [3], [4], [], [], [], [], []]
    Output:
    [null, null, null, null, null, 1, 3, 4, 2, -1]
    
    Explanation:
    FrontMiddleBackQueue q = new FrontMiddleBackQueue();
    q.pushFront(1);   // [1]
    q.pushBack(2);    // [1, 2]
    q.pushMiddle(3);  // [1, 3, 2]
    q.pushMiddle(4);  // [1, 4, 3, 2]
    q.popFront();     // return 1 -> [4, 3, 2]
    q.popMiddle();    // return 3 -> [4, 2]
    q.popMiddle();    // return 4 -> [2]
    q.popBack();      // return 2 -> []
    q.popFront();     // return -1 -> [] (The queue is empty)
 */

let FrontMiddleBackQueue = function() {
    this.queue = [];
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushFront = function(val) {
    this.queue.unshift(val);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushMiddle = function(val) {
    let n = this.queue.length;
    let index = Math.floor(n / 2);
    
    let firstHalf = this.queue.slice(0, index);
    let lastHalf = this.queue.slice(index, n);
    let pushedMiddle = [];

    firstHalf.push(val);
    this.queue = pushedMiddle.concat(firstHalf, lastHalf);
};

/**
 * @param {number} val
 * @return {void}
 */
FrontMiddleBackQueue.prototype.pushBack = function(val) {
    this.queue.push(val);
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popFront = function() {
    if(this.queue.length === 0) return -1;
    return this.queue.shift();
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popMiddle = function() {
    if(this.queue.length === 0) return -1;

    let n = this.queue.length;
    let index = n % 2 === 0 ? Math.floor(n / 2) - 1 : Math.floor(n / 2);

    let firstHalf = this.queue.slice(0, index);
    let lastHalf = this.queue.slice(index, n);
    let pushedMiddle = [];

    let ans = lastHalf.shift()
    
    this.queue = pushedMiddle.concat(firstHalf, lastHalf);
    
    return ans;
};

/**
 * @return {number}
 */
FrontMiddleBackQueue.prototype.popBack = function() {
    if(this.queue.length === 0) return -1;
    return this.queue.pop();
};