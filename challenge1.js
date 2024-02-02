/*
Coding Challenge #1
Mark and John are trying to compare their BMI (Body Mass Index), which is calculated using the formula: BMI = mass / height ** 2 = mass / (height * height) (mass in kg and height in meter).

Your tasks:
1. Store Mark's and John's mass and height in variables
2. Calculate both their BMIs using the formula (you can even implement both versions)
3. Create a Boolean variable 'markHigherBMI' containing information about whether Mark has a higher BMI than John.

Test data:
Data 1: Marks weights 78 kg and is 1.69 m tall. John weights 92 kg and is 1.95 m tall.
Data 2: Marks weights 95 kg and is 1.88 m tall. John weights 85 kg and is 1.76 m tall.
*/
let markMass, markHeight, johnMass, johnHeight, markHigherBMI;
//Mark BMI
markMass = 78
markHeight =  1.69
mark_bmi = markMass / markHeight ** 2
console.log("Mark BMI =", mark_bmi)
//John BMI
johnMass = 92
johnHeight = 1.95
john_bmi = johnMass / johnHeight ** 2
console.log("John BMI =",john_bmi);
//checking if mark has a higher BMI
markHigherBMI = mark_bmi > john_bmi
console.log("it is", markHigherBMI, "Mark has a higher BMI than John")

console.log("\n \n \n ")
//test data 
let markMass_2, markHeight_2, johnMass_2, johnHeight_2, markHigherBMI_2;
//Mark BMI 2
markMass_2 = 95
markHeight_2 = 1.88
mark_bmi_2 = markMass_2 / markHeight_2 ** 2
console.log("Mark BMI 2 =", mark_bmi_2)

//John BMI 2 
johnMass_2 = 85
johnHeight_2 = 1.76 
john_bmi_2 = johnMass_2 / johnHeight_2 ** 2
console.log( "John BMI 2 =" , john_bmi_2)
//checking if mark has a higher BMI
markHigherBMI_2 = mark_bmi_2 > john_bmi_2
console.log("it is", markHigherBMI_2, "that Mark has a higher BMI than John")


