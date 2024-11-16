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

const EV = function(make, speed, charge){
    Car.call(this, make, speed)
    this.battery_charge = charge;
}


//linking prototypes;
EV.prototype = Object.create(Car.prototype);
// Reset constructor for Student
EV.prototype.constructor = EV;

EV.prototype.chargeBattery = function(chargeTo){
    this.battery_charge = chargeTo
}

EV.prototype.accelerate = function(){
    this.car_speed += 20;
    this.battery_charge -= 1;
    console.log(`${this.car_make} going at ${this.car_speed} km/h with a charge of ${this.battery_charge}%`);
}

const car = new EV('Tesla', 120, 23);
// console.log(car);
car.accelerate();
car.brake();

car.chargeBattery(90)
car.accelerate();
car.brake();
// console.log(car);
