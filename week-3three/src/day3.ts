// array
// const number: number[] = [4];
// number.push(5);

// const number2: Array<number> = [5,6,7,8];

// tuple
type numberString = [string, number]

function faveTuple(book: readonly[string, number]){
 const a = book[1]
}

faveTuple(["", 6])

// object
function objType(pt: {a: number; b: boolean}){
    console.log(pt.a);
    console.log(pt.b);
}

let obj1: {name: string, age: number, isMarried: boolean, dob: number} = {
    name: "tobi",
    age: 45,
    isMarried: false,
    dob: 98
}

const vat: string = obj1.name;

let part = 67;

interface Point {
    x: number,
    y: number
}

interface Point3 {
    a: number,
    b: number
}

type Point2 = {
    x: number,
    y: number
}

type Point4 = {
    a: number,
    b: number
}

type Point24 = Point2 & Point4;

let pto: Point24 = {x: 10, y: 30, a: 8, b: 9}

let pt: Point = {x: 10, y: 30};
let pt2 : {x: number, y:number} = pt;

//combining types
//union |

let numsum: string | number = 50;
numsum = "boy";

function print2(id: number | string, id2: number| string): number{
return Number(id) + Number(id2);
}
print2("","po")

let alpObj = {
    a: 1,
    b: 2
}

enum alp {
    a=1,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z
}
function pot(a: string): number{

 return 6;
}

//read the difference btw interface and type

type Name = string | number | boolean;

let p: Name = 9;

//keyof

interface User {
    name: string;
    age: number
}
type UserKeys = keyof User


