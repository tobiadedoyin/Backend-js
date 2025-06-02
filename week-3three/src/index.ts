import { unstable_Blocker } from "react-router-dom";

console.log("we are here again")
let word = "book"; // string
let digit = 45; // number
let isDigit = true; // boolean
let sur = null; //null
let book; //undefined

//void
function snoop(){
    return;
}

let nam: any;
nam = 89;
nam = "oiuytrtyui";

let nam2: unknown;
nam2=false;

function school (a: unknown) {

}

function school2(b: string): never {
throw new Error(b);
}
school2("ui")
