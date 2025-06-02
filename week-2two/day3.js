// class inheritance
class Animal {
    constructor(name) {
        this.name = name;
        this.speed = 0;
    }

    run(speed) {
        this.speed = speed;
        console.log(`${this.name} runs at ${this.speed}`)
    } 

    stop(){
        this.speed = 30;
        console.log(`${this.name}`)
    }

}

class Rabbit extends Animal {

}

let rab = new Rabbit("fav");
rab.run(20)