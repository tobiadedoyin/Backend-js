interface Person {
    namme: string,
    age: number,
    ismarr: boolean
}

function greet(person : Person) {
return `${person.namme}  ${person.age}   ${person.ismarr}`
}
  
 class Car implements Person {
    make: string;
    model: string;
    year: number;
    namme: string;
    age: number;
    ismarr: boolean;
    dist: number;

    constructor(){
        this.make = "Toyota";
        this.model = "camry";
        this.year = 2025;
        this.namme = "fave";
        this.age = 45;
        this.ismarr = false
        this.dist = 300;
    }
     

    public drive() {
        this.millage()
        console.log(`Driving my ${this.make} ${this.model} ${this.year} `)
    }

    private millage() {
       return this.dist * 1000;
    }

    protected fronter(){
        console.log("object");
    }
 }

 let nCar = new Car();
 nCar.drive()
 

 class Mercedes extends Car {
    public gear() {
        this.fronter();
    }
 }

 class School<T> {
    primary: T;

    constructor(value: T) {
        this.primary = value;
    }

 }
 const au = new School(56);

 const oau = new School(true);

 abstract class Base {
    abstract getName(): string
    printName() {
        console.log("hello, " + this.getName())
        return "hello";
    }
 }

 class Derived extends Base {
     getName(): string {
         return "world";
     }
 }

 const d = new Derived();
 d.printName();

 enum Direction {
    West = "WEST",
    South = "SOUTH", 
    East = "EAST",
    North = "NORTH"
 }

 const osun = Direction.West;
 console.log(osun);

 interface Nigeria {
    abuja : Direction.North

}




