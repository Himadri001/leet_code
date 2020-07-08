/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
   let length = 0;
   let currentNode = head;
    
    if(head == null){
        return head;
    }
    while(currentNode!==null){
       currentNode = currentNode.next;
        length++;
    }
    let position = length - (k%length);
    currentNode = head;
    let index  = 1;
    while(position > index){
        currentNode = currentNode.next;
        index++;
    }
    let newLastNode = currentNode;
    let newHeadNode = currentNode.next;
    while(currentNode.next !== null){
        currentNode = currentNode.next;
    }
    currentNode.next = head;
    newLastNode.next = null;
    return newHeadNode || head;
};
