{
    constructor(key, value=key){
        this.key = key;
        this.value = value;
        this.parent = null;
        this.children = [];
    }
    
class Tree {
    constructor(key,value=key){
     this.root =    new TreeNode(key,value);
    }
    
    preOrderTraversal(root){
        let node = root;
        (for child of node.childre){
            return preOrderTraversal(child);
        }
    }
    postOrderTraversal(root) {
        
    }
}
}
