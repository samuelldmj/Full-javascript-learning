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
         this._carSpeed = speed * 1.6;
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