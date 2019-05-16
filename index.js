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

  // SLL.insertLast("Tauhida");

  //SLL.remove('squirrel');

  // console.log(SLL.find("Athena"));
  //console.log(SLL.find('Boomer'))

  // SLL.insertAfter("Helo", "Hotdog");

  // console.log(SLL.find('Helo'))

  SLL.insertBefore("Boomer", "Athena");
  console.log(SLL.find("Athena"));
  // SLL.find("Apollo");
}

main();
