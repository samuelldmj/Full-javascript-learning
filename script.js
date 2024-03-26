// 'use strict';
// const prompt = require('prompt-sync')();
//the console was built to execute small pieces of code
//we can run javascript on a page by linking it to the HTML file with the script tag
//if we want to output something into the browser console, we use console.log()
//we dont need to use console.log when on the browser console, hitting enter will execute it
//to move to the next line use shift + enter

//VALUES
// console.log('Bolu')
// console.log(23)

//VARIABLES
//camelCase: firstName
//snake_case: first_name
//convention does not support the use of uppercase for variables
//uppercase letter are specific for CONSTANT
let fname = 'Samuel';
let $number = 20;
let dec = 2.777;
let javascriptisFun = true
// console.log(fname)
// console.log($number)
//make your variable name descriptive
let formerJob = 'Programmer';
let currentJob = 'Teacher';
// console.log(formerJob)
// console.log(currentJob)


//DATA TYPES
//value is either an object or primitive
//there are 7 primitive data types (strings, boolean, number, null, big int, undefined and symbol )
//Number: this include integers and decimals
//String: text value, put them in quotes
//boolean: True, False
//Undefined: empty value
//null: empty value
//symbol: unique value that can not be changed
//Bigint: value that can not changed

//COMMENTS
// Single line comment: //
//Multi line comments: /**/

//typeof
//it is an operator that can be used to show the types of a values
// console.log(typeof currentJob);
// console.log(typeof $number);
// console.log(typeof javascriptisFun);
// console.log(typeof dec);

//DYNAMIC TYPING
javascriptisFun = "Yes!";
//console.log(typeof javascriptisFun)

//LET, VAR and CONST
// let age = 30;
//reassigning age
//age = 31

//const is an immutable keyword, you can't change it
// const birthYear = 1992;
//console.log(birthYear)

//OPERATORS (*, -, /, +, **)
//COMPARISON OPERATORS(<, >, >=, <=)
//OPERATOR PRECEDENCE -> consult MDN precedence operator
const now = 2037
const ageSam = now - 1991
const ageDan = now - 2018
// console.log(now - ageSam > now - ageDan)
// console.log()

//STRINGS: TEMPlate LITERALS {` `}
const first_name = "Samuel";
const job = 'teacher';
const birthY = 1997;
const year = 2037;

const sam = "I'm " + first_name + ', a ' + job + ',' + ' my age' + ' is ' + (year - birthY);
// console.log(sam)
const samNew = `I'm ${first_name}`

//The if else statement
const age = 8;
const isOldenough = age >= 18;
if (isOldenough) {
    // console.log(`Samuel can obtain his driving license 🚗`)
} else {
    // console.log(`Samuel is too young to drive at ${age}`)
}

//TYPE CONVERSION AND COERCION
//Type conversion
//When we manually convert from one data type to another is Type conversion
//javascript can only convert to 3 data types: a number, string and boolean
const inputYear = '1991';
// console.log(Number(inputYear), typeof inputYear)
// console.log(Number(inputYear))
// console.log(Number(inputYear) + 18)
// console.log(inputYear + 18)
// console.log(Number('Samuel'))
// console.log(typeof NaN)

//TYPE COERCION
//it works automatically
//THIS OCCURS WHENEVER AN OPERATOR IS DEALING WITH TWO VALUES THAT HAVE DIFFERENT DATA TYPES
//JAVASCRIPT WILL TRY TO CONVERT THE TYPE OF ONE VALUE TO MATCH THE TYPE OF OTHER VALUE
let sentence = 'I am ' + 23 + ' years old';
// console.log(typeof sentence);
// console.log('23' + '10' - 3)
// console.log('23' - '10' + 3)
// console.log('23' - '10' - 3)
//teke note of precedence and associativity
// console.log('10' - '4' - '3' - 2 + '5')
// console.log('10' + '4' - '3' - 2 + '5')
// console.log('s' + '4' - '3' - 2 + '5')

//guess the game
//due to associativity law
let n = '1' + 1
//n = n - 1
// console.log(n)
// console.log(n)

//FALSY VALUES: THEY ARE NOT EXACTLY FALSE VALUE BUT WILL RETURN FALSE WHEN CONVERTED TO A BOoLEAN
//WE have 5 FALSY VALUES: 0, " ", Undefined, NULL, Nan
//TRUTHY VALUE WILL RETURN TRUE WHEN YOU TRY TO CONVERT THEM TO A BOOLEAN
// console.log(Boolean(0))
// console.log(Boolean({}))
// console.log(Boolean('Samuel'))
// console.log(Boolean(''))
// console.log(Boolean(undefined))
//example falsy
//javascript will convert money into boolean, 0 is a falsy
// const money = 0
const money = 100
if (money) {
    // console.log("Don't spend all!")
} else {
    // console.log("Go get some money buddy!")
}

