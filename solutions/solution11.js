//solution 

//1
[players1, players2] = game.players
console.log(players1);
console.log(players2);

//2
let [gk, ...fieldPlayers] = players1;
// console.log(gk, fieldPlayers);

//3
let allPlayers = [...players1, ...players2];
console.log(allPlayers);

//4: During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'.

// let players1Final = [players1, 'Thiago', 'Coutinho', 'Perisic'];
//or
let players1Final = [...game.players[0], 'Thiago', 'Coutinho', 'Perisic'];
// console.log(players1Final);

//5: Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2').
const { odds: { team1, x: draw, team2 } } = game;
console.log(team1, draw, team2);

//6: Write a function ('printGoals') that receives an arbitrary number of player names(not an array) and prints each of them to the console, along with the number of goals that were scored in total(number of player names passed in).
//Test data for 6.: First, use players 'Davies', 'Muller', 'Lewandowski' and 'Kimmich'. Then, call the function again with players from game.scored.
printGoals = function (...players) {
    console.log(players);
    console.log("Total Number of Goals Scored: ", players.length);
}
// printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich')
console.log("============================");
printGoals(...game.scored);

//7: The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
team1 < team2 && console.log(`${game.team1} More likely to Win`);
team1 > team2 && console.log(`${game.team2} More likely to Win`);