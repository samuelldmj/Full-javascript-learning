function Car(make, speed){
    this.car_make = make;
    this.car_speed = speed;
}
Car.prototype.accelerate = function(){
    console.log(`${this.car_speed += 10} km/h`);
}

Car.prototype.brake = function(){
    console.log(`${this.car_speed -= 5} km/h`);
}

 const car1 = new Car(' BMW', 120)
 car1.accelerate();
 car1.accelerate();
 car1.accelerate();
 car1.accelerate();
 car1.brake();

//  const car2 = new Car('Mercedes',  95)
//  car2.accelerate();
//  car2.accelerate();
//  car2.accelerate();
//  car2.accelerate();
//  car2.accelerate();
//  car2.brake();