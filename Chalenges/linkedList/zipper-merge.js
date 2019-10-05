function merge(list1, list2) {
  let one = list1.head;
  let two = list2.head;
  let hold1, hold2;
  while(one && two) {
    hold1 = one.next;
    hold2 = two.next;

    if(two) {
      one.next = two;
    }  
    if(hold1) {
      two.next = hold1;
    }

    one = hold1;
    two = hold2;
    if(!hold1 && !hold2) return;
  }
  
}

module.exports = merge;