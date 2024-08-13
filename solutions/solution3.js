//solution
let dolphins = [96, 108, 89]
let dolphinSum = [96 + 108 + 89]
let kaolas = [88, 91, 110]
let kaolaSum = [88 + 91 + 110]
//AVERAGE SCORES FOR BOTH TEAMS
let dolpAvg = dolphinSum / 3
// console.log(dolpAvg)
let kaoAvg = kaolaSum / 3
// console.log(kaoAvg)
//DETERMINING THE WINNING TEAM
if (dolpAvg === kaoAvg) {
    console.log(`The match ends in a draw, no winner.`)
} else if (dolpAvg > kaoAvg) {
    console.log(`The Dolphins are the winner of the competition.`)
} else {
    console.log('Kaolas are the winner of the competition.')
}


//INCLUDING THE MINIMUM AVERAGE SCORE and DATA BONUS 1
let dolphinsB = [97, 112, 101]
let dolphinsBsum = [97 + 112 + 101]
let kaolasB = [109, 95, 123]
let kaolasBsum = [109 + 95 + 108]

//AVERAGE SCORES FOR BOTH TEAMS Bonus 1
let dolphinsBavg = dolphinsBsum / 3
console.log(dolphinsBavg)

let kaolasBavg = kaolasBsum / 3
console.log(kaolasBavg)

let minAvgScr = 100
if ((dolphinsBavg > kaolasBavg) && (dolphinsBavg >= minAvgScr)) {
    console.log(`Dolphins are the winner of the competition.`)
} else if ((kaolasBavg > dolphinsBavg) && (kaolasBavg >= minAvgScr)) {
    console.log('Kaolas are the winner of the competition.')
} else {
    console.log('No winner!')
}

//DATA BONUS 2
let dolphinsB2 = [97, 112, 101]
let dolphinsB2sum = [97 + 112 + 101]

let kaolasB2 = [109, 95, 106]
let kaolasB2sum = [109 + 95 + 106]

//Averages and minmum scores
let dolphinsB2avg = dolphinsB2sum / 3
console.log(dolphinsB2avg)

let kaolasB2avg = kaolasB2sum / 3
console.log(kaolasB2avg)

minAvgScr = 100
if ((dolphinsB2avg > kaolasB2avg) && (dolphinsBavg >= minAvgScr)) {
    console.log(`Dolphins are the winner of the competition.`)
} else if ((kaolasB2avg > dolphinsBavg) && (kaolasB2avg >= minAvgScr)) {
    console.log('Kaolas are the winner of the competition.')
} else if ((kaolasB2avg === dolphinsBavg) && ((kaolasB2avg && dolphinsBavg) >= minAvgScr)) {
    console.log('No winner, it is a draw!')
}