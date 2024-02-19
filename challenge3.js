/*Coding Challenge #3 |  JavaScript 🔥
There are two gymnastics teams, Dolphins and Koalas. They compete against each other 3 times. The winner with the highest average score wins a trophy!

Your tasks:
1. Calculate the average score for each team, using the test data below

2. Compare the team's average scores to determine the winner of the competition, and print it to the console.
Don't forget that there can be a draw, so test for that as well (draw means they have the same average score)

3. Bonus 1: Include a requirement for a minimum score of 100. With this rule,
a team only wins if it has a higher score than the other team, and the same time a score of at least 100 points. 
Hint: Use a logical operator to test for a minimum score, as well as multiple else-if blocks 😉

4. Bonus 2: Minimum score also applies to a draw! So a draw only happens when both teams have the same score and both have a score greater or equal 100 points.
Otherwise, no team wins the trophy

Test data:
Data 1: Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110
Data Bonus 1: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 123
Data Bonus 2: Dolphins score 97, 112 and 101. Koalas score 109, 95 and 106
*/

//solution
let dolphins = [96, 108, 89]
let dolphinSum = [96 + 108+89]
let kaolas = [88, 91, 110]
let kaolaSum = [88 + 91 + 110]
//AVERAGE SCORES FOR BOTH TEAMS
let dolpAvg = dolphinSum / 3
// console.log(dolpAvg)
let kaoAvg = kaolaSum / 3
// console.log(kaoAvg)
//DETERMINING THE WINNING TEAM
if(dolpAvg === kaoAvg){
    console.log(`The match ends in a draw, no winner.`)
}else if(dolpAvg > kaoAvg){
     console.log(`The Dolphins are the winner of the competition.`)
}else{
     console.log( 'Kaolas are the winner of the competition.')
}


//INCLUDING THE MINIMUM AVERAGE SCORE and DATA BONUS 1
let dolphinsB = [97, 112, 101]
let dolphinsBsum = [97 + 112 + 101]
let kaolasB = [109, 95, 123]
let kaolasBsum = [109 + 95 +108]

//AVERAGE SCORES FOR BOTH TEAMS Bonus 1
let dolphinsBavg = dolphinsBsum / 3
console.log(dolphinsBavg)

let kaolasBavg = kaolasBsum / 3
console.log(kaolasBavg)

let minAvgScr = 100
if((dolphinsBavg > kaolasBavg) && (dolphinsBavg >= minAvgScr)){
    console.log(`Dolphins are the winner of the competition.`)
}else if(( kaolasBavg >  dolphinsBavg) && (kaolasBavg >= minAvgScr)){
    console.log('Kaolas are the winner of the competition.')
}else {
    console.log('No winner!')
}

//DATA BONUS 2
let dolphinsB2 = [97, 112, 101]
let dolphinsB2sum = [97 + 112 + 101]

let kaolasB2 = [109, 95, 106]
let kaolasB2sum = [109 + 95 +106]

//Averages and minmum scores
let dolphinsB2avg = dolphinsB2sum / 3
console.log(dolphinsB2avg)

let kaolasB2avg = kaolasB2sum  / 3
console.log(kaolasB2avg)

minAvgScr = 100
if((dolphinsB2avg > kaolasB2avg) && (dolphinsBavg >= minAvgScr)){
    console.log(`Dolphins are the winner of the competition.`)
}else if(( kaolasB2avg >  dolphinsBavg) && (kaolasB2avg >= minAvgScr)){
    console.log('Kaolas are the winner of the competition.')
}else if ((kaolasB2avg === dolphinsBavg) && ((kaolasB2avg && dolphinsBavg) >= minAvgScr)) {
    console.log('No winner, it is a draw!')
}