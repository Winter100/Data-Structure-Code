class Node {
  constructor(val, priority) {
    this.value = val;
    this.priority = priority;
  }
}
class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(val, priority) {
    if (!val && !priority) return; // queue.dequeue() 처럼 아무값도 안넣으면 리턴
    const newNode = new Node(val, priority);
    this.values.push(newNode);
    this.bubleUp();
  }

  bubleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element.priority <= parent.priority) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  dequeue() {
    const max = this.values[0];
    const end = this.values.pop();
    if (this.values.length > 0) {
      this.values[0] = end;
      this.sinkDown();
    }
    return max;
  }

  sinkDown() {
    let idx = 0;
    const length = this.values.length;
    const element = this.values[0];
    while (true) {
      let leftChildIdx = 2 * idx + 1;
      let rightChildIdx = 2 * idx + 2;
      let leftchild, rightChild;
      let swap = null;

      if (leftChildIdx < length) {
        leftchild = this.values[leftChildIdx];
        if (leftchild.priority > element.priority) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild.priority > element.priority) ||
          (swap !== null && rightChild.priority > leftchild.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap == null) break;

      this.values[idx] = this.values[swap];
      this.values[swap] = element;
      idx = swap;
    }
  }
}

const queue = new PriorityQueue();

queue.enqueue("과자먹기", 3);
queue.enqueue("잠자기", 9);
queue.enqueue("밥먹기", 3);
queue.enqueue("공부하기", 8);

queue.dequeue(); // {value: '잠자기', priority: 9}
queue.dequeue(); // {value: '공부하기', priority: 8}
queue.dequeue(); // {value: '밥먹기', priority: 3}
queue.dequeue(); // {value: '과자먹기', priority: 3}
