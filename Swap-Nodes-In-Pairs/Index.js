/*
    Swap Nodes in Pairs
    
    Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

    Example 1:
        Input: head = [1,2,3,4]
        Output: [2,1,4,3]
        
    Example 2:
        Input: head = []
        Output: []
    
    Example 3:
        Input: head = [1]
        Output: [1]
        
    Constraints:
        The number of nodes in the list is in the range [0, 100].
        0 <= Node.val <= 100
 */
/*
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
let swapPairs = function(head, x) {
    let list = new ListNode();
    let curr = list;
    let arr = [];

    while(head != null) {
        arr.push(head.val);
        head = head.next;
    }

    for(let i = 1; i < arr.length; i += 2) {
        let saved = arr[i - 1];
        arr.splice(i - 1, 1, arr[i]);
        arr.splice(i, 1, saved);
    }

    for(let i = 0; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return list.next;
};

// Runtime: 60 ms, faster than 99.70% of JavaScript online submissions for Swap Nodes in Pairs.