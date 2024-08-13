//solution

const user1 = {
    fullname: "Mark Miller",
    mass: 78,
    height: 1.69,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

const user2 = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function () {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }

}

let check = user1.calcBMI() > user2.calcBMI() ? `${user1.fullname}'s BMI (${user1.calcBMI()}) is higher than ${user2.fullname}'s (${user2.calcBMI()})!` :
    `${user2.fullname}'s BMI (${user2.calcBMI()}) is higher than
 ${user1.fullname}'s (${user1.calcBMI()})!`

// console.log(user2.calcBMI())
// console.log(user1.calcBMI())

console.log(check)