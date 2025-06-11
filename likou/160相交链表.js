/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getListLen = function(head) {
    let len = 0, cur = head;
    while(cur) {
       len++;
       cur = cur.next;
    }
    return len;
} 
var getIntersectionNode = function(headA, headB) {
    let curA = headA,curB = headB, 
        lenA = getListLen(headA),
        lenB = getListLen(headB);
    if(lenA < lenB) {
        [curA, curB] = [curB, curA];
        [lenA, lenB] = [lenB, lenA];
    }
    let i = lenA - lenB;
    while(i-- > 0) {
        curA = curA.next
    }
    while(curA && curA !== curB) {
        curA = curA.next;
        curB = curB.next;
    }
    return curA;
};
