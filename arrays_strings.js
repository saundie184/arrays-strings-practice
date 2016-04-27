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

// console.log(isUnique('today')); //true
// console.log(isUnique('apple')); //false

//One Away

function oneAway(str1, str2) {
    //check if strings are equal, return true if they are
    if (str1 === str2) {
        return true;
    } else if (str1.length === str2.length) {
        var len = str1.length;
        var charactersToReplace = [];
        //check if lengths are equal, if so, find where a letter is not the same
        // return 'equal lengths';

        //make array of first string, if it matches str2, remove it. if it does not, add it.
        for (var l = 0; l < len; l++) {
            charactersToReplace.push(str1[l]);
        }
        //loop through second string
        // console.log(charactersToReplace);
        for (var m = 0; m < len; m++) {
            for (var n = 0; n < charactersToReplace.length; n++) {
              // console.log(charactersToReplace);
                if (str2[m] === charactersToReplace[n]) {
                  // console.log(charactersToReplace[n]);
                    charactersToReplace.splice(n, 1);
                }
            }
        }
        // console.log(charactersToReplace);
        if (charactersToReplace.length <= 1) {
            return true;
        } else{
          return false;
        }


    } else if (str1.length > str2.length) {
        //loop through each letter
        var arr = [];
        for (var i = 0; i < str1.length; i++) {
            arr.push(str1[i]);
        }
        for (var j = 0; j < str2.length; j++) {
            for (var k = 0; k < arr.length; k++) {
                if (str2[j] === arr[k]) {
                    arr.splice(k, 1);
                }
            }
        }
        if (arr.length <= 1) {
            return true;
        }
    }
}

console.log(oneAway('pale', 'ple')); //true
console.log(oneAway('pales', 'pale')); //true
console.log(oneAway('pale', 'bale')); //true
console.log(oneAway('pale', 'bake')); //false
console.log(oneAway('apple', 'aple')); //true
