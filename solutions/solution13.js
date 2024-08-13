//SOLUTION
//1

//spread to an array
let arrayEvents = [...gameEvents.values()];
// console.log(arrayEvents);

//removing duplicates
let events = new Set(arrayEvents);
// console.log(events);

//2
let removingUnfairYellow = gameEvents.delete(64);
// console.log(removingUnfairYellow);
let correctGameEvents = gameEvents;
// console.log(correctGameEvents);

//3
let keyEventsMinutes = [...gameEvents.keys()].pop();
console.log(keyEventsMinutes);
console.log(`An event happened, on average, every ${keyEventsMinutes / gameEvents.size} minutes`);



//4
for (let [k, v] of gameEvents) {
    let result2 = k < 45 ? `[FIRST HALF] ${k}: ${v}` : `[SECOND HALF] ${k}: ${v}`;
    // console.log(result2);
}