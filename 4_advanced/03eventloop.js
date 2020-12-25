// in js event loop is a big part of making the frontend on websites load faster
// // event loop 👉🏻 loop until event occurs

// while (event.waitformessage())
//     event.execute()

const f1 = () => console.log("this is f1");
const f2 = () => {
  setTimeout(() => console.log("waiting element"), 3000); // this will execute after 3 seconds from start
  console.log("this is f2");
};
const f3 = () => console.log("this is f3");

f1();
f2();
f3();

/*
this is f1
this is f2
this is f3
waiting element // but this loads after 3 seconds even though it was written before this is f2 👉🏻 change in the queue positions

*/
