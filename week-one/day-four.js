 /*
 * object and object methods
 * math functions
 * date
 * json
 * console
 */

//object and object methods
// let obj =  {
//     name: "tobi",
//     age: 34,
//     isMarried: true,
//     nameOfKids: ["kemi", "favour", "emma"],
//     school: {
//         name: "Au",
//         location: "Ede",
//         course: "computer"
//     },
//     getInfo() {
//         console.log(`This is ${this.name} a student of ${this.school.name}`)
//     } 
// };
// obj.dob = new Date("01/01/2003");
// console.log(obj)
// Object.freeze(obj);
// unModifiable.food = "eba";
// obj.food = "eba";
// console.log(unModifiable);
// console.log(">>>>>>>>>")
// console.log(obj)
// obj.getInfo()
// console.log(obj.age)
//object method
// Object.seal(obj);
// obj.age=40;
// obj.food = "eba";
// console.log(obj);
// Object.isFrozen(obj);
// Object.isSealed(obj);
// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));
 let obj2 = {
    capital: "Abuja"
 }

//  const newObj = Object.assign(obj, obj2);
//  console.log(newObj);
//  console.log(obj)
//  console.log(obj2)

// for (let keys in obj){
//     console.log(keys + "1");
// }

// math functions
let num = -4;
// console.log(Math.abs(num))// 
// console.log(Math.pow(4, 2))
// console.log(Math.sqrt(4))
// console.log(Math.random())
// let arr =[2,4,5,6,7];
// console.log(Math.max(5,7,9))
// let dec = 6.3;
// console.log(Math.ceil());
// console.log(Math.floor())
// console.log(Math.round())

//object is an instant of a class
// let obj2 = new Object();

//Date
// let date = Date.now();
// console.log(date);
// console.log(new Date())
// console.log(Date.parse("12-09-1998"))

// let time = new Date();
// time.

//json
let json = {
    "name": "tobi",
    "age": 24,
}
// console.log(JSON.stringify(obj2));
// let newr = JSON.parse(json);
// console.log(newr);

 /**
 * loops and iterators
 */
// for loop
// for (let i = 0; i < 100; i+=4) {
//     console.log(i);
// }
//while loop
let arr = [ 1, 3, 5, 6];
//  while (arr.length >= 1){
//     console.log(arr.pop());
//  }

//do ...while
let i = 2
do{
console.log("hurry")
}while(i > 2);

//for >> of
// for (let ele of arr) {
//     console.log(ele);
// }

for(let i = 0; i < 10; i++){
    console.log(i)
    if (i === 5) continue
}
// call, bind, apply
