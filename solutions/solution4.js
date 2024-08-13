//solution
//275
// let billVal = 275
// let tip = 0.15
// let tipCalc = ((billVal >= 50) || (billVal <= 300)) ? billVal * tip : billVal * 0.2
// console.log(`The bill was ${billVal}, the tip was ${tipCalc}, and the total value ${billVal + tipCalc}`)

//40
// let billVal = 40
// let tip = 0.15
// let tipCalc = ((billVal >= 50) || (billVal <= 300)) ? billVal * tip : billVal * 0.2
// console.log(`The bill was ${billVal}, the tip was ${tipCalc}, and the total value ${billVal + tipCalc}`)

//430
let billVal = 430
let tip = 0.15
let tipCalc = ((billVal >= 50) && (billVal <= 300)) ? billVal * tip : billVal * 0.2
console.log(`The bill was ${billVal}, the tip was ${tipCalc}, and the total value ${billVal + tipCalc}`)