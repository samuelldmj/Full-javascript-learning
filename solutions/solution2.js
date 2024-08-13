//from previous challenge
let markMass, markHeight, johnMass, johnHeight, markHigherBMI;
//Mark BMI
markMass = 78
markHeight = 1.69
mark_bmi = markMass / markHeight ** 2
// console.log("Mark BMI =", mark_bmi)
//John BMI
johnMass = 92
johnHeight = 1.95
john_bmi = johnMass / johnHeight ** 2
// console.log("John BMI =",john_bmi);
//checking if mark has a higher BMI
markHigherBMI = mark_bmi > john_bmi
// console.log("it is", markHigherBMI, "Mark has a higher BMI than John")
let temp_lit = `Mark BMI (${mark_bmi}) is higher than John BMI (${john_bmi})`
console.log(temp_lit)
//using if-else statement
if (markHigherBMI) {
    console.log('Marks BMI is higher than John')
}

console.log("\n \n \n ")
//test data 
let markMass_2, markHeight_2, johnMass_2, johnHeight_2, markHigherBMI_2;
//Mark BMI 2
markMass_2 = 95
markHeight_2 = 1.88
mark_bmi_2 = markMass_2 / markHeight_2 ** 2
// console.log("Mark BMI 2 =", mark_bmi_2)

//John BMI 2 
johnMass_2 = 85
johnHeight_2 = 1.76
john_bmi_2 = johnMass_2 / johnHeight_2 ** 2
// console.log( "John BMI 2 =" , john_bmi_2)
//checking if mark has a higher BMI
markHigherBMI_2 = mark_bmi_2 > john_bmi_2
// console.log("it is", markHigherBMI_2, "that Mark has a higher BMI than John")
//using if-else statement
if (markHigherBMI) {
    console.log('John BMI is higher than Marks')
}
let temp_lit_2 = `Mark BMI (${mark_bmi_2}) is lower than John BMI (${john_bmi_2})`
console.log(temp_lit_2)
