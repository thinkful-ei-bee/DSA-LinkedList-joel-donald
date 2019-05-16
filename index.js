const ll = require("./linkedList.js");

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


  SLL.insertAt(0, 'Donald');
  console.log(SLL.find('Donald'));
}

// function displayList(list) {
//   while (currNode.next !== null) {
//     if (currNode.next === null) {
//       return console.log(`Can't find ${searchForItem}`);
//     } else {
//       prevNode = currNode;
//       currNode = currNode.next;
//     }
//   }
// }

main();
