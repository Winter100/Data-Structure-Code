// 최대 이진 힙
class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(element) {
    this.values.push(element);
    this.bubleUp();
  }

  bubleUp() {
    let idx = this.values.length - 1;
    const element = this.values[idx];
    while (idx > 0) {
      let parentIdx = Math.floor((idx - 1) / 2);
      let parent = this.values[parentIdx];

      if (element <= parent) break;
      this.values[parentIdx] = element;
      this.values[idx] = parent;
      idx = parentIdx;
    }
  }

  extractMax() {
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
        if (leftchild > element) {
          swap = leftChildIdx;
        }
      }

      if (rightChildIdx < length) {
        rightChild = this.values[rightChildIdx];
        if (
          (swap === null && rightChild > element) ||
          (swap !== null && rightChild > leftchild)
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

const heap = new MaxBinaryHeap();

heap.insert(20); // [20]
heap.insert(10); // [20, 10]
heap.insert(5); // [20, 10, 5]
heap.insert(77); // [77, 20, 5, 10]
heap.insert(33); // [77, 33, 5, 10, 20]

heap.extractMax(); // 77 ( heap: [33, 20, 5, 10] )
heap.extractMax(); // 33 ( heap: [20, 10, 5] )
heap.extractMax(); // 20 ( heap: [10, 5] )
heap.extractMax(); // 10 ( heap: [5] )
heap.extractMax(); // 5 ( heap: [] )
heap.extractMax(); // undefined ( heap: [] )

// 최소 이진 힙
