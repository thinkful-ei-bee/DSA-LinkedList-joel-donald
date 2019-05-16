class _Node {
  constructor(value, next) {
    this.value = value;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  insertFirst(item) {
    this.head = new _Node(item, this.head);
  }

  insertLast(item) {
    if (this.head === null) {
      this.insertFirst(item);
    }
    else {
      let tempNode = this.head;
      while (tempNode.next !== null) {
        tempNode = tempNode.next;
      }
      tempNode.next = new _Node(item, null);
    }
  }

  find(item) {
    let currNode = this.head;
    let prevNode = currNode;

    if (!this.head) {
      return null;
    }

    while (currNode.value !== item) {
      if (currNode.next === null) {
        return { prev: prevNode, curr: null }
      }
      else {
        prevNode = currNode;
        currNode = currNode.next;
      }
    }

    return {prev: prevNode, curr: currNode };
  }

  remove(item) {
    if (!this.head) {
      return null;
    }

    if (this.head.value === item) {
      this.head = this.head.next;
      return;
    }

    let currNode = this.head;

    let previousNode = this.head;

    while((currNode !== null) && (currNode.value !== item)) {
      previousNode = currNode;
      currNode = currNode.next;
    }

    if (currNode === null) {
      console.log('Item not found');
      return;
    }

    // this is removing the reference from the previous node to the
    // current node. Therefore "skipping over" the current node.
    previousNode.next = currNode.next;
  }
  
  insertBefore(searchForItem, item) {
    let currNode = this.head;
    
    while (currNode.next !== searchForItem) {
      if (currNode.next === null) {
        return null
      }
      else {
        currNode = currNode.next;
      }
    }
  }

  insertAfter(searchForItem, item) {
    let currNode = this.find(searchForItem).curr;
    
    if (!currNode) {
      console.log('Searched for item does not exist');
      return;
    }

    if (!item) {
      console.log('Item not passed in!');
      return;
    }
    // set item.next = currNode.next
    // set currNode.next to item
    
    let newNode = new _Node(item, currNode.next);

    currNode.next = newNode;

    
  }
}

module.exports = LinkedList;