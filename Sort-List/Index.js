/*
    Sort List
    
    Given the head of a linked list, return the list after sorting it in ascending order.
    Follow up: Can you sort the linked list in O(n logn) time and O(1) memory (i.e. constant space)?
    
    Example 1:
        Input: head = [4,2,1,3]
        Output: [1,2,3,4]
        
    Example 2:
        Input: head = [-1,5,3,4,0]
        Output: [-1,0,3,4,5]
        
    Example 3:
        Input: head = []
        Output: []
        
    Constraints:
        The number of nodes in the list is in the range [0, 5 * 104].
        -105 <= Node.val <= 105
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
let sortList = function(head) {
    let sortedList = new ListNode();
    let curr = sortedList;
    let sortedArr = [];

    while(head != null) {
        sortedArr.push(head.val);
        head = head.next;
    }

    sortedArr.sort((a, b) => a - b);
    for(let i = 0; i < sortedArr.length; i++) {
        curr.next = new ListNode(sortedArr[i]);
        curr = curr.next;
    }

    return sortedList.next;
};

// Runtime: 128 ms, faster than 99.34% of JavaScript online submissions for Sort List.