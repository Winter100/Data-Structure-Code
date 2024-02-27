// 이진검색트리

class Node {
  constructor(val) {
    this.value = val;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(val) {
    const newNode = new Node(val);
    if (!this.root) {
      this.root = newNode;
      return this;
    }
    let current = this.root;
    while (true) {
      if (val === current.value) return undefined;

      if (val < current.value) {
        if (current.left === null) {
          current.left = newNode;
          return this;
        }
        current = current.left;
      } else {
        if (current.right === null) {
          current.right = newNode;
          return this;
        }
        current = current.right;
      }
    }
  }

  find(val) {
    if (this.root === null) return false;
    let current = this.root;
    let found = false;

    while (current && !found) {
      if (val < current.value) {
        current = current.left;
      } else if (val > current.value) {
        current = current.right;
      } else {
        found = true;
      }
    }
    if (!found) return false;
    return current;
  }

  //너비 우선 탐색
  BFS() {
    let node = this.root;
    const data = [];
    const queue = [];

    queue.push(node);

    while (queue.length) {
      node = queue.shift();
      data.push(node.value);
      if (node.left) queue.push(node.left);
      if (node.right) queue.push(node.right);
    }
    return data;
  }

  //깊이 우선 탐색

  // 1. 전위순회(루트->왼쪽->오른쪽)
  DFSpreOrder() {
    const data = [];

    function travers(node) {
      data.push(node.value);
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
    }

    travers(this.root);
    return data;
  }

  // 2. 중위순회(왼쪽->루트->오른쪽)
  DFSInOrder() {
    const data = [];

    function travers(node) {
      if (node.left) travers(node.left);
      data.push(node.value);
      if (node.right) travers(node.right);
    }

    travers(this.root);
    return data;
  }

  // 3. 후위순회(왼쪽->오른쪽->루트)
  DFSPostOrder() {
    const data = [];

    function travers(node) {
      if (node.left) travers(node.left);
      if (node.right) travers(node.right);
      data.push(node.value);
    }

    travers(this.root);
    return data;
  }
}

const tree = new BinarySearchTree();
