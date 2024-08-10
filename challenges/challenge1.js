/*

Coding Challenge #1 | JavaScript 🔥 | Lecture 013

Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.

GOOD LUCK

*/


//solution
//test data 1
const markWeight = 78;
const markHeight = 1.69;
let markBMI = markWeight / markHeight * markHeight;
console.log("Mark BMI= ", markBMI);

const johnWeight = 92;
const johnHeight = 1.95;
let johnBMI = johnWeight / johnHeight * johnHeight;
console.log("John BMI= ", johnBMI);


let markHigherBMI = markBMI > johnBMI;
console.log(markHigherBMI);

console.log("====================================");

//test data 2
const markWeight2 = 95;
const markHeight2 = 1.88;
let markBMI2 = markWeight2 / markHeight2 * markHeight2;
console.log("Mark BMI-2 = ", markBMI2);

const johnWeight2 = 92;
const johnHeight2 = 1.95;
let johnBMI2 = johnWeight2 / johnHeight2 * johnHeight2;
console.log("John BMI-2 = ", johnBMI2);

markHigherBMI = markBMI2 > johnBMI2;
console.log(markHigherBMI);

