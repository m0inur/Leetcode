/*
    Merge Two Sorted Lists
    
    Merge two sorted linked lists and return it as a sorted list. The list should be made by splicing together the nodes of the first two lists.

    Example 1:
        Input: l1 = [1,2,4], l2 = [1,3,4]
        Output: [1,1,2,3,4,4]
        
    Example 2:
        Input: l1 = [], l2 = []
        Output: []
    
    Example 3:
        Input: l1 = [], l2 = [0]
        Output: [0]
     
    Constraints:
        The number of nodes in both lists is in the range [0, 50].
        -100 <= Node.val <= 100
        Both l1 and l2 are sorted in non-decreasing order.
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let mergeTwoLists = function(l1, l2) {
    let arr1 = [];
    let arr2 = [];
    let mergedList = new ListNode();
    let current = mergedList;

    while(1 == 1) {
        if(l1 == null && l2 == null) {
            break;
        }

        if(l1 != null) {
            arr1.push(l1.val);
            l1 = l1.next;
        }

        if(l2 != null) {
            arr2.push(l2.val);
            l2 = l2.next;
        }

    }

    let mergedArr = arr1.concat(arr2).sort((a, b) => a - b);

    for(let i = 0; i < mergedArr.length; i++) {
        current.next = new ListNode(mergedArr[i]);
        current = current.next;
    }

    return mergedList.next;
};