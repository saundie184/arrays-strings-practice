'use strict';

function titleCase(title, minorWords) {

    var wordArray = title.split(' ');
    var titleCase = '';
    // var minorWordsArray = minorWords.split(' ');
    // var titleCaseArray = [title[0].toUpperCase()];
    function capitalize(w) {
        var first = w.charAt(0).toUpperCase();
        var rest = w.substr(1);
        return first + rest;
    }
    //ignore minor words
    // var minorWordsArr = typeof minorWords === 'undefined' ? [] : minorWords.split(' ').map(function(w) {
    //     return w.toLowerCase();
    // });

    for (var i = 0; i < wordArray.length; i++) {
        // console.log(wordArray[i]);
        titleCase += capitalize(wordArray[i]) + ' ';
    }

    //uppercase each first letter of each item in the array

    return titleCase;
}


console.log(titleCase('a clash of KINGS', 'a an the of')); // should return: 'A Clash of Kings'
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

// test();

// var fullname = 'John Doe';
// var obj = {
//    fullname: 'Colin Ihrig',
//    prop: {
//       fullname: 'Aurelio De Rosa',
//       getFullname: function() {
//         console.log(this.fullname);
//          return this.fullname;
//       }
//    }
// };
//
// // console.log(obj.prop.getFullname());
//
// var test = obj.prop.getFullname;
//
// console.log(test.call(obj.prop));
