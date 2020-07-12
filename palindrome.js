/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
   let tempHead = head;
    let listToArray = [];
    let reverseArray = [];
    while(tempHead !== null){
    listToArray.push(tempHead.val);
    tempHead = tempHead.next;
    }
    for(let i of listToArray){
        reverseArray.unshift(i);
    }
    if(listToArray.join('') === reverseArray.join('')){
      return true;  
    } 
    else {return false};
};
