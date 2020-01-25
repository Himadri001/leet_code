/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {

    var l1Array = [];
    var l2Array = [];
    var l1String = "";
    var l2String = "";
    var l1l2Int;
    while(l1.val >= 0){
        l1Array.push(l1.val);
        if(l1.next){
        l1 = l1.next;
        }
        else{
            break;
        }
    }
     while(l2.val >= 0){
        l2Array.push(l2.val);
        if(l2.next){
        l2 = l2.next;
        }
        else{
            break;
        }
    }
    l1Array.reverse();
    l2Array.reverse();
    for(let i =0 ; i < l1Array.length; i++){
        l1String += l1Array[i];
    }
    for(let j =0 ; j < l2Array.length; j++){
        l2String += l2Array[j];
    }
     l1String = BigInt(l1String);
     l2String = BigInt(l2String);
     l1l2Int = l1String + l2String;
    let l1l2String = l1l2Int.toString();
    let l1l2Array = l1l2String.split("");
    l1l2Array.reverse();
    let resultList  = new ListNode();
    let current  = resultList;
    let newNode; 
    for(let k = 0; k <l1l2Array.length; k++){
        l1l2Array[k] = parseInt(l1l2Array[k]);
        if(k == 0 ){
            resultList.val = l1l2Array[k];
        }
        else{
            newNode = new ListNode(l1l2Array[k]);
            current.next = newNode;
            current = newNode;
        }
    }
    return resultList;
};