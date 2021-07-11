/*
    Given the head of a sorted linked list, delete all nodes that have duplicate numbers, 
    leaving only distinct numbers from the original list. Return the linked list sorted as well.

    Example 1:
        Input: head = [1,2,3,3,4,4,5]
        Output: [1,2,5] 
        
    Example 2:
        Input: head = [1,1,1,2,3]
        Output: [2,3]
        
    Constraints:
        The number of nodes in the list is in the range [0, 300].
        -100 <= Node.val <= 100
        The list is guaranteed to be sorted in ascending order.
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
let deleteDuplicates = function(head) {
    if(head == null) return head;
    let removedList = new ListNode();
    let current = removedList;
    let distinctValues = new Map();

    while(head != null) {
        if(distinctValues.has(head.val)) {
            distinctValues.set(head.val, false);
        } else {
            distinctValues.set(head.val, true);
        }

        head = head.next;
    }
    for (let [val, key] of distinctValues.entries()) {
        if(!key) continue;
        current.next = new ListNode(val);
        current = current.next;
    }

    return removedList.next;
};