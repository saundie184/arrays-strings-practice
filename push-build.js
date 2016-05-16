'use strict';
// Write push() and buildOneTwoThree() functions to easily update and initialize linked lists.
//Try to use the push() function within your buildOneTwoThree() function.


function Node(data) {
    this.data = data;
    this.next = null;
}

function push(head, data) {
    // return new Node(head, data);
}

function buildOneTwoThree() {
    // Go.
}

var chained = null
chained = push(chained, 3);
chained = push(chained, 2);
chained = push(chained, 1);
console.log(push(chained, 8)); //=== 8 -> 1 -> 2 -> 3 -> null
// console.log(push(1,2));
