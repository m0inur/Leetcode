/*
    Merge In Between Linked Lists
    
    You are given two linked lists: list1 and list2 of sizes n and m respectively.
    
    Remove list1's nodes from the ath node to the bth node, and put list2 in their place.
    
    The blue edges and nodes in the following figure incidate the result:

    Build the result list and return its head.
    
    Example 1:
        Input: list1 = [0,1,2,3,4,5], a = 3, b = 4, list2 = [1000000,1000001,1000002]
        Output: [0,1,2,1000000,1000001,1000002,5]
        Explanation: We remove the nodes 3 and 4 and put the entire list2 in their place. The blue edges and nodes in the above figure indicate the result.
   
    Example 2:
        Input: list1 = [0,1,2,3,4,5,6], a = 2, b = 5, list2 = [1000000,1000001,1000002,1000003,1000004]
        Output: [0,1,1000000,1000001,1000002,1000003,1000004,6]
        Explanation: The blue edges and nodes in the above figure indicate the result.
 
    Constraints:
        3 <= list1.length <= 104
        1 <= a <= b < list1.length - 1
        1 <= list2.length <= 104
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {number} a
 * @param {number} b
 * @param {ListNode} list2
 * @return {ListNode}
 */
let mergeInBetween = function(list1, a, b, list2) {
    let arr = [];
    let i = 0;
    let hasMerged = false;

    while(list1) {
        if(i >= a && i <= b) {
            if(!hasMerged) {
                while(list2) {
                    arr.push(list2.val);
                    list2 = list2.next;
                }
                hasMerged = true;
            }
            i++;
            list1 = list1.next;
            continue;
        }

        arr.push(list1.val);
        i++;
        list1 = list1.next;
    }

    let list = new ListNode();
    let curr = list;
    for(let i = 0; i < arr.length; i++) {
        curr.next = new ListNode(arr[i]);
        curr = curr.next;
    }

    return list.next;
};

// Runtime: 208 ms, faster than 98.51% of JavaScript online submissions for Merge In Between Linked Lists.
// Memory Usage: 52.4 MB, less than 97.01% of JavaScript online submissions for Merge In Between Linked Lists.
