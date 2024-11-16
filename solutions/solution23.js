class CarCl {
    constructor(make, speed){
        this.carMake = make;
        this.carSpeed = speed;
    }

    accelerate(){
        this.carSpeed += 10;
        // console.log(`${this.carSpeed} km/h`);
    }

    brake(){
        this.carSpeed -= 5;
        // console.log(`${this.carSpeed} km/h`);
    }

    set speedUS(speed){
         this._carSpeed = speed * 1.6;
    }

    get speedUs(){
        this.carSpeed / 1.6;
    }
 
 }

class EVCl extends CarCl {

    #batteryCharge;

    constructor(make, speed, charge){
        super(make, speed);
        this.#batteryCharge = charge;
    }

    chargeBattery = function(chargeTo){
        this.#batteryCharge = chargeTo
        return this;
    }

    accelerate = function(){
        this.carSpeed += 20;
        this.#batteryCharge -= 1;
        console.log(`${this.carMake} going at ${this.carSpeed} km/h with a charge of ${this.#batteryCharge}%`);
        return this;
    }


}

const car = new EVCl('Rivian', 120, 23);
car.accelerate().brake();
car.chargeBattery(90).accelerate().brake();