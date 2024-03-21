/*
Coding Challenge #7 | JavaScript 🔥 | Lecture 042
Let's go back to Mark and John comparing their BMIs! This time,
let's use objects to implement the calculations!
Remember: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter)

Your tasks:
1. For each of them, create an object with properties for their full name, mass, and height (Mark Miller and John Smith)
2. Create a 'calcBMI' method on each object to calculate the BMI (the same
method on both objects). Store the BMI value to a property, and also return it
from the method
3. Log to the console who has the higher BMI, together with the full name and the respective BMI. Example: "John's BMI (28.3) is higher than Mark's (23.9)!"

Test data: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.

GOOD LUCK 😀

*/

//solution

const user1 = {
    fullname: "Mark Miller",
    mass: 78 ,
    height: 1.69,
    calcBMI: function ()
    {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }
}

const user2 = {
    fullname: "John Smith",
    mass: 92,
    height: 1.95,
    calcBMI: function ()
    {
        this.BMI = this.mass / (this.height * this.height);
        return this.BMI;
    }

}

let check = user1.calcBMI() > user2.calcBMI() ? `${user1.fullname}'s BMI (${user1.calcBMI()}) is higher than ${user2.fullname}'s (${user2.calcBMI()})!`:
`${user2.fullname}'s BMI (${user2.calcBMI()}) is higher than
 ${user1.fullname}'s (${user1.calcBMI()})!`
 
// console.log(user2.calcBMI())
// console.log(user1.calcBMI())

console.log(check)