//EQUaLITY == VS ===
//strict operator does not perform type coercion
const age_1 = 18
if (age_1 === 18) {
    // console.log('Matured!😉')
}

//PROMPT
//USED TO GET A VALUE FROM A WEBPAGE or terminal
// const favorite = prompt("What is your fovorite number? ")
// if(favorite == 18) console.log("Cool buuddy!")

//BOOLEAN LOGIC
//IT USES TRUE AND FALSE VALUES TO SOLVE COMPLEX LOGICAL PROBLEM
let age_2 = 16

let a = age_2 >= 20 //false
let b = age_2 < 30 //true
// console.log(a)
// console.log(b)
// //NOT OPERATOR
// console.log(!a)
// //and operator
// let and = a && b
// console.log(and)
// //or operator
// let or = a || b
// console.log(or)
// console.log(!a && b)
// console.log(a || !b)
a = true
b = false
let shouldDrive = a && b
// if(shouldDrive){
//     console.log('Dan should drive')
// }else{
//     console.log('Dan should not drive')
// }

let c = true
if (shouldDrive && !c) {
    // console.log('Dan should drive')
} else {
    // console.log('Dan should not drive')
}


//SWITCH STATEMENT
const day = 'zeh';

// switch (day) {
//     case "monday":
//         console.log("organize the structure of the course")
//         console.log("go for an online meetup")
//         break;

//     case "tuesday":
//         console.log("prepare theory for this course")
//         break

//     case "wednesday":
//     case "thursday":
//         console.log('Write code examples')
//         break

//     case "friday":
//         console.log("record videos")
//         break

//     case "saturday":
//     case "sunday":
//         console.log("Enjoy the weekend!")
//         break


//     default:
//         console.log("Not a valid date!")
// }

//using IF-ELSE statement

// if(day === "monday"){
//     console.log("organize the structure of the course")
//     console.log("go for an online meetup")
// }else if(day === "tuesday"){
//     console.log("prepare theory for this course")
// }else if((day === "wednesday") || (day === "thurdays")){
//     console.log('Write code examples')
// }else if (day === "friday"){
//     console.log('Write code examples')
// }else if((day === "saturday") || (day === "sunday")){
//     console.log("Enjoy the weekend!")
// }else{
//     console.log("Not a valid date!")
// }


//TERNARY OPERATOR
// let LicencsedAge = 20
// LicencsedAge >= 18 ? console.log("you can drink wine 🍷") : console.log('you can drink water 💧')

// const drink = LicencsedAge >= 18 ? "wine 🍷" : "water 💧 "
// console.log(drink)


/*=====================================================================================================================
SECTION 2

======================================================================================================================
*/


//ACTIVATING STRICT MODE
//=>tO ACTIVATE strict mode use the below keyword at the top of your Javascript mode.
//"use strict";
//using strict mode help us kick against the usage of some word reserved for JS

// let hasDriversLicense = false;
// const passTest = true;
// if (passTest) hasDriversLicense = true
// if(hasDriversLicense) console.log('I can drive 😀');


//================
//FUNCTIONS
//===============
function logger() {
    console.log("My name is Samuel")
}

//calling===inovking===running
// logger();
// logger();
// logger();


//function with parameters
//the parameters are empty spaces that needs to filled out when writing a function
// function fruitProcessor(oranges,apples){
//     //console.log(oranges, apples);
//     const juice = `Juice with ${oranges} oranges and ${apples} apples.`
//     return juice;
// }

//the values in the function below is called argument
// const orangeAppleJuice = fruitProcessor(2, 5);
// console.log(orangeAppleJuice);
// const appleJuice = fruitProcessor(0, 5);
// console.log(appleJuice)

//FUCNTION DECLARATION vs EXPRESSION

//Function declaration
// function ageCal1(birthYear){
//     return 2037 - birthYear;

// }

// const age1 = ageCal1(1991);
//console.log(age1);

//==============================
//EXPRESSION or ANONYMOUS FUCNTION
//==============================
//=>can be called before it is defined
// const calAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// const age2 = calAge2(1997)
// console.log(age1, age2);


//==================
//ARROW FUNCTION
//==================

const calAge3 = (birthYear) => 2037 - birthYear;
// const age3 = calAge3(1991)
// console.log(age3);

//requiring multiple line of codes
const yearUntilnextRetirement = (birthYear, firstName) => {
    const age4 = 2037 - birthYear;
    const retirement = 65 - age4;
    //return retirement;
    return `${firstName} retires in ${retirement} years`
}

