
//Solution

let tip = 0.15
const calcTip = (billVal) => {
    let tipCalc = ((billVal >= 50) && (billVal <= 300)) ? billVal * tip : billVal * 0.2
    return tipCalc;
}

//testing bil value at 100
console.log(calcTip(100))

const arrayBills = [125, 555, 44];
const arrayofTips = [calcTip(arrayBills[0]), calcTip(arrayBills[1]), calcTip(arrayBills[2])];
console.log(arrayofTips);

const arrayOfTotalExp = [arrayBills[0] + arrayofTips[0], arrayBills[1] + arrayofTips[1], arrayBills[2] + arrayofTips[2]];
console.log(arrayOfTotalExp);
