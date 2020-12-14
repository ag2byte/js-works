//------------------------------------
//OBJECTS
//------------------------------------
var obj = {
  name: "byte",
  age: 22,
  sex: "male",
  pushups: 0,
}; // this is a dictionary object, similar to dictionaries in python

console.log(obj.name); //byte
console.log(obj["sex"]); //male // these are 2 ways to access object elements
// we can make changes to the object as well
obj.pushups = 4;
console.log(obj.pushups); //4

var obj2 = {
  repo: "js-works",
  github_id: "ag2byte",
  randArr: [3214, 23, 1, 32, 143, 51, 13],
  evenarr: [],
  isEven: function () {
    // this is a function inside of an object
    console.log(this.randArr.filter((e) => e % 2 === 0));
    // this keyword is used to refer to the current object
    this.evenarr = this.randArr.filter((e) => e % 2 === 0);
  },
};
obj2.isEven(); //[ 3214, 32 ]
console.log(obj2.evenarr); // [3214,32]