// console.log(yearUntilnextRetirement(1991, 'Samuel'))
// console.log(yearUntilnextRetirement(1991, 'Samuel'))
// console.log(yearUntilnextRetirement(1980, 'Bob'))


//==================
//functions calling other functions
//=================
function fruitSlicer(fruit) {
    return fruit * 4;
}

function fruitProcessor(oranges, apples) {
    const orangesSlices = fruitSlicer(oranges);
    const appleSlices = fruitSlicer(apples);
    const juice = `Here is your Juice with ${orangesSlices} slices of oranges and ${appleSlices} slices of apples`
    return juice;
}

// console.log(fruitProcessor(2,3));


//==================
//ARRAYS
//=================
// const friends =  ['Samuel', 'lemuel', 'Daniel']
// console.log(friends)
// console.log(friends[0])
// console.log(friends[1])

//getting element from the back
// console.log(friends[friends.length - 1])

//length of an array
// console.log(friends.length)

//another method set an array
// const years = new Array(1991, 1992, 1993);
// console.log(years)
// console.log(years.length)

//mutating array
// friends[2] = 'jay'
// console.log(friends)

// const firstName = 'Samuel';
//const items = [firstName, 2037 - 1991, friends, 'tutor']
// console.log(items)
// console.log(items.length)


// const calAge2 = function (birthYear){
//     return 2037 - birthYear;
// }
// let years = [1990, 1991, 1992, 1993]
// const age1 = calAge2(years[0])
// const age2 = calAge2(years[1])
// const age3 = calAge2(years[years.length - 1])
// console.log(age1, age2, age3)
//array of ages
// let arrayOfAges = [age1, age2, age3];
// console.log(arrayOfAges);


//================
//ARRAY METHODS
//==============

const friends = ['Samuel', 'lemuel', 'Daniel']
//add element
// const newLenght = friends.push('Tosin')
// console.log(friends);
// console.log(newLenght);

//adding to the first of an array
friends.unshift('Moyin')
// console.log(friends)

//remove element last element
// friends.pop()
// console.log(friends);


//remove first element
// friends.shift()
// console.log(friends);

//getting the index of an array
// console.log(friends.indexOf('Moyin'))
// console.log(friends.indexOf('Tosin'))


//================
//OBJECTS
//==============
const userInfo =
{
    firstName: 'Sam',
    lastName: 'Akin',
    // age: 2037 - 1997,
    birthYear: 1997,
    job: "Teacher",
    friends: ['Moyin', 'Tosin', 'Elizabeth'],
    driversLicense: false,
    check: function () {
        this.license = this.driversLicense ? 'a' : 'no';
        return this.license;
    },
    // calAge2 : function (birthYear){
    //     return 2037 - birthYear;
    // }
    // calAge2 : function ( ){
    //     return 2037 - this.birthYear;
    // }
    calAge2: function () {
        this.age = 2037 - this.birthYear;
        return this.age;
    }
}

// console.log(userInfo);

//accessing a particular property
// console.log(userInfo.firstName);
// console.log(userInfo['lastName']);

// const nameKey = 'Name';
// console.log(userInfo['first' + nameKey])
// console.log(userInfo['last' + nameKey])

//const interestedIn = prompt('what are you interested in knowing about the user?')
// console.log(userInfo[interestedIn]);

//challenge
//dynamically output: "userInfo has 3 friends, and his best friend is Tosin.

const dynamic = `${userInfo.firstName} has ${userInfo['friends'].length} friends, and his best friend is ${userInfo["friends"][1]}`
// console.log(dynamic)

// console.log(userInfo.calAge2(1991))
// console.log(userInfo["calAge2"](1991))
// console.log(userInfo.calAge2())

// console.log(userInfo.age)
// console.log(userInfo.age)
// console.log(userInfo.age)

//challenge
// let check = userInfo.driversLicense === true ? 'a' : 'no';
let thisUSer = `${userInfo.firstName} is ${userInfo.calAge2()}-years old ${userInfo.job}, and he has ${userInfo.check()} driver's license`;
// console.log(thisUSer);



//==================
//LOOPS
//==================

//for loop

for (let rep = 1; rep <= 10; rep++) {
    // console.log(`I can lift the weight ${rep} times`)
}

//more on for loops

// const info1 = [
//     'Sam',
//     'Akin',
//     2037 - 1997,
//     "Teacher",
//     ['Moyin', 'Tosin', 'Elizabeth'],
//     false,
// ]

let dataVal = [];
// for( let item = 0; item < info1.length; item++)
// {
//     //console.log(typeof info1[item], info1[item])

//     //dataVal[item] = typeof info1[item] 
//     //dataVal.push(typeof info1[item]);

// //console.log(dataVal);
// }

// console.log(dataVal);


