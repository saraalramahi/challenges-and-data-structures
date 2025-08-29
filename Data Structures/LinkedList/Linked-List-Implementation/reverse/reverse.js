 "use strict";
const LinkedList = require('../LinkedList');

function demo() {
  const list = new LinkedList();
  [1,2,3,4].forEach(n => list.append(n));
  console.log('Original List:', 'Head --->', list.toArray().join(' ---> '), '---> Null');

  list.reverse();
  console.log('Reversed List:', 'Head --->', list.toArray().join(' ---> '), '---> Null');

  // single node
  const single = new LinkedList();
  single.append(10);
  console.log('Original: Head--->', single.toArray(),"--->Null");
  single.reverse();
  console.log('Reversed: Head--->', single.toArray(),"--->Null");

  // empty
  const empty = new LinkedList();
  console.log('Original List: Head--->', empty.reverse()); // should be null
    console.log('Reversed List:  Head--->', empty.reverse()); 

}

demo();
