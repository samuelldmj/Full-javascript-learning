//solution
//wrong
// const printForecast = function (arr) {



//     for (let i = 0; i < arr.length; i++) {
//         console.log(`${arr[i]}ºC in ${i + 1} days`)

//     }
// }

// printForecast([17, 21, 23])
// printForecast([12, 5, -5, 0, 4])


//correction

const printForecast = function (arr) {
    let str = "";
    for (let i = 0; i < arr.length; i++) {
        str += `${arr[i]}ºC in ${i + 1} days ...`
    }
    console.log(' ...' + str);
}

// printForecast([17, 21, 23])
// printForecast([12, 5, -5, 0, 4])