//solution
const checkDogs = function (dogsJulia, dogsKate) {
    let juliaShallow = dogsJulia.slice(), kateShallow = dogsKate.slice();
    console.log(dogsJulia, dogsKate);
    let juliaCatPick = [...juliaShallow.splice(0, 1), ...juliaShallow.splice(2, 2)], kateCatPick = [...kateShallow.splice(0, 1), ...kateShallow.splice(2, 2)];
    // console.log(juliaCatPick, kateCatPick);

    //corrected dogAge
    let juliaCorrected = juliaShallow, kateCorrected = kateShallow;
    console.log(juliaCorrected, kateCorrected);

    //bringing the dogs together
    let Dogs = juliaCorrected.concat(kateCorrected);
    console.log(Dogs);
    //foreach loop
    Dogs.forEach((dog, i) => {
        let DogsObserver = dog >= 3 ? `Dog number ${i + 1} is an adult, it is ${dog} years old` : `Dog number ${i + 1} is still a puppy`;
        console.log(DogsObserver);
    });

    // kateCorrected.forEach((el, i) => {
    //     let observer = el >= 3 ? `Dog number ${i + 1} is an adult,  and it is ${el} years old` : `Dog number ${i + 1} is still a puppy`
    //     console.log(observer);
    // });


}
let julia = [3, 5, 2, 12, 7];
let kate = [4, 1, 15, 8, 3];
checkDogs(julia, kate);

console.log('---------Test 2-----------');
//test2
let juliaTest2 = [9, 16, 6, 8, 3];
let kateTest2 = [10, 5, 6, 1, 4];
checkDogs(juliaTest2, kateTest2);
