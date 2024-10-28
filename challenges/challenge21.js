/*
Your tasks:
1. Re-create Challenge #1, but this time using an ES6 class (call it 'CarCl')
2. Add a getter called 'speedUS' which returns the current speed in mi/h (divide 
by 1.6)
3. Add a setter called 'speedUS' which sets the current speed in mi/h (but 
converts it to km/h before storing the value, by multiplying the input by 1.6)
4. Create a new car and experiment with the 'accelerate' and 'brake'
methods, and with the getter and setter.
Test data:
§ Data car 1: 'Ford' going at 120 km/h
*/


 class CarCl {
    constructor(make, speed){
        this.carMake = make;
        this.carSpeed = speed;
    }

    accelerate(){
        this.carSpeed += 10;
        console.log(`${this.carSpeed} km/h`);
    }

    brake(){
        this.carSpeed -= 5;
        console.log(`${this.carSpeed} km/h`);
    }

    set speedUS(speed){
         this.carSpeed = speed * 1.6;
    }

    get speedUs(){
        this.carSpeed / 1.6;
    }
 
 }

 let car = new CarCl('Ford', 120)

console.log(car.speedUS);
car.speedUS = 50;
 car.accelerate();
 car.brake(); 
//  car.speedUS = 50;
//  console.log(car)
 // console.log(car.constructor);