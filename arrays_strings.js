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
        } else {
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

// console.log(oneAway('pale', 'ple')); //true
// console.log(oneAway('pales', 'pale')); //true
// console.log(oneAway('pale', 'bale')); //true
// console.log(oneAway('pale', 'bake')); //false
// console.log(oneAway('apple', 'aple')); //true

//Give me Diamond - Code Wars
// You need to print a shape on the screen using asterisk ("*") characters.
// The shape that will be returned from print method resembles a diamond,
//where the number provided as input represents the number of *’s printed on the middle line.
// The line above and below will be centered and will have 2 less *’s than the middle line.
//This reduction by 2 *’s for each line continues until a line with a single * is printed at the top and bottom of the figure.

// Return null if input is even number (as it is not possible to print diamond with even number).

function diamond(n) {
    //account for even inputs
    if (n % 2 === 0 || n === 0 || n < 0) {
        return null;
    }
    var diam = '*';

    //print *\n and then add 2 until it reaches n
    for (var i = 0; i < n; i += 2) {
        // console.log(i);
        var top = '';
        for (var j = 0; j < i; j++) {
            top += '*';
        }
        diam += top + '\n';
    }
    for (var k = n; k > 0; k -= 2) {
        // console.log(k);
        var bottom = '';
        for (var j = 0; j < k; j++) {
            bottom += '*';
        }
        diam += bottom + '\n';
    }
    return diam;
}

// console.log(diamond(9));

function urlify(str, len) {
    var newString = "";
    for (var i = 0; i < len; i++) {
        if (str[i] !== " ") {
            newString += str[i];
        } else if (str[i] === " ") {
            newString += "%20";
        }
    }
    return newString;
}

// console.log(urlify("Mr John Smith   ", 13));

function compress(str) {
    var prev;
    var compStr = "";
    var count = 1;
    for (var i = 0; i < str.length; i++) {
        if (prev === undefined) {
            compStr += str[i];
            prev = str[i];
        } else if (str[i] === prev) {
            count++;
        } else {
            compStr += count;
            compStr += str[i];
            prev = str[i];
            count = 1;
        }
    }
    compStr += count;
    if (str.length > compStr.length) {
        return compStr;
    } else {
        return str;
    }
}

// console.log(compress("aabbbcddd"));

// console.log("i'm a lasagna hog".split("").reverse().join("")); //returns mirror

var foo = {
    n: 1
};
var bar = foo;
foo.x = foo
foo = {
    n: 2
};
// console.log(foo);

// console.log('one');
setTimeout(function() {
    // console.log('two');
}, 10);
// console.log('three');
