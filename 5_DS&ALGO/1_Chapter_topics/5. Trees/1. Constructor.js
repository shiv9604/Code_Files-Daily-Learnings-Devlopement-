class Node{
    constructor(node){
        this.value = node;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(node){
        this.root = null;
    }
}

const myBST = new BST();
console.log(myBST);