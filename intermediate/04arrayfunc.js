//------------------------------------
//IMPORTANT ARRAY FUNCTIONS
//------------------------------------

// there are several functions in array but some are important for a better experience
// 🔵fill() = fills the array section with a value
var arr = [2, 4, 52, 235, 642, 234, 562, 3];
console.log(arr.fill("yo"));
/*[
    'yo', 'yo', 'yo',
    'yo', 'yo', 'yo',
    'yo', 'yo'
  ]*/
// you can also specify start and end points
console.log(arr.fill("hi", 2, 5)); //[2,5)
/*
[
  'yo', 'yo', 'hi',
  'hi', 'hi', 'yo',
  'yo', 'yo'
]*/

// 🔵 filter() = used to filter array based on a criteria
var arr2 = [43, 34, 343, 412, 34, 657, 134, 2342];
console.log(arr2.filter((e) => e % 2 != 0)); // filter elements that are not even
// [ 43, 343, 657 ]

// 🔵 slice() = get a part of the complete array
const sliceres = arr2.slice(2, 5); //[2,5)
console.log(`slice res: ${sliceres} arr2: ${arr2}`); //slice res: 343,412,34 arr2: 43,34,343,412,34,657,134,2342
//splice() = replace a part of the array with some other element
const spliceres = arr2.splice(1, 2, 0); // start from pos.2 delete 4 elements, shift remaining and insert 0 in between
console.log(`splice res: ${spliceres} arr2: ${arr2}`); //splice res: 34,343 arr2: 43,0,412,34,657,134,2342
