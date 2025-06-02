//  Given a string, return the reverse of that string
// function reverseString(str) {
// //   return str.split("").reverse().join("");
// let reversed = "";
// for (let i = str.length - 1; i >= 0; i--){
//     reversed += str[i];
// }
// return reversed;
// }
// let word1 = "favour";
// let word2 = "emmanuel";
// console.log(reverseString(word1));
// console.log(reverseString(word2));
// Return the factorial of a given number.
//n! = n * n-1 * n-2------
// function fact(n) {
//     let output = 1;
//     for (let i = num; i >= 2; i--){
//         output *= i;
//     }
//     return output;
// }
// let num = 5;
// console.log(fact(num))
// Check if a Word is a Palindrome
// Find the Longest Word in a Sentence
function long(sen) {
    let words = sen.split(" "); //["I", "am", "a", "living", "soul"]
    let longest = ""; //0, 1, 2, 6

    for (let word of words){
        if (word.length > longest.length){
            longest = word;
        }
    }
    return longest;
}
console.log(long("I am a living soul"))
/*FizzBuzz - Print numbers from 1 to 20. Replace:
Multiples of 3 with "Fizz"
Multiples of 5 with "Buzz"
Multiples of both with "FizzBuzz"
*/

/**
 * keyed collection
 * map
 * set
 */