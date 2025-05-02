class Car{
    static wheels = 4;
    constructor(name, color, year){
        this.name = name;
        this.color = color;
        this.year = year;
        Car.wheels++;
        this.wheels = 50;
    }

    static driver(){
        console.log("Driver");
    }

    stop(){
        console.log("Stop");
    }

}
const car1 = new Car("BMW", "Black", 2020,40);
console.log(car1.name, car1.color, car1.year,car1.wheels, Car.wheels);
console.log(`${car1.name}, ${car1.color}, ${car1.year} ,${car1.wheels}, ${Car.wheels}`);
console.log(Car.wheels);

car1.stop(); 
Car.driver();
// Car.stop(); // TypeError: Car.stop is not a function
// car1.driver(); //TypeError: car1.driver is not a function


