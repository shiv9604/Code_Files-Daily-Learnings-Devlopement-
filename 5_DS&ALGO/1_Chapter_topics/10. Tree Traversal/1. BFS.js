class Node {
  constructor(node) {
    this.value = node;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor(node) {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);
    // Set the root node if no nodes available
    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let temp = this.root;
    while (true) {
      // Don't insert duplicate nodes if value matches with any node
      if (newNode.value === temp.value) return undefined;

      // NewNode's value less than temp value then place the node at left.
      if (newNode.value < temp.value) {
        if (temp.right == null) {
          temp.left = newNode;
          return this;
        }
        temp = temp.left;
      }
      // // NewNode's value less than temp value then place the node at right.
      else {
        if (newNode.value > temp.value) {
          if (temp.right == null) {
            temp.right = newNode;
            return this;
          }
          temp = temp.right;
        }
      }
    }
  }

  contains(value) {
    if (this.root == null) return false;
    let temp = this.root;
    while (temp) {
      if (value < temp.value) {
        temp = temp.left;
      } else if (value > temp.value) {
        temp = temp.right;
      } else {
        return true;
      }
    }
    return false;
  }

  minValueNode(value) {
    let currentNode;
    if (value) {
      currentNode = value;
      while (currentNode.left) {
        currentNode = currentNode.left;
      }
    } else {
      currentNode = this.root;
      while (currentNode.left) {
        currentNode = currentNode.left;
      }
    }
    return currentNode;
  }

  BFS() {
    // Root as the first node as we are traversing on tree.
    let currentNode = this.root;
    let que = [];
    let results = [];
    que.push(currentNode);

    while (que.length) {
      let cur = que.shift();
      results.push(cur.value);
      if (cur.left) que.push(cur.left);
      if (cur.right) que.push(cur.right);
    }

    return results;
  }

  DFSPreOrder() {
    let results = [];
    function traverse(node) {
      results.push(node.value);
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return results;
  }

  DFSPostOrder() {
    let results = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      if (node.right) traverse(node.right);
      results.push(node.value);
    }
    traverse(this.root);
    return results;
  }

  DFSInOrder() {
    let results = [];
    function traverse(node) {
      if (node.left) traverse(node.left);
      results.push(node.value);
      if (node.right) traverse(node.right);
    }
    traverse(this.root);
    return results;
  }
}

const myBST = new BST();

myBST.insert(47);
myBST.insert(21);
myBST.insert(76);
myBST.insert(18);
myBST.insert(27);
myBST.insert(52);
myBST.insert(82);
console.log(myBST.DFSPreOrder());
console.log(myBST.DFSPostOrder());
console.log(myBST.DFSInOrder());
