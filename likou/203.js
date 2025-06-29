/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} val
 * @return {ListNode}
 */
// 方法二：头节点特殊处理
// 由于head指向的头节点前面没有节点，所以头节点的处理方式与后面节点的处理方式不同。
var removeElements = function (head, val) {
    // 先删除链表前面连续等于val的节点，同时更新head指向
    while (head?.val === val) {
        head = head.next
    }
    let currentNode = head // 这里已确定当前头节点的值不等于val了
    while (currentNode?.next) {
        // 删除currentNode的下个节点的情况
        if (currentNode.next.val === val) {
            // currentNode指向下下个节点
            currentNode.next = currentNode.next.next
            continue;
        }
        // 不删除currentNode的下个节点的情况
        // 更新currentNode
        currentNode = currentNode.next
    }
    return head
};
