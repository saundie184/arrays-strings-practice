'use strict';
//check if a string has unique characters

function isUnique(string) {
    var map = {};
    var arr = Object.keys(map);
    for (var i = 0; i < string.length; i++) {
        if (map[string[i]]) {
            return false;
        } else {
          map[string[i]] = 1;
        }
    }
    // console.log(map);
    return true;
}

console.log(isUnique('today')); //true
console.log(isUnique('apple')); //false
