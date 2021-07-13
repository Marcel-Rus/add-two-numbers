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
 var addTwoNumbers = function(l1, l2) {
    let l3 = null; // new list head
    let node;      // traversal node
    let r = 0;     // remainder

    while (l1 !== null || l2 !== null) {
        let newNode = new ListNode(null, null);
        let v1 = l1 !== null ? l1.val : 0;
        let v2 = l2 !== null ? l2.val : 0;

        newNode.val = (v1 + v2 + r) % 10;
        r = v1 + v2 + r > 9 ? 1 : 0;

        if (l3 === null) {
            l3 = newNode;
            node = l3;
        }

        else {
            node.next = newNode;
            node = node.next;
        }

        if (l1 !== null) {l1 = l1.next;}
        if (l2 !== null) {l2 = l2.next;}
    }

    if (r !== 0) {
        node.next = new ListNode(r, null);
    }

    return l3;
};