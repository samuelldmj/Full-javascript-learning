/*
1. Loop over the 'dogs' array containing dog objects, and for each dog, calculate 
the recommended food portion and add it to the object as a new property. Do 
not create a new array, simply loop over the array. Forumla: 
recommendedFood = weight ** 0.75 * 28. (The result is in grams of 
food, and the weight needs to be in kg) 
*/

let recommendedFood = function (props){
    props.forEach(prop => {
        prop.recFood = Math.round(prop.weight ** 0.75 * 28);
    }); 

    return props;
}
// console.log(recommendedFood(dogs))


/*
2. Find Sarah's dog and log to the console whether it's eating too much or too 
little. Hint: Some dogs have multiple owners, so you first need to find Sarah in 
the owners array, and so this one is a bit tricky (on purpose) 
*/
const recommendedDogs = recommendedFood(dogs);
// const sarahDog = recommendedDogs.find(dog => dog.owners.includes('Sarah'));

// if (sarahDog) {
//     if (sarahDog.curFood > sarahDog.recFood) {
//         console.log('Sarah\'s dog is eating too much.');
//     } else if (sarahDog.curFood < sarahDog.recFood) {
//         console.log('Sarah\'s dog is eating too little.');
//     } else {
//         console.log('Sarah\'s dog is eating just the right amount.');
//     }
// } else {
//     console.log('Dog owned by Sarah not found.');
// }

/*
(3)
Create an array containing all owners of dogs who eat too much 
('ownersEatTooMuch') and an array with all owners of dogs who eat too little 
('ownersEatTooLittle'). 
*/
const ownersEatTooMuch = recommendedDogs.filter(dog => dog.curFood > dog.recFood).flatMap(dogOwner => dogOwner.owners);
const ownersEatTooLittle  = recommendedDogs.filter(dog => dog.curFood < dog.recFood).flatMap(dogOwner => dogOwner.owners);
// console.log(ownersEatTooMuch, ownersEatTooLittle);

/*
(4)
Log a string to the console for each array created in 3., like this: "Matilda and 
Alice and Bob's dogs eat too much!" and "Sarah and John and Michael's dogs eat 
too little!" 
*/
const stringOutputForDogOwners = function(param){
    let [Matilda, Alice, Bob] = param;
    param.forEach(dogOwner => dogOwner)
    // console.log(`${Matilda} and ${Alice} and ${Bob}'s dogs eat too much!`);  
}
// stringOutputForDogOwners(ownersEatTooMuch);
// stringOutputForDogOwners(ownersEatTooLittle);

/*
(5)
Log to the console whether there is any dog eating exactly the amount of food 
that is recommended (just true or false) 
*/
const ownersOfDogsEatingExactly = recommendedDogs.some(dog => dog.curFood == dog.recFood);
// console.log(ownersOfDogsEatingExactly);


/*
6. Log to the console whether there is any dog eating an okay amount of food 
(just true or false)

Eating an okay amount means the dog's current food portion is within a range 10% 
above and 10% below the recommended portion (see hint).

§ Being within a range 10% above and below the recommended portion means: 
current > (recommended * 0.90) && current < (recommended * 
1.10). Basically, the current portion should be between 90% and 110% of the 
recommended portion. 
*/
const dogOwnersEatingOkay = recommendedDogs.some(dog => dog.curFood > (dog.recFood * 0.90 ) && dog.curFood <  (dog.recFood * 1.10));
// console.log(dogOwnersEatingOkay);


/*
7.s
Create an array containing the dogs that are eating an okay amount of food (try 
to reuse the condition used in 6.) 
*/
const dogOwnersEatingOkayArray = recommendedDogs.filter(dog => dog.curFood > (dog.recFood * 0.90 ) && dog.curFood <  (dog.recFood * 1.10));
// console.log(dogOwnersEatingOkayArray);

/*
8. Create a shallow copy of the 'dogs' array and sort it by recommended food 
portion in an ascending order (keep in mind that the portions are inside the 
array's objects
*/
const shallowDogCopy = recommendedDogs.slice().sort((a,b) => a.recFood-b.recFood);
console.log(shallowDogCopy);