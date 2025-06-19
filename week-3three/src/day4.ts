//type guard

class Bird {
    fly() {
        console.log('flying.....')
    }
}

const hen = new Bird();
console.log(hen instanceof Bird);

// TYPE PREDICATES
function isString(value: unknown): boolean {
    if(typeof value === "string"){
        return true;
    }

    return false;
    // return typeof value === "string";
}

//assertion
//as

const a = "hello" as any;
const b:string | null = "yu";
console.log(b!.length)

const list = [7, 8, 9] as const;

let c = <const> 67;
let obj = {
    name : {
        age: {
            book: 45
        }
    }
}

obj!.name!.age!.book;
obj?.name?.age?.book

type T = {
    name: string
}

type Y = {
    age: number;
    alpa: T;
}

class Road {
    a:number = 0;
    b: number = 0;

    constructor(a: number, b: number);
    constructor(){};
    

}
let ro = new Road(2,5);

//generic
function identity<T>(arg: T[]): T[] {
return [];
}

identity(["string", 9, true])

function two (arg: any){

}

two(67)

//decorators
function first() {
    return function(target: any, propertyKey: string, descriptor: PropertyDescriptor) {

    }
}

class tu {
    // @first()
}

//UTILITY TYPES - PARTIAL, readonly, pick, omit 
interface User {
    name: string;
    age: number;
    email: string;
    password: string;
}

let input: User;

function createUser(user: User): Partial<User> {
    //
    return {
        name : "kemi",
        age: 30,
        // email:"oiugfdxcghjkl;",
        // password:"irurrrhrfff",
        // ...user
    }
}

const newUser = createUser({name: "tobi", email: "", age: 70, password: "tuttuttyt"});
console.log(newUser)

type User2 = Omit<User, "password">

let uyr: User2;

//pick
interface Todo {
    title: string;
    desc: string;
    completed: boolean
}

type PickTodo = Pick<Todo, 'title' | 'desc'>
type LoginUser = Pick<User, 'email' | 'password'>

// Readonly
const readonlyTodo: Readonly<Todo> = {
    title: "mee",
    desc: "",
    completed: true
}

//Record, Exclude, Extracted, Awaited
