'use strict';

///Binary Addition
// Implement a function that successfully adds two numbers together and returns their solution in binary.
// The conversion can be done before, or after the addition of the two.
//
// The binary number returned should be a string!
var convert = function(decimal) {
    var binary = "";
    var place = decimal;
    var highestExp;
    for (var i = place; i >= 0; i--) {
        if (Math.pow(2, i) < place) {
            binary += '1';
            highestExp = i;
            break;
        }

    }
    // place = decimal - Math.pow(2, highestExp);
    // console.log(place);
    if (Math.pow(2, highestExp) < place) {
        binary += '1';
        var diff = decimal - Math.pow(2, highestExp);
        highestExp = highestExp-1;
        console.log(diff);
        // place = decimal - place;
        // console.log(highestExp);
        console.log(place);
    } else {
        binary += '0';
        place = decimal - Math.pow(2, highestExp);
        console.log(place);
    }

    return binary;
};

function addBinary(a, b) {
    // return a + b;
    return convert(a);
}
// console.log(addBinary(13, 89));
// console.log(convert(13));
// console.log(typeof null);
// console.log(typeof NaN);
// console.log(isNaN(x))
