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

//-------------------------------------------
// NEW KEYWORD
// ------------------------------------------

var proto = function (prop1, prop2) {
  this.prop1 = prop1;
  this.prop2 = prop2;
  this.display = function () {
    console.log(` prop1: ${this.prop1} ,prop2: ${this.prop2}`);
  };
};

//here proto is a prototype, similar to what we know as class
var obj3 = new proto("hello", 69);
console.log(obj3); // proto { prop1: 'hello', prop2: 69, display: [Function (anonymous)] }
obj3.display(); // prop1: hello ,prop2: 69

// prototype
// this is a very handy feature which allows you to add properties to the prototype withpuy going to the prototype definition

proto.prototype.rev = function () {
  console.log(` prop2: ${this.prop2} ,prop1: ${this.prop1}`);
};

obj3.rev(); //  prop2: 69 ,prop1: hello
// more on prototype: https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes
