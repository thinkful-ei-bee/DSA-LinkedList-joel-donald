const ll = require("./linkedList.js");

function displayList(list) {
  let currNode = list.head;
  let prevNode = currNode;
  
  while (currNode.next !== null) {
    if (currNode.next === null) {
      return;
    } else {
      console.log(currNode.value)
      prevNode = currNode;
      currNode = currNode.next;
    }
  }
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

  // SLL.insertLast("Tauhida");

  // SLL.remove('squirrel');

  // SLL.insertBefore("Boomer", "Athena");

  // SLL.insertAfter("Helo", "Hotdog");

  SLL.insertAt(3, 'Donald');
  
  displayList(SLL);
  
}

main();
