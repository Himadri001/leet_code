/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) { val = x; }
 * }
 */
class Solution {
    public ListNode removeNthFromEnd(ListNode head, int n) {
    ListNode start = head;
    if(head == null){
        return null;
    }
    int i =0;
    while(start!=null){
        i++;
        start = start.next;
    }
    int len = i -n + 1;
    if(len == 1){
        return head.next;
    }
    int p =0;
    start = head;
    while(start!=null){
        p++;
        if(p == len-1){
            start.next = start.next.next;
        }
        start = start.next;
    }
        return head;
}  
    }