//Maps are very important data structure in any language. They are extremeley powerful and are preferref for theis small time complexities

var mapobj = new Map();

mapobj.set(1, "one"); // this is how to set a value in a  map. 1 => key, 'one'=> value
mapobj.set(2, "two");
console.log(mapobj); // Map(2) { 1 => 'one', 2 => 'two' }
console.log(mapobj.keys()); // [Map Iterator] { 1, 2 }
console.log(mapobj.values()); // [Map Iterator] { 'one', 'two' }

// mpre info on these functions at : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map

// we normally use for .. of loop in order to traverse the maps
for (let [key, value] of mapobj) {
  console.log(`key : ${key}, value :${value}`);
}
/*
key : 1, value :one
key : 2, value :two
*/

// ❗if using foreach the focus is more on the values than the indexes

mapobj.forEach((key) => console.log(`${key}`));
/*
one
two
*/
