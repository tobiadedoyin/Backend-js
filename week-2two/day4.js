//static 
class User {
    static name = "oluwadarasimi";
    login(){
        console.log("welcome");
    }

    static logout() {
        console.log("good bye");
    }
}

class Animal {
    static planet = "venus";

    constructor(name, speed) {
        this.name = name;
        this.speed = speed;
    }

    run(speed = 0) {
        this.speed += speed;
        console.log(`${this.name} runs with speed ${this.speed}`)
    }

    static compare(animalA, animalB) {
        return animalA.speed - animalB.speed;
    }
}

class Rabbit extends Animal {
    hide(){
        console.log(`${this.name} hides!`)
    }
}

let rabbits = [
    new Rabbit("rabbi", 10), 
    new Rabbit("dannis", 5)
]

rabbits[0].run(); 
console.log(Rabbit.planet)

// -public, private, protected

//built in class
class TryArray extends Array {
    isEmpty() {
        return this.length === 0;
    }

    isFave(n){
        return this.indexOf(n);
    }

    isNotDuplicate(){}
}

let arr = new TryArray(1,2,3,4,5,6,7,8,9,0);
console.log(arr.isFave(5));
console.log(arr.isEmpty());
console.log(arr instanceof Array)

// 1. create any array method of your choice
// read time and space complexity - big 0 notation