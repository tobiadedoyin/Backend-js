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