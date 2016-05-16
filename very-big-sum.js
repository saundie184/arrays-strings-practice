'use strict';

// You are given an array of integers of size NN. You need to print the sum of the elements in the array,
//keeping in mind that some of those integers may be quite large.
//
// Input
// The first line of the input consists of an integer NN. The next line contains NN space-separated integers contained in the array.
//
// Constraints
// 1≤N≤101≤N≤10
// 0≤A[i]≤10100≤A[i]≤1010
//
// Sample Input
// 5
// 1000000001 1000000002 1000000003 1000000004 1000000005
//
// Output
// Print a single value equal to the sum of the elements in the array. In the above sample, you would print 5000000015
process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function(data) {
    input_stdin += data;
});

process.stdin.on('end', function() {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var sum = 0;
    for (var i = 0; i < n; i++) {
        sum += arr[i];
    }
    console.log(sum);

}


// main(5, [1000000001 1000000002 1000000003 1000000004 1000000005]);
