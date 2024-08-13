//solution
// Average function
const calcAverage = (score1, score2, score3) => {
    let score = score1 + score2 + score3
    return score / 3
}

//calculating Average for data 1
let dolAvg = calcAverage(44, 23, 71)
let kaoAvg = calcAverage(65, 54, 49)
console.log(`Dolphins average score is ${dolAvg}, while Kaolas average score is ${kaoAvg}`)

//checking winner for data 1
const checkWinner = (dolAvg, kaoAvg) => {
    let winner = dolAvg >= 2 * kaoAvg ? `Dolphins wins (${dolAvg} vs ${kaoAvg})` : kaoAvg >= 2 * dolAvg ? `Kaolas wins ${kaoAvg} vs ${dolAvg}` : 'No winner'
    return winner
}
console.log(checkWinner(dolAvg, kaoAvg))

//data 2
dolAvg = calcAverage(85, 54, 41)
kaoAvg = calcAverage(23, 34, 27)
console.log(`Dolphins average score is ${dolAvg}, while Kaolas average score is ${kaoAvg}`)
console.log(checkWinner(dolAvg, kaoAvg))
console.log(checkWinner(576, 111))
