/**
 * Section
 * - Javascripts
 * - Typesrcipt and Version control system
 * - Nodejs
 * - Express
 * - Database
 * - Nestjs
 * - Docker
 * - Introduction to System Architecture
 * - Job readiness
 */


// Datatype
  /*
  primitive
  */
 // string, number, boolean, null, undefined, Bigint and symbol

 let name1 = "tobi";
 let name2 = 'favour';
 let name = `${name1} ${name2} class`
 console.log(name);

 // number 
 let num = 2;
 let dec = 2.0;
 let hexa  = 0x58585;
 let bi = 0b100110;
  
 // boolean 
 let bool = true;
 let bol = false;


 // undefined
 let nem;
 console.log("undefined>>>>", typeof nem);

 // null
 let bif = null;
 console.log("null type", typeof bif);

//bigint
console.log(Number.MAX_SAFE_INTEGER);
let numy = 90071992547409918966895858n;
console.log(numy)

//symbol
let id = Symbol('id');
console.log(typeof id);

// non-primitive
// object
let obj = {
    nam: name1,
    age: 46 
}

//array
let arr = ["tobi", 1, true];

/**
 * variable declaration - var, let, const
 */
//hoisting
console.log(kun);
var kun = 2;

//block scoped
let a = 2;
console.log(">>> 1", a)

for ( let i = 0; i < 5; i++){
    a++
    console.log("2 >>>>", a);
}

console.log("3", a);


/*
- camelCase anotherClass
-pascal AnotherClass
-snake another_class
*/

// type casting
let men = 45;
men = "school";

let value = true;
value = String(value); 

//number conversion
let dig1 = 4;
let dig2 = "4";

console.log(dig1 + dig2);
console.log(dig1 * dig2);
console.log(dig1 / dig2);
console.log(dig1 - dig2);

//boolean convertion
console.log(Boolean(0)); 
console.log(Boolean(''))
console.log(Boolean(NaN));
console.log(Boolean(null))
console.log(Boolean(false))
console.log(Boolean(undefined))

