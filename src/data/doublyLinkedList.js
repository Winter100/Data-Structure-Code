// 이중 연결 리스트
class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;
    return this;
  }

  pop() {
    if (!this.head) return null;
    const temp = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = temp.prev;
      this.tail.next = null;
      temp.prev = null;
    }

    this.length--;
    return temp;
  }

  shift() {
    if (!this.head) return null;

    const temp = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = temp.next;
      this.head.prev = null;

      temp.next = null;
    }
    this.length--;
    return temp;
  }

  unshift(val) {
    if (!this.head) {
      return this.push(val);
    } else {
      const newNode = new Node(val);
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
    return this;
  }

  get(index) {
    if (index < 0 || index >= this.length) return null;

    if (index <= this.length / 2) {
      // 찾고자 하는 index가 length를 반절로 나눴을때
      // index보다 작거나 같다면 head부터 시작
      let count = 0;
      let current = this.head;
      while (count !== index) {
        current = current.next;
        count++;
      }
      return current;
    } else {
      // 찾고자 하는 index가 length를 반절로 나눴을때
      // index보다 크거나 같다면 끝부터 시작
      let count = this.length - 1;
      let current = this.tail;
      while (count !== index) {
        current = current.prev;
        count--;
      }
      return current;
    }
  }

  set(index, val) {
    const foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.value = val;
      return true;
    }
    return false;
  }

  insert(index, val) {
    if (index < 0 || index > this.length) return false;
    if (index === 0) return !!this.unshift(val);
    if (index === this.length) return !!this.push(val);

    const newNode = new Node(val);
    const beforeNode = this.get(index - 1); // index가 0이와도 위의 if에서 처리했기때문에 상관없음
    const afterNode = beforeNode.next;

    beforeNode.next = newNode;
    newNode.prev = beforeNode;
    newNode.next = afterNode;
    afterNode.prev = newNode;

    this.length++;
    return true;
  }

  remove(index) {
    if (index < 0 || index >= this.length) return null;
    if (index === 0) return this.shift();
    if (index === this.length - 1) return this.pop();

    const removeNode = this.get(index);

    // 1. 첫번째 방식
    const beforeNode = removeNode.prev;
    const afterNode = removeNode.next;
    beforeNode.next = afterNode;
    afterNode.prev = beforeNode;

    // 2. 두번째 방식
    // removeNode.prev.next = removeNode.next;
    // removeNode.next.prev = removeNode.prev;

    removeNode.next = null;
    removeNode.prev = null;

    this.length--;
    return removeNode;
  }
}

const doublyList = new DoublyLinkedList();
doublyList.push(1);
