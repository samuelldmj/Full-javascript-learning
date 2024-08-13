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
