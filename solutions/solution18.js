/*
formula: dogAge <=  2, humanAge = 2 * dogAge; 
if dog > 2 HumanAge = 16 + dogAge * 4;

testData  = [5, 2, 4, 1, 15, 8 , 3];
testData =  [16, 6, 10, 5, 6, 1, 4];
*/
let testData = [5, 2, 4, 1, 15, 8, 3];
let testData2 = [16, 6, 10, 5, 6, 1, 4];
// let calcAverageHumanAge = function (ages) {
//     let dogAgeLessThanTwo = ages.filter(el => el <= 2)
//         .map(acc => 2 * acc)
//     console.log(dogAgeLessThanTwo);
//     let dogAgeGreaterThanTwo = ages.filter(el => el > 2)
//         .map(acc => 16 + acc * 4);
//     console.log(dogAgeGreaterThanTwo);

//     let dogAgeGreaterthanEighteen = dogAgeLessThanTwo.concat(dogAgeGreaterThanTwo).filter(el => el >= 18);
//     console.log(dogAgeGreaterthanEighteen);

//     // let avgAge = dogAgeGreaterThanTwo.reduce((acc, el, i, arr) => acc / arr.length);
//     let sum = 0;
//     dogAgeGreaterThanTwo.forEach(el => {
//         sum += el
//     });
//     const avgAge = sum / dogAgeGreaterthanEighteen.length;
//     console.log(avgAge);

// }
// calcAverageHumanAge(testData);
// calcAverageHumanAge(testData2);

//REFACTORING CODE
const calcAverageHumanAge = function (ages) {
    const humanAge = ages.map(age => (age <= 2 ? 2 * age : 16 + age * 4))

    const adults = humanAge.filter(age => age >= 18);
    console.log(adults);

    const dogAvgAge = adults.reduce((acc, el) => acc + el) / adults.length;
    console.log(dogAvgAge);

}
calcAverageHumanAge(testData);
calcAverageHumanAge(testData);
