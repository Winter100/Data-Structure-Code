class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }
  enqueue(val) {
    const newNode = new Node(val);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }
    return ++this.size;
  }

  dequeue() {
    if (!this.first) return null;
    if (this.first === this.last) this.last = null;

    const temp = this.first;
    this.first = this.first.next;
    this.size--;

    return temp.value;
  }
}

const queue = new Queue();

queue.enqueue("a"); // 1
queue.enqueue("b"); // 2

queue.dequeue(); // "a"
queue.dequeue(); // "b"
