/**
 * Equality comparison
 * - loosely equal"==", strictly equal"===", !=, !==
 */
// console.log(null == {})
// console.log(null === {})
// const obj = {
//     a: 4
// }

const { measureMemory } = require("vm");

// const copy = obj;
// copy.a = 20;

// console.log(obj.a);
// console.log(copy.a);
/**
 * Expressions and Operators
 * - conditional operator (tenary operator)  condition ? val_for_true : val_for_false
 * - unary operator: +, - , !, ++, -- (pre, post)
 * - assignment operator: =, +=, -=, *=, /=, %=
 * - comparison operator: >, <, >=, <=, ==, ===, != and !==
 * - Arithemetic: +,-,*,**,/,%
 * - logical operator: ||, &&, !, ?? - (Nullish Coalescing)
 */
let a = 20;
// (a > 20 || a < 20) ? " favour" : a < 20 ? "1": a === 20 ? "1": "0";
// console.log(typeof +a) 
// console.log(++a);// 21 - 21
// console.log(a--);// 21 - 21
// console.log(a++);// 20 - 20
// console.log(a) //21 21
a += 1; // a = a + 1 // falsy - nan, null, false, undefined, 0, ''
// console.log(a % 4) // 
// console.log(null || undefined) // false        
// console.log('' && NaN) // false
// console.log(0 && 0) // false
//nullish coalescing ??
// left ?? right;
// let b;
// let c = "favour"

//  b ?? c;
/**
 * control flow - conditionals: if, if..else, else if,switch statement
 */
// let key = 40;
// if (b > 30){
//     console.log("happy");
// } else if (b < 30){
//  console.log("sad");
// } else {
//     console.log("kilonsele")
// }

// switch, case, break, default
// let key = 40;
// let output;
// switch(true) {
//     case key > 30:
//         output = "happy";
//         break;
//     case key < 30: 
//         output = "sad";
//         break;
//     default:
//         output= "kilonsele";
//         break;
// }
// console.log(output);
// console.log("nu")
let day = "monday";
let message = [];
switch (day) {
    case "monday": 
    case "tuesday":
    case "wednessday":
    case "thursday":
    case  "friday":
        message.push ("weekdays");
        break;
    case "saturday":
    case "sunday":
        message.push("weekend");
        break;
    default:
        message.push('not for us');
        break;
}
console.log(message)

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