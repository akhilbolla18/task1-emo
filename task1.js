class Node {
    constructor(data, next = null) {
      this.data = data;
      this.next = next;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    insertFirst(data) {
      this.head = new Node(data, this.head);
    }
  
    reverse() {
      let prev = null;
      let current = this.head;
      let next = null;
  
      while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
      }
  
      this.head = prev;
    }
  
    findSecondLargest() {
      let first = -Infinity;
      let second = -Infinity;
  
      let current = this.head;
  
      while (current !== null) {
        if (current.data > first) {
          second = first;
          first = current.data;
        } else if (current.data > second && current.data < first) {
          second = current.data;
        }
  
        current = current.next;
      }
  
      return second;
    }
  }
  
  // Example usage
  const linkedList = new LinkedList();
  
  // Assuming the user provides numbers, you can use a loop or any input mechanism
  linkedList.insertFirst(5);
  linkedList.insertFirst(10);
  linkedList.insertFirst(15);
  linkedList.insertFirst(8);
  
  console.log("Original Linked List:");
  console.log(linkedList);
  
  linkedList.reverse();
  
  console.log("\nReversed Linked List:");
  console.log(linkedList);
  
  const secondLargest = linkedList.findSecondLargest();
  console.log("\nSecond Largest Number:", secondLargest);
  