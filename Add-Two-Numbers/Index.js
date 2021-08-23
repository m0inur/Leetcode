/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
let addTwoNumbers = function(l1, l2) {
    let list = new ListNode(0);
    let head = list;
    let isCarrying = false;

    while(l1 || l2){
        let nodeSum =  (l1?.val || 0) +  (l2?.val || 0);

        nodeSum  += (isCarrying) ? 1 : 0;
        isCarrying = nodeSum > 9;

        head.next = new ListNode(nodeSum % 10);

        if (l1) l1 = l1.next;
        if (l2) l2 = l2.next;

        head = head.next;
    }

    if (isCarrying) head.next = new ListNode(isCarrying);
    return list.next;
};