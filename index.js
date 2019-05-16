const ll = require("./linkedList.js");

function displayList(list) {
  let currNode = list.head;
  let prevNode = currNode;

  while (currNode.next !== null) {
    if (currNode.next === null) {
      return;
    } else {
      console.log(currNode.value);
      prevNode = currNode;
      currNode = currNode.next;
    }
  }
}

function countList(list) {
  let currNode = list.head;
  let prevNode = currNode;
  let count = 0;

  while (currNode.next !== null) {
    if (currNode.next === null) {
      return 1;
    } else {
      currNode = currNode.next;
      count++;
    }
  }
  return count;
}

function isEmpty(list) {
  if (list.head) {
    return false
  }
  return true;
}

function findPrevious(list, item) {
  let currNode = list.head;
  let prevNode = currNode;
  let position = 0;

  if (!currNode) {
    return null;
  }

  while (currNode.value !== item) {
    if (currNode.next === null) {
      return 'findPrevious(): Item not found';
    } else {
      prevNode = currNode;
      currNode = currNode.next;
      position++;
    }
  }

  if (position === 0) {
    return 'At head, no previous node.';
  }

  return prevNode;
}

function main() {
  const SLL = new ll();

  const names = ["Apollo", "Boomer", "Helo", "Husker", "Starbuck"];

  // SLL.insertLast('Apollo');
  // SLL.insertLast('Boomer');
  // SLL.insertLast('Helo');
  // SLL.insertLast('Husker');
  // SLL.insertLast('Starbuck');

  names.forEach(name => {
    //console.log(name)
    SLL.insertLast(name);
  });

  SLL.insertLast("Tauhida");

  SLL.remove('squirrel');

  SLL.insertBefore("Boomer", "Athena");

  SLL.insertAfter("Helo", "Hotdog");

  SLL.insertAt(3, "Kat");

  displayList(SLL);
  console.log(countList(SLL));
  console.log(isEmpty(SLL))
  console.log(findPrevious(SLL, 'Apollo'));
}

main();
