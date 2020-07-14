/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrderBottom = function(root) {
   const resultArray = [] 
   let node = root;
   let count = 0;
   getValue(root,0);
   return resultArray.reverse();
   function getValue(node,nodeLevel){
    if(!node) return;
       if(resultArray[nodeLevel] === undefined) resultArray.push([node.val]);
       else resultArray[nodeLevel].push(node.val);
        
       getValue(node.left, nodeLevel+1);
       getValue(node.right, nodeLevel+1);
   }
}
