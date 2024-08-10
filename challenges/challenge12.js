"use strict"

/*
Coding Challenge #12 | JavaScript 🔥 | Lecture 107
Let's continue with our football betting app! Keep using the 'game' variable from before.

Your tasks:
1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski").
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember).
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw").

Hint: Note how the odds and the game objects have the same property names 😉

4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2
}

GOOD LUCK 😀
*/

//solution


const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [

        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],

    ],
    score: '4:0',
    scored: ['Lewandowski', 'Garby', 'Lewandowski', 'Hummels'],
    date: 'NOv 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};






//solution 
//1: Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski").
// let goalScorers = [...game.scored];
// let goalScorers = game.scored;
// console.log(goalScorers);

// for (let [goal, name] of goalScorers.entries()) {
//     console.log(`Goal ${goal + 1} by ${name}`);
// }


//2: Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember).
// let odds = { ...game.odds };
// let oddValues = Object.values(odds);
// let oddLength = oddValues.length;
// console.log(oddLength);
// console.log(oddValues);
// console.log(odds);

// let sum = 0;
// for (let i = 0; i < oddLength; i++) {
//     sum += oddValues[i] / oddLength;
// }
// console.log(sum);


/*
3. Print the 3 odds to the console, but in a nice formatted way, exactly like this:
Odd of victory Bayern Munich: 1.33
Odd of draw: 3.25
Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them
(except for "draw").
*/

for (let [team, odd] of Object.entries(game.odds)) {
    // console.log(team, odd);
    let teamStr = team === 'x' ? 'Draw' : `victory ${game[team]}`
    console.log(`Odd of ${teamStr} ${odd}`);
}

/*
4. Bonus: Create an object called 'scorers' which contains the names of the
players who scored as properties, and the number of goals as the value. In this game, it will look like this:
{
Gnarby: 1,
Hummels: 1,
Lewandowski: 2 
} 
*/







