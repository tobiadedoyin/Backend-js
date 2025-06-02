//class
// - solid principle - single responsibility, open and close principle
// liskov substitution, interface segregation, dependency inversion
// - oop 
//4 pillars of oop
// Abstraction 
// Encapsulation
// inheritance
// polymprphism
// - acid principle
// - dry
// - kiss

class MyClass {
//    name1 = "wale";
    constructor(count = 1){
        this.count = count;
    }
getName(){
    console.log(`${this.count += 10}`)
}
   
}
let myClass = new MyClass(10);
// myClass.getName();

 

let myAni = new Animal("dog");
// myAni.run(12)
myAni.stop()


 