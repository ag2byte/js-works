//--------------------------
// ARRAYS
//--------------------------
var arr1 = ["hi", "hello", "bonjour"];
var arr2 = new Array("bye", "see you", "sayonara");
console.log(arr1, arr1[2], arr2[2]); // [ 'hi', 'hello', 'bonjour' ] bonjour sayonara

// arrays have a lot of methods for use
console.log(arr1.length); // 3
// in js since there is no type we can easily have arrays of multiple types
var arr3 = ["hello", 21, true];
console.log(arr3); // [ 'hello', 21, true ]
// but is this a gooo data structure ? ⛔ you should probably use something like a dictionary

console.log(arr2.pop()); // this removes and returns the last element of the array
console.log(arr2); // [ 'bye', 'see you' ]

// adding element at the front👉🏻 not very cool as the prcocess is expensive

arr2.unshift("konichiwa");
console.log(arr2); // [ 'konichiwa', 'bye', 'see you' ]
//removing the 1st element: again expensive
arr2.shift();
console.log(arr2); // [ 'bye', 'see you' ]

// gettting position of an element:
console.log(
  `hello at: ${arr3.indexOf("hello")} test at: ${arr3.indexOf("test")}`
); // hello at: 0 test at: -1
// more on arrays: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array
