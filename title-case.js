'use strict';

function titleCase(title, minorWords) {

var wordArray = title.split(' ');
var minorWordsArray = title.split('');
//loop through title
for(var i = 1; i <= wordArray.length-1; i++){
  console.log(wordArray[i]);
  for(var j = 0; j <= minorWordsArray.length-1; j++){
    console.log(minorWordsArray[j]);
  }
}
//push all the words to an array that are not in minorWords
//always push the first word to the array

//uppercase each first letter of each item in the array

return wordArray;
}


// console.log(titleCase('a clash of KINGS', 'a an the of')); // should return: 'A Clash of Kings'
// console.log(titleCase('THE WIND IN THE WILLOWS', 'The In')); // should return: 'The Wind in the Willows'
// console.log(titleCase('the quick brown fox')); // should return: 'The Quick Brown Fox'
// function test() {
//    var a;
//    function foo() {
//       return 2;
//    }
//
//    console.log(a);
//    console.log(foo());
//
//    a = 1;
// }
//
// test();

var fullname = 'John Doe';
var obj = {
   fullname: 'Colin Ihrig',
   prop: {
      fullname: 'Aurelio De Rosa',
      getFullname: function() {
        console.log(this.fullname);
         return this.fullname;
      }
   }
};

// console.log(obj.prop.getFullname());

var test = obj.prop.getFullname;

console.log(test.call(obj.prop));
