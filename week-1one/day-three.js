/** built in method
 * string methods
 * number method
 * array and array methods
 * object and object methods
 * math functions
 * date
 * json
 * console
 */
//string method
// let sample = " mississippi "; //length = lastIndex + 1
// console.log(sample.length);
// console.log(sample.charAt(sample.length - 1));
// console.log(sample.lastIndexOf("ss"));//10
// console.log(sample.concat(" river"));
// console.log(sample.includes("ssl")); //
// console.log("one".repeat(5));//oneoneoneone
// console.log(sample.replaceAll("ss", "ww"));
// console.log(sample.search("p"));
// console.log(sample.slice(0, 5));
// console.log(">>",sample.substring(-1));
// console.log(sample.split("s"));
// console.log(sample.toUpperCase());
// console.log(sample.valueOf())
// let phoneNumber = "9056787657";

// console.log(phoneNumber.padStart(11, "0"))

// number method
// let num = 76;
// console.log(num.toFixed(3));
// console.log(Number.isNaN(num));

//array
let arr1 = [1,13,25,6,3];
let arr3 = new Array(10);
let arr2 = Array(5);
// console.log(arr1.length, arr2.length, arr3.length);
// console.log(arr1[2]) //5
arr2.fill(3);
// console.log(arr2.length);
// console.log(arr1.lastIndexOf(3));
// console.log(arr1.concat(arr2));
// console.log([...arr1, ...arr2]);
// const newArr = arr1.unshift(5)
// const popA = arr1.shift();
// const nem = arr1.slice(1,3)
// const nem = arr1.splice(2, 0, 8);
// console.log(nem); //[1,3,5] [5,6]
// console.log(arr1); //[1,3,5] [1,3,1,3]
// console.log(arr1.includes(3))
// arr1.forEach((item, index, array) => console.log(index, " ", item));
// arr1.map((item) => console.log(item * item))
// arr1.filter((item) => console.log(item % 2 !== 0))
// let arrSum = arr1.reduce((current, accumulator) => current + accumulator);
// arr1.find(x => x > 3)
// arr1.join("")
// const rev = arr1.reverse();
// console.log(rev);
const sort = arr1.sort((a, b) => b - a);

let some = arr1.every(x => x> 3)
console.log(some);



/**
 * loops and iterators
 */