/*
    Partition List

    Given the head of a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.
    
    You should preserve the original relative order of the nodes in each of the two partitions.

    Example 1:
        Input: head = [1,4,3,2,5,2], x = 3
        Output: [1,2,2,4,3,5]
        
    Example 2:
        Input: head = [2,1], x = 2
        Output: [1,2]
     
    Constraints:
        The number of nodes in the list is in the range [0, 200].
        -100 <= Node.val <= 100
        -200 <= x <= 200
 */

/*
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
let partition = function(head, x) {
    let leftHalf = [];
    let rightHalf = [];

    while(head) {
        let val = head.val;
        if(val < x) {
            leftHalf.push(val);
        } else {
            rightHalf.push(val);
        }

        head = head.next;
    }
    
    let n = leftHalf.length + rightHalf.length;
    let list = new ListNode();
    let curr = list;

    for (let i = 0; i < n; i++) {
        let val = leftHalf[i] == null ? rightHalf[i - leftHalf.length - 1] : leftHalf[i];
        curr.next = new ListNode(val);
        curr = curr.next;
    }

    return list.next;
};