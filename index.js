const ll = require("./linkedList.js");

function displayList(list) {
  let currNode = list.head;
  console.log(currNode.value);

  while (currNode.next !== null) {
    if (currNode.next === null) {
      
      return;
    } else {
      
      currNode = currNode.next;
      console.log(currNode.value);
    }
  }
}

function countList(list) {
  let currNode = list.head;
  let count = 0;

  if (!currNode) {
    return 0;
  }
  else {
    count++;
  }

  while (currNode.next !== null) {
    if (currNode.next === null) {
      return count;
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

function findLast(list) {
  let currNode = list.head;

  if (!currNode) {
    return null;
  }

  while (currNode.next !== null) {
    if (currNode.next === null) {
      return currNode;
    } else {
      currNode = currNode.next;
    }
  }

  return currNode;
}

function reverseList(list) {
  let oldHead = list.head;
  let head;
  let postion;
  let reachedEnd = false;
  if (!currNode) {
    return null;
  }
  else {
    position = 0;
  }

  while (currNode.next !== null) {
    if (currNode.next === null) {
      head = currNode;
      let reachedEnd = true;
      currNode.next = oldHead;
    }
    position++;
  }
  return list;
}

function main() {
  // 2.)
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

  // 3.)
  displayList(SLL);
  // console.log(countList(SLL));
  // console.log(isEmpty(SLL))
  // console.log(findPrevious(SLL, 'Boomer'));
  // console.log(findLast(SLL));

  // 4.) 
  console.log(reverseList(list));
}

main();


