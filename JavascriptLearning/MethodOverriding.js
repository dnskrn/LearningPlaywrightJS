class vehicle{
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

    startEngine(){
        console.log("Engine started from vehicle class",` ${this.name}, ${this.color}`);
    }
}

class car extends vehicle{
    constructor(name, color, wheels){
        super(name, color);
        this.wheels = wheels;
    }
    startEngine(){
        console.log("Engine started from car class",` ${this.name}, ${this.color},  ${this.wheels}`);
    }
}

class BMW extends car{
    constructor(name, color, wheels, year){
        super(name, color, wheels);
        this.year = year;
    }

    startEngine(){
        console.log("Engine started from BMW class",` ${this.name}, ${this.color},  ${this.wheels},  ${this.year}`);
    }
}

class bike extends vehicle{
    constructor(name, color, wheels){
        super(name, color);
        this.wheels = wheels;
    }
    startEngine(){
        console.log("Engine started from bike class",` ${this.name}, ${this.color},  ${this.wheels}`);
    }
}

const vehicle1 = new vehicle("vehicle", "red");
const car1 = new car("car", "blue", 4);
const bmw1 = new BMW("BMW", "black", 4, 2020);
const bike1 = new bike("bike", "green", 2);

vehicle1.startEngine();
car1.startEngine(); 
bmw1.startEngine();
bike1.startEngine();

