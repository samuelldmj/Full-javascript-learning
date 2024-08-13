//solution
let billsArray = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let tips = [];
let total = [];

const calcTip = (billVal) => {
    let tipCalc = ((billVal >= 50) && (billVal <= 300)) ? billVal * 0.15 : billVal * 0.2
    return tipCalc;
}

for (let i = 0; i < billsArray.length; i++) {

    tips.push(calcTip(billsArray[i]));
    total.push(billsArray[i] + tips[i]);
}

console.log(billsArray, tips, total);


//Bonus:
function calcAverage(arr) {
    let sum = 0; // Step 4.1: Initialize sum variable

    // Step 4.1: Loop over the array and add each element to sum
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }

    // Step 4.2: Calculate the average by dividing sum by the length of the array
    let average = sum / arr.length;

    return average;
}

// Example usage:
//let totals = [10, 20, 30, 40, 50];
let totals = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52];
let average = calcAverage(totals);
console.log("Average:", average); // Output the calculated average
console.log(calcAverage(tips), calcAverage(total));