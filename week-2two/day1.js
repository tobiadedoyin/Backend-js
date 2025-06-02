// /**
//  * keyed collection
//  * map
//  * set
//  */

const { error } = require("console");

// //map
// let myMap = new Map();
// console.log(typeof myMap);
// myMap.set("name", "favour");
// myMap.set(1, "tobi");
// myMap.set("1", "kunle");

// // console.log(myMap.get("1"));
// // console.log(myMap.delete("name"));
// // console.log(myMap.has("name"));
// // console.log(myMap.size);
// // myMap.clear()
// myMap.set(2, "togo").set(3, "lagos").set("4", "darhomey");
// // console.log(myMap.keys())

// let arr = [ 1,3,4,2,1,2,3,5,6,7];
// // set
// let set = new Set();
// // console.log(set)
// set.add(1);
// set.add("food");
// set.add(3);

// console.log(set.delete(1));
// for (let ele of set) {
//     console.log(ele);
// }
//  /**
//   * function
//   */

//  //
// //  function person(a) {
// //     console.log("function expression");
// //     let c = 45;
// //     a.forEach(element => {
// //         let b = 2
// //         a * b * c;
// //     });
// //     console.log(b);
// //  }
// //  let sum = person([6,4,5,6,1]);
// // console.log(sum);

// let person2 = function() {
//     console.log("function declaration");
// }

// let person3 = () => console.log("function declaration");

// //IIFE - Immediately Invoked function expression
// (function(){
//     console.log("iife")
// })()

// school(() => {

// })
function tryme() {
try{
    let s = 0 / 0;
    if (Number.isNaN(s)) {
        throw new Error("it is not divi");
    }
} catch (e) {
    console.log(e);
} finally{
    console.log("end of class")
}
}

tryme();

//type of 
//
eval() - EvalError
AggregateError