let years = [1990, 1995, 1997, 2000, 2005, 2007];
let ages5 = [];

// for( let item = 0; item < years.length; item++)
// {
//     ages5.push(2037 - years[item]);
// }
// console.log(ages5);


//continue and break

// for( let item = 0; item < info1.length; item++)
// {
//     if(typeof info1[item] !== 'string') continue;
//     // console.log(info1[item]);
// }


// for( let item = 0; item < info1.length; item++)
// {
//     if(typeof info1[item] == 'object') break;
//     // console.log(info1[item]);
// }


//Looping Backwards and Loops in Loops
const info1 = [
    'Sam',
    'Akin',
    2037 - 1997,
    "Teacher",
    ['Moyin', 'Tosin', 'Elizabeth'],
    false,
]

// for( let item = info1.length - 1; item  >= 0 ; item--)
// {
//     // console.log(info1[item])
// }

//loop loop

// for( let exercise = 1; exercise < 4 ; exercise++)
// {
//     console.log(`==========Exercise ${exercise}`)

//     for(let rep = 1; rep <= 10; rep++)
//     {
//         console.log(`lifting weight`)
//         console.log(`push ups`)
//     }
// }


//while loop

// let rep = 1;
// while (rep <= 10) {
//     // console.log(`${rep}: lifting weight`)
//     // console.log(`push ups`)
//     rep++;
// }

//dice rollinging
// let dice = Math.trunc((Math.random() * 6) + 1);
//console.log(dice)

// while (dice !== 6) {
//     console.log(`You rolled a dice number ${dice}`);
//     dice = Math.trunc((Math.random() * 6) + 1);
//     if (dice === 6) console.log(`You rolled ${dice}`)
// }


//challenge
/*
    We work for a company building a smart home thermometer. Our most recent task is this: "Given an array of temperature of one day, claculate
    the temperature amplitude, keep in mind but sometimes there mights be sensor error"
*/
const temperature = [3, -2, -1, -6, "error", 9, 17, 15, 14, 9, 5]


// const tempCalculator = function (temps) {

//     let minTemp = temps[0]
//     let maxTemp = temps[0]

//     for (let i = 0; i < temps.length; i++) {
//         if (typeof temps[i] !== 'number') continue;
//         if (temps[i] < minTemp) minTemp = temps[i];
//         if (temps[i] > maxTemp) maxTemp = temps[i];

//     }
//     console.log(minTemp, maxTemp);
//     let amplitude = maxTemp - minTemp;
//     return amplitude;
// }

// console.log(tempCalculator(temperature));

//problem 2
/*Should receive two temperature arrays as argument but the logic should not change*/

// const ampCalculatorFor2arrays = function (t1, t2) {

//     let arr1 = t1;
//     let arr2 = t2

//     let temps = arr1.concat(arr2)
//     console.log(temps);
//     let minTemp = temps[0]
//     let maxTemp = temps[0]

//     for (let i = 0; i < temps.length; i++) {
//         if (typeof temps[i] !== 'number') continue;
//         if (temps[i] < minTemp) minTemp = temps[i];
//         if (temps[i] > maxTemp) maxTemp = temps[i];

//     }
//     console.log(minTemp, maxTemp);
//     let amplitude = maxTemp - minTemp;
//     return amplitude;
// }


// let ampsamp = ampCalculatorFor2arrays([3, 5, 1], [9, 0, 5])
// console.log(ampsamp)
// ampCalculatorFor2arrays(temperature,)


/*
===================
DEBUGGING
===================
*/
// you can use the "debugger" keyword in the script to breakpoint

const measureKelvin = function () {
    const measurement = {
        type: 'temp',
        unit: 'celsius',
        //FIX THE BUG: CONVERT TO NUMBER
        value: Number(prompt('Degree Celsius: '))
    };

    //FIND THE BUG
    console.table(measurement);

    const kelvin = measurement.value + 273;
    return kelvin;
}

//IDENTIFY THE BUG
// console.log(measureKelvin());

const ampCalculatorFor2arrays = function (t1, t2) {


    let temps = t1.concat(t2)
    console.log(temps);
    let minTemp = 0
    let maxTemp = 0

    for (let i = 0; i < temps.length; i++) {
        if (typeof temps[i] !== 'number') continue;
        if (temps[i] < minTemp) minTemp = temps[i];
        if (temps[i] > maxTemp) maxTemp = temps[i];

    }
    console.log(minTemp, maxTemp);
    let amplitude = maxTemp - minTemp;
    return amplitude;
}

let ampsamp = ampCalculatorFor2arrays([3, 5, 1], [9, 0, 5])
console.log(ampsamp)








































































































































































































































































































































































































































































































































































































































































































































































































