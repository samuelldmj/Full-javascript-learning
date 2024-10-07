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
    // console.log("My name is Samuel")
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

for (let item = 0; item < years.length; item++) {
    ages5.push(2037 - years[item]);
}
console.log(ages5);


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

let rep = 1;
while (rep <= 10) {
    // console.log(`${rep}: lifting weight`)
    // console.log(`push ups`)
    rep++;
}

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

// const measureKelvin = function () {
//     const measurement = {
//         type: 'temp',
//         unit: 'celsius',
//         //FIX THE BUG: CONVERT TO NUMBER
//         value: Number(prompt('Degree Celsius: '))
//     };

//     //FIND THE BUG
//     // console.table(measurement);

//     const kelvin = measurement.value + 273;
//     return kelvin;
// }

//IDENTIFY THE BUG
// console.log(measureKelvin());

// const ampCalculatorFor2arrays = function (t1, t2) {


//     let temps = t1.concat(t2)
//     // console.log(temps);
//     let minTemp = 0
//     let maxTemp = 0

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

//Scoping in javascript
/*
===================
Scoping
==================
*/

// function calcAge(birthyear) {
//     const age = 2037 - birthyear
//     // console.log(firstName);
//     function printAge() {
//         const output = `${firstName}, you are ${age}, born in ${birthyear}`
//         // console.log(output);
//     }
//     printAge();
//     return age;
// }

// const firstName = "Samuel";
// calcAge(1997);

/*
===================
Hoisting: this is when some type of variables are accessible or available for use before they are actually declared
==================
*/

// console.log(me);
// console.log(job1);
// console.log(year1);

var me = "Samuel";
let job1 = "Teacher";
const year1 = 25;

//function

// console.log(addDecl(2, 3));
// console.log(addExp(2, 3));
// console.log(addArrow(2, 3));

function addDecl(a, b) {
    return a + b;
}

const addExp = function (a, b) {
    return a + b
}

let addArrow = (a, b) => a + b;

//Example
//remember undefined is a falsy value
// if (!numsProduct) console.log(deleteProduct());
// console.log(numsProduct);
var numsProduct = 10;

function deleteProduct() {
    // console.log('Product deleted');
}




/*
===================
Regular function vs Arrow function
this keyword: special value created for every execution context(every function).
Takes the values of or points to the owner of the function in which the this keyword is used.
==================
*/
//make use of the regular function inside objects if the this keyword is going to be used later
//never use arrow function as a method

const user1 = {
    first_name: "Samuel",
    Year: 1991,
    calAge4: function () {
// return 2037 - this.Year;

        //declaring and calling function in an objects
        //this shoud throw an error, use the below
        //solution 1
        // const self = this;
        // const isMille = function () {
        //     // console.log(this.Year >= 1981 && this.Year <= 1996);
        //     console.log(self.Year >= 1981 && self.Year <= 1996);
        // }
        // console.log(this);
        // console.log(2037 - this.Year);

        //solution 2
        const isMille = () => {
            // console.log(this.Year >= 1981 && this.Year <= 1996);
        }

        isMille();
    },
    //arrow function does not get to use its own this keyword, it uses the this keyword from the global scope
    greet: () => `Hey! + ${this.first_name}`
}

// const f = user1.calAge4;

user1.calAge4();
// console.log(user1.greet());

/* =====================
/ primitive and objects
======================
*/

let lastName = "Williams"
let oldLastName = lastName
lastName = "Davis"

// console.log(lastName);
// console.log(oldLastName);

const user2 = {
    firstName: "jessica",
    lastName: "Williams",
    age: 27
}

const user3 = user2
user2.lastName = "Davis"

/*
Data structures, Modern operators and strings
*/

/*
Destruction arrays
since the order matters, we need to make spaces(if we want to unpack or assign more than one values to various variables)
*/

// const restaurant = {
//     name: "Classico Italiano",
//     location: "Via Angelino 23, Firenze italy ",
//     categories: ['italians', 'Pizzeria', 'Vegetarian', "Organic"],
//     starterMenu: ["Foccasia", "Brusheta", "Garlic-Bread", "Caprese salad"],
//     mainMenu: ['Pizza', "pasta", "Rissito"],
//     order: function (starterMenuIndex, mainMenuIndex) {
//         //return an array of the item selected from the both properties in the object
//         return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
//     }
// }

// const [first, second] = restaurant.categories
// console.log(first, second);
// let [first, , third] = restaurant.categories;
// console.log(first, third);

//switching the 3rd to first
// const temp = first;
// first = third;
// third = temp;
// console.log(first, third);

//switching values using destructuring
// [first, third] = [third, first];
// console.log(first, third);

//calling the methods of the ordered menu
// console.log(restaurant.order(2, 0));
// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

//nested arrays
// const nested = [1, 2, [3, 4]];
// [i, , j] = nested;
// // console.log(i, j);

// [k, , [n, o]] = nested;
// console.log(k, n, o);
// console.log(n, k, o);
// console.log(k, n);

//default values
// const [x, y, z] = [1, 2]
// console.log(x, y, z);
const [x = 1, y = 1, z = 1] = [2]
// console.log(x, y, z);

/*
DEstructuring OBJECT
you use a curly bracket to destructure objects
the variable must match the property you want to unpack
since the order does not matter, we don't need to skip by making spaces but we need the properties to unpack.
*/

// const restaurant = {
//     name: "Classico Italiano",
//     location: "Via Angelino 23, Firenze italy ",
//     categories: ['italians', 'Pizzeria', 'Vegetarian', "Organic"],
//     starterMenu: ["Foccasia", "Brusheta", "Garlic Bread", "Caprese salad"],
//     mainMenu: ['Pizza', "pasta", "Rissito"],
//     order: function (starterMenuIndex, mainMenuIndex) {
//         //return an array of the item selected from the both properties in the object
//         return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
//     },
//     openingHour: {
//         thu: {
//             open: 12,
//             close: 22
//         },

//         fri: {
//             open: 11,
//             close: 23
//         },

//         sat: {
//             open: 0,
//             close: 24
//         }
//     },
// //     //parameter as objects, use curly brackets in the function to destructure.
// //     //destructuring inside the objects using functions
//     orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "00:00", address = 'Office' }) {
//         console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time}, to ${address}`);
//     },

//     orderPasta: function (ing1, ing2, ing3) {
//         // console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
//     },

//     orderPizza: function (mainIngredient, ...otherIngredients) {
//         console.log(mainIngredient, otherIngredients);
//     }

// };


// restaurant.orderDelivery({
//     time: '22:30',
//     address: 'via del solte, 33.',
//     mainIndex: 2,
//     starterIndex: 2
// });

//for default values
// restaurant.orderDelivery({

// });


// const { name, openingHour, categories } = restaurant;
// // console.log(name, openingHour, categories);

// //making the variables name different from the properties name
// const { name: restaurantName, openingHour: hours, categories: tags } = restaurant;
// // console.log(restaurantName, hours, tags);

// //default values
// //if the property before the value is not available the default value will be called
// const { menu = [], starterMenu: starters = [] } = restaurant;
// // console.log(menu, starters);

// //mutating values
// let ab = 111;
// let ba = 999;

// const obj = { ab: 23, ba: 7, cb: 14 };
// //need to put in a parenthesis if the variable has been declared before, and you intend to use the same variable name
// ({ ab, ba } = obj);
// // console.log(ab, ba);

// //nested object
// const { fri } = openingHour;
// console.log(fri);
// const { fri: { open, close } } = openingHour;
// console.log(open, close);
// const { fri: { open: op, close: ce } } = openingHour;
// // console.log(op, ce);



// /*
// SPREAD OPERTOR
// =>when you want the element of the array individually use spread operator.
// =>it takes all the element in an array, and does not create variables.
// iterables are: arrays, maps, strings and set but not objects
// */

// const arr = [7, 6, 8]
// const badNewarray = [1, 2, 3, arr[0], arr[1], arr[2]];
// // console.log(badNewarray);

// const goodarr = [1, 2, 3, ...arr];
// console.log(goodarr);

// const newMenu = [...restaurant.mainMenu, "Fried rice"];
// console.log(newMenu);

// //shallow copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// //joining 2 arrays
// const CompleteMenu = [...restaurant.starterMenu, ...mainMenuCopy];
// // console.log(CompleteMenu);

// //expanding strings
// let str1 = 'Samuel';
// // console.log(...str1);

// //spread operator operation
// // const ingredients = [prompt(' let\'s make pasta! ingredient 1?'), prompt(' let\'s make pasta! ingredient 2?'),
// // prompt(' let\'s make pasta! ingredient 3?')]
// //method 1
// // restaurant.orderPasta(ingredients[0], ingredients[1], ingredients[2]);
// //spread method
// // restaurant.orderPasta(...ingredients);

// //spread operation on objects
// const newRestaurants = { founded: 2023, ...restaurant, founder: "Sam Mas" }
// console.log(newRestaurants);

// //shallow copying
// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Sam Bol';
// // console.log(restaurant.name);
// // console.log(restaurantCopy.name);


// //next
const add = function (...numbers) {
    let count = 0
    for (let i = 0; i < numbers.length; i++) {
        count += numbers[i];
    }
    // console.log(count);
}

add(1, 2, 3);
add(4, 5, 6, 7, 8);
add(9, 10, 11, 12, 13, 14, 15);

// // //using spread operator
// let xl = [3, 27, 97];
// add(...xl);


 /*
// REST PATTERNS AND PARAMETERS
// =>it collect multiple elements and condensed them into an array.
=>it must be the last element.
=>it is used on the left side
 */

// const [e, d, ...others] = [1, 2, 3, 4, 5]
// console.log(e, d, others);

// //spread and rest pattern on array.
// const [pizza, , rissito, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(pizza, rissito, otherFood);

// //destructuring and rest pattern on object.
// const { sat, ...otherweekdays } = restaurant.openingHour;
// console.log(sat, otherweekdays);

// //functions
// // const add = function (...numbers) {
// //     console.log(numbers);
// // }


// //rest parameter
// let user_1_Order = restaurant.orderPizza('Onions', 'Spinach', 'Broccolli', 'Cabbage');
// console.log(user_1_Order);


// /*
// Short circuit
// => This return the first truthy value when used with the or || logical operator
// */

console.log("===OR===");
//will return the first truthy value of the operand
// // console.log(3 || 'Samu');
// console.log('' || 'Samuel');
// console.log(true || 0);
console.log(undefined || null || NaN);
// console.log('' || 'Samuel');

console.log("===AND===");
//will return the first falsy value of the operand
//=>if the evaluation is truth, it moves and run the next possible evaluation, if no evaluation exist it sticks with the value of  the recent evaluation.
//if all are truthy it returns the last value.
// console.log(0 && 'Jonas');
// console.log(7 && "Samuel");
// console.log('Hello' && 23 && null && 'samuel');

/*
THE NULLISH COALISCING OPERATOR
=>the alternative evaluation run only when the first is null or undefined.
*/

// restaurant.numguest = 0;
// const guest = restaurant.numguest || 0;
// console.log(guest);

// const guestCorrect = restaurant.numguest ?? 0;
// console.log(guestCorrect);


/*
LOGICAL aSSIGNMENT OPERATOR
=>if the value of the first comparison is truthy, the "&&" assigns a value to a variable
=>
*/

// const rest1 = {
//     name: 'Capri',
//     numGuest: 20
// }

const rest1 = {
    name: 'Capri',
    numGuest: 0
}

const rest2 = {
    name: 'La Piazzi',
    owner: "Giovanni Rossi"
}

rest1.numGuest = rest1.numGuest || 10;
rest2.numGuest = rest2.numGuest || 10;
// console.log(rest1);
// console.log(rest2);

rest1.numGuest ||= 10;
rest2.numGuest ||= 10;
// console.log(rest1);
// console.log(rest2);

// rest1.numGuest ??= 10;
// rest2.numGuest ??= 10;
// console.log(rest1);
// console.log(rest2);


rest1.owner = rest1.owner && "<ANONYMOUS>";
rest2.owner = rest2.owner && "<ANONYMOUS>";
// console.log(rest1);
// console.log(rest2);


/*
The for-of loop

*/

// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
// for (const item of menu) {
//     // console.log(item);
// }

//indicating the index
// for (const item of menu.entries()) {
//     // console.log(item);
// }

//cleaner way
// for (const item of menu.entries()) {
//     // console.log(`${item[0] + 1}: ${item[1]}`);
// }

//using destructuring
// for (const [i, el] of menu.entries()) {
//     // console.log(`${i + 1}: ${el}`);
// }


/*
OBJECT LITERALS
=>different way to render objects
=>if want to use variable name as property name you have to put it inside square bracket.
*/

// const openingHour = {
//     thu: {
//         open: 12,
//         close: 22
//     },

//     fri: {
//         open: 11,
//         close: 23
//     },

//     sat: {
//         open: 0,
//         close: 24
//     }
// };

let weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

const openingHour = {
    [weekdays[3]]: {
        open: 12,
        close: 22
    },

    fri: {
        open: 11,
        close: 23
    },

    //any property value can be used here.
    // [`day-${2 + 4}`]: {
    //     open: 0,
    //     close: 24
    // },
    [weekdays[6]]: {
        open: 0,
        close: 24
    }
};


const restaurant = {
    name: "Classico Italiano",
    location: "Via Angelino 23, Firenze italy ",
    categories: ['italians', 'Pizzeria', 'Vegetarian', "Organic"],
    starterMenu: ["Foccasia", "Brusheta", "Garlic Bread", "Caprese salad"],
    mainMenu: ['Pizza', "pasta", "Rissito"],
    //using Es6 enhanced objects literals
    order(starterMenuIndex, mainMenuIndex) {
        //return an array of the item selected from the both properties in the object
        return [this.starterMenu[starterMenuIndex], this.mainMenu[mainMenuIndex]];
    },
    // openingHour: openingHour,

    //using Es6 enhanced objects literals
    openingHour,

    //     //parameter as objects, use curly brackets in the function to destructure.
    //     //destructuring inside the objects using functions
    orderDelivery: function ({ starterIndex = 1, mainIndex = 0, time = "00:00", address = 'Office' }) {
        // console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} at ${time}, to ${address}`);
    },
    //using Es6 enhanced objects literals
    orderPasta(ing1, ing2, ing3) {
        // console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}.`);
    },

    orderPizza: function (mainIngredient, ...otherIngredients) {
        // console.log(mainIngredient, otherIngredients);
    }

};

// console.log(restaurant);


/*
optional chaining
*/

//using the if to catch errors
if (restaurant.openingHour) {
    // console.log(restaurant.openingHour.mon.open);
}

//short circuiting
if (restaurant.openingHour && restaurant.openingHour.mon) {
    // console.log(restaurant.openingHour.mon.open);
}

//optional chaining
// console.log(restaurant.openingHour.mon?.open);

//more examples
const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
for (const day of days) {
    const open = restaurant.openingHour[day]?.open ?? 'closed';
    // console.log(open);
}

//with methods
// console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');

//with Arrays
const user = [{ name: 'Sam Bolu', email: 'samuelldmj@mail.com' }];
// console.log('with arrays', user[0]?.name ?? 'User does not exist');

//without optional chaining
if (user.length > 0) {
    // console.log(user[0].name);
} else {
    'User is empty';
}


/*
Looping Objects: Object Keys, Values, and Entries
*/

//object keys
const properties = Object.keys(openingHour);
// console.log(properties);

// console.log(`We are open ${properties} a week`);
let openDays = `We are open ${properties.length} days a week: `;
for (const day of properties) {
    openDays += `${day} `;
}
// console.log(openDays);


//object keys
const values = Object.values(openingHour);
// console.log(values);

//entire object using entries method
const entries = Object.entries(openingHour);
// console.log(entries);

//using for of loop
for (const [key, { open, close }] of entries) {
    // console.log(`on ${key} we open at ${open} and close at ${close}`);
}


/*
SETS
=> you can not retrieve value from a set
*/

const orderSet = new Set(['pizza', 'pasta', 'pizza', 'macaroni', 'pasta']);
//duplicate values are reduced to one.
// console.log(orderSet);
//size
console.log('size', orderSet.size);
//check what element is available
// console.log(orderSet.has('bread'));
// console.log(orderSet.has('pasta'));

//adding elements
// orderSet.add('slim pasta');
// console.log(orderSet);

//deleting elements
// orderSet.delete('pasta');
// console.log(orderSet);
// console.log(orderSet.has('pasta'));

//deleting all elements from a set
// orderSet.clear();
// console.log(orderSet);

//looping set
// for (let el of orderSet) console.log(el);

//more examples
const staff = new Set(['chef', 'cleaner', 'messenger', 'chef', 'bar-man', 'cleaner'])
// console.log(staff);

//using spread operator
let new_staff_array = [...staff];
// console.log(new_staff_array);

/* 
MAP

*/

let mapDataStructure = new Map();
mapDataStructure.set('name', 'Samuel Daniel');
mapDataStructure.set('categories', ['pasta', 'macaroni', 'pizza'])
    .set('open', 11)
    .set('close', 23)
    .set(true, 'we are open :D')
    .set(false, 'we are closed :(');
// console.log(mapDataStructure);

const time = 21;
// console.log(mapDataStructure.get(time > mapDataStructure.get('open')) && time < mapDataStructure.get('close'));

// console.log(mapDAataStructure.has('categories'));

//populating a new map without using set methods
let question = new Map([
    ['question', 'what is the best programming language in the world'],
    [1, 'C'],
    [2, 'JAVA'],
    [3, 'JavaScript'],
    ['correct', 3],
    [true, 'correct'],
    [false, 'try again'],
]);
// console.log(question);


//object to map
const hoursMap = new Map([Object.entries(openingHour)]);
// console.log(hoursMap);


//iterating through maps
for (let [key, val] of question) {
    if (typeof key === 'number') {
        // console.log(`Option ${key}:  ${val}`);
    };

};


// let prom = Number(prompt('Your answer is?'));
// console.log(ans);

// let result1 = question.get(prom === question.get('correct'))
// console.log(result1);

//map to array
// console.log([...question]);
// console.log([...question.keys()]);
// console.log([...question.values()]);



/*
WORKING WITH STRING
=>they are immutable
*/

const airplane = "SAM AIRLINE NIGERIA";
const plane = "A320kc";
// console.log(airplane[0]);
// console.log(plane[2]);
// console.log("B427"[3]);
// console.log(airplane.length);
// console.log(plane.length);

//these methods are case sensitive it returns [-1] if exact character not found
//they return the last occurrence of a string in the case of character occuring more than ones
// console.log(airplane.indexOf('a'));
console.log("lastindexof", airplane.lastIndexOf('i'));

// console.log(airplane.indexOf('A'));
// console.log(airplane.lastIndexOf('I'));

//index count based on first character S
// console.log(airplane.indexOf('SAM'));

//slicing
// console.log(airplane.slice(4));
// console.log(airplane.slice(4, 7));

// console.log(airplane.slice(0, airplane.indexOf(' ')));
// console.log(airplane.slice(airplane.lastIndexOf(' ')));

//negative slicing: from the back
// console.log(airplane.slice(-3));
// console.log(airplane.slice(1, -3));

// console.log(airplane.toLowerCase());
// console.log(plane.toUpperCase());

//make passenger sAmuEL to Samuel
let passenger = "sAmuEL";
let passengerLower = passenger.toLowerCase();
let passengerCorrect = passengerLower[0].toUpperCase() + passengerLower.slice(1)
// console.log(passengerCorrect);


//comparing email
let emailFormat = 'hello@mail.io';
let user1InputtedEmail = ' Hello@mail.Io';

if (user1InputtedEmail === emailFormat) {
    console.log('login');
} else {
    // console.log("Invalid Email");
}

let user_1_trim = user1InputtedEmail.trim();
let user_1_corrected = user_1_trim.toLowerCase();
//oneline
let oneLine_user_1_correction = user1InputtedEmail.toLowerCase().trim();


// console.log(user_1_corrected);
// console.log(user1InputtedEmail);
// console.log(oneLine_user_1_correction);


//replacing
let priceNG = '289,58#';
let priceUS = priceNG.replace(',', '.').replace('#', '$')
// console.log(priceUS);

let info2 = "All passenger should come to boarding door 27. Boarding door 27!!!";
let infoReplaced = info2.replace('door', 'gate');
// console.log(infoReplaced);
//using reexp
let infoRegex = info2.replace(/door/g, 'gate');
// console.log(infoRegex);

//boolean
const plane2 = 'A352bc';
// console.log(plane2.includes('352'));
// console.log(plane2.includes('Air'));
// console.log(plane2.startsWith('Airbus'));

//practise
const checkBaggage = function (items) {
    let searchBaggage = items.toLowerCase();

    if (searchBaggage.includes('knife') || searchBaggage.includes('guns')) {
        return 'You are not allowed onboard the plane';
    } else {
        return 'Welcome aboard!';
    }
}

let passenger_1 = checkBaggage('clothes, socks and books');
let passenger_2 = checkBaggage('knife, phones and book');
let passenger_3 = checkBaggage('guns, and a coffee');
let passenger_4 = checkBaggage('clothes and Laptop')

// console.log(passenger_1);
// console.log(passenger_2);
// console.log(passenger_3);
// console.log(passenger_4);


//split strings
// console.log('a+very+nice+string'.split('+'));
// console.log('Samuel Boluwatife'.split(' '));
let [firstName2, lastName2] = 'samuel Boluwatife'.split(' ')

let fullName1 = ['Mr.', firstName2, lastName2.toUpperCase()].join(' ');
// console.log(fullName1);  


//capitalizing first character using custon function

const firstCharacterToUpper = function (character) {
    let names = [];
    let ele = character.toLowerCase().split(' ')
    for (let n of ele) {

        names.push(n[0].toUpperCase() + n.slice(1));
    }
    return names.join(' ');
}

// console.log(firstCharacterToUpper('SaMuEL boluwatife oluwadamilare'));
// console.log(firstCharacterToUpper('SaMuEL moyin'));
// console.log(firstCharacterToUpper('SaMuEL ngozi'));


//string padding
const info3 = 'Go to gate 23!'
// console.log(info3.padStart(25, '#'));
let info3a = info3.padStart(20, '#').padEnd(30, '#')
console.log(info3a);

//masking creditCard

const maskingCreditCard = function (val) {
    const valTostring = val.toString();
    const lastFourDigit = valTostring.slice(-4);
    return lastFourDigit.padStart(valTostring.length, '*');
}

//first call got approximated due to largeness
// console.log(maskingCreditCard(646564654464647545));
// console.log(maskingCreditCard('456746764646564654464646854'));
// console.log(maskingCreditCard(64676545674));


//repeat method
const info4 = "Bad Weather... all passengers would need to be patient\n ";
// console.log(info4.repeat(5));

//working with string practise

const flights =
    `_Delayed_Departure;fao9366109;txl2133158440;11:25
    +_Arrival; bru0943384722; fao937666109;11:45
    +_Delayed_Arrival;hel7439299980;fao93766109;12:05
    +_Departure;fao9366109;txl23236399855;12:30
     `;


// const getCode = str => str.slice(0, 3).toUpperCase();

// for (const flight of flights.split('+')) {
//     const [type, from, to, time] = flight.split(';');
//     let output2 =
//         `${type.startsWith('_Delayed') ? "🔴" : ''}${type.replace(/_/g, ' ')} from ${getCode(from)} to ${getCode(to)} (${time.replace(/:/g, 'h')})`.padStart(15)
//     console.log(output2);
// }


/*
MORE FUNCTION
*/

let bookings = [];

const createBooking = function (flight1, numPassengers = 1, price = 199 * numPassengers) {

    let booking = {
        flight1,
        numPassengers,
        price
    };
    bookings.push(booking)
    return booking;
}

// console.log(createBooking('LH42', 5));
// console.log(createBooking('NY77', 20));
// console.log(createBooking('TX54', 10));
// console.log(createBooking('FR22', 24));

const oneWord = function (str) {
    return str.replace(/ /g, '').toLowerCase();
}

const upperFirstWord = function (str) {

    const [first, ...other] = str.split(' ');
    return [first.toUpperCase(), ...other].join(' ');
}

const transformer = function (wor, fn) {
    console.log(`Original String: ${wor}`);
    console.log(`Transformed String: ${fn(wor)}`);
    console.log(`Transformed by: ${fn.name} `);
}

// transformer('JavaScript is the best ', upperFirstWord);
// transformer('JavaScript is the best ', oneWord);


//function returning function
// const greet = function (greeting) {
//     return function (name) {
//         console.log(`${greeting} ${name}`);
//     };

// }

// const greeterHey = greet('Hey')
// greeterHey('Sam');

//arrow function
// const greet2 = (greeting) => (name) => {
//     console.log(`${greeting} ${name}`);
// }

const addTax = (rate) => (val) => {
    rate += rate * val;
    return `Your Tax rate is ${rate}, on an income of ${val} dollar(s)`;
}

let taxable = addTax(0.1);
// console.log(taxable(1000));



// let greetHey2 = greet2('Hello');
// greetHey2('Bolu');

const lufthansa = {
    airline: 'lufthansa',
    iataCode: 'LH',
    bookings: [],
    book(flightNum, names) {
        console.log(`${names} books a seat on ${this.airline} flight ${this.iataCode}${flightNum}`);
        this.bookings.push({ flight: `${this.airline} flight ${this.iataCode}${flightNum}`, names })
    }

}


// lufthansa.book(239, 'Samuel Boluwatife');
// console.log(lufthansa.bookings);
// lufthansa.book(635, 'Samuel Mercy');

//USING EXTERNAL FUNCTION TO GET THE BOOK METHOD FROM THE LUFTHANSA OBJECT
/*This book constant is now a function representing the method book from the object. This will return an error because the method refered to the object by the this keyword. You can not use this keyword in traditional function except in method of an object.*/
const book = lufthansa.book

const eurowings = {
    airline: 'eurowings',
    iataCode: 'EW',
    bookings: [],
}

//using call method to distinguish which book methods that should be called as result of the THIS keyword in lufthansa object
book.call(eurowings, 424, 'Daniel koko');
// console.log(eurowings);

const flightData = [583, 'Sam Mas'];
// book.call(eurowings, ...flightData)

//bind method
//this binds a function to a method in an object
const bookEw = book.bind(eurowings);
const bookLf = book.bind(lufthansa);
// bookEw(235, "Dan San");
// bookLf(424, "San Dan");

//more binding
let bookEw24 = book.bind(eurowings, 254);
bookEw24('Adewole Clement');


//eventlistner
lufthansa.planes = 300;
lufthansa.buyplanes = function () {
    console.log(this);

    this.planes++;
    // console.log(this.planes);
}

// let buyPlaneBtn = document.querySelector('.buy');

// buyPlaneBtn.addEventListener('click', lufthansa.buyplanes.bind(lufthansa));


/*
Closure
*/

const secureBooking = function () {
    let passengerCount = 0;

    return () => {
        passengerCount++;
        console.log(`${passengerCount} passengers`);
    }
}

const booker = secureBooking()
// booker()
// console.dir(booker);


let f;
let g = function () {
    const a = 23;

    f = function () {
        console.log(a * 2);
    }
}

const h = function () {
    const b = 777;

    f = function () {
        console.log(b * 2);
    }
}


// g();
// f();
// h();
// f();


/*
ARRAY AND ARRAY METHODS;
*/

let arr = ['a', 'b', 'c', 'd', 'e'];
//SLICE
// console.log(arr.slice(2));
// console.log(arr.slice(1, -2));

//SPLICE
// console.log(arr.splice(2));
// console.log(arr.splice(1, 2));
// console.log(arr);

//REVERSE
let arr2 = ['f', 'g', 'h', 'i'];
// console.log(arr2.reverse());
// console.log(arr2);

//CONCAT
let letters = arr.concat(arr2);
// console.log([...arr, ...arr2]);
// console.log(letters);

//index based selection
// console.log(arr[0]);
// console.log(arr.at(0));

//GETTING THE LAST ELEMENT OF AN ARRAY
// console.log(arr.slice(-1)[0]);
// console.log(arr[arr.length - 1]);
// console.log(arr.at(-1));

//ForEach loop on array
const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];
// for (let [i, movement] of movements.entries()) {
//     if (movement > 0) {
//         console.log(`Transaction ${i + 1}, You deposited: ${movement}`);
//     } else {
//         console.log(`Transaction ${i + 1}, You withdraw: ${Math.abs(movement)}`);
//     }
// }

//using FOREACH LOOP
// movements.forEach((el) => {
//     if (el > 0) {
//         console.log(`You deposited ${el}`);
//     } else {
//         console.log(`You withdraw ${Math.abs(el)}`);
//     }
// })

//el = element, i = index, arr = all the element of the array.
// movements.forEach((el, i, arr) => {
//     if (el > 0) {
//         console.log(`Transaction ${i + 1}, You deposited: ${el}`);
//     } else {
//         console.log(`Transaction ${i + 1}, You withdraw: ${Math.abs(el)}`);
//     }
// })

//ForEach loop on MAP AND SET
const currencies = new Map([
    ['USD', 'United States dollar'],
    ['EUR', 'Euro'],
    ['GBP', 'Pound sterling'],
]);



currencies.forEach((value, key) => {
    // console.log(`${key}: ${value}`);
})


//ARRAY MAP FOREACH
const euroToUsd = 1.1;

const movementToUsd = movements.map((mov) => Math.trunc(mov * euroToUsd));
// console.log(movements);
// console.log(movementToUsd);

//FOR-OF LOOP
const movementToUsdFor = [];
for (const mov of movements) {
    movementToUsdFor.push(mov * euroToUsd);
}
// console.log(movementToUsdFor);

//MAP working like forEach loop
const movementsDescription = movements.map((mov, i) =>

    `Movement ${i + 1}: You ${mov > 0 ? 'deposited' : 'withdrew'} ${Math.abs(mov)}`
);
// console.log(movementsDescription);


//computing usernmame using Array map and foreach
const user4 = 'Steven Thomas Williams';
// const username2 = user4.toLowerCase().split(' ')
//     .map(function (params) {
//         return params[0];
//     }).join();

// console.log(username2);

//using arrow function
// const username2 = user4.toLowerCase().split(' ')
//     .map(params => params[0][0]).join('_');
// console.log(username2);

//using map
const userNameGenerator = function (fullName) {
    let username = fullName.toLowerCase().split(' ').map(params => params[0][0]).join('_');
    return username;
}
let user5 = 'Oluwadamilare Boluwatife Samuel'
console.log(userNameGenerator(user4));
console.log(userNameGenerator(user5));


//ARRAY FILTER movements to deposit 
const deposits = movements.filter(mov => mov > 0)
// console.log(movements, 'deposits', deposits);

//using fir-of loop
// let filteredDeposits = [];
// for (let mov of movements) {
//     if (mov > 0) filteredDeposits.push(mov)

// }
// console.log(filteredDeposits);


//ARRAY FILTER movements to withdrawals
const withdrawals = movements.filter(mov => mov < 0)
// console.log('Withdrawals', withdrawals);

// ARRAY REDUCE METHOD
const balance = movements.reduce(function (acc, el, i) {
    // console.log(`Iteration ${i}: ${el}: ${acc}`);
    return acc + el;
}, 0)

// console.log(movements, balance);

//using for of loop
let sumBalance = 0;
for (let mov of movements) {
    sumBalance += mov;
}

// console.log(sumBalance);

//maximum value
const max = movements.reduce((pre, cur, i) => {
    if (pre > cur) {
        return pre
    } else {
        return cur;
    }
}, movements[0])
console.log(max);

//using foreach loop
let maxFor = movements[0];
movements.forEach(el => {
    if (el > maxFor) {
        maxFor = el;
    }
})

// console.log(maxFor);


/*
METHOD CHAINING
*/

const euroToPd = 1.1;
const totalDepositPd = movements.filter(mov => mov > 0)
    .map(mov => mov * euroToPd).reduce((acc, mov) => acc + mov, 0);
// console.log(totalDepositPd);


/*
FIND METHODS
 */

const firstWithdrawal = movements.find(mov => mov < 0)
// console.log(firstWithdrawal);

// for (const [key, { open, close }] of entries) {
//     console.log(`on ${key} we open at ${open} and close at ${close}`);
// }

// for (let [k, v] of Object.entries(accounts)) {
//     if (k === 'owner' && v === "Jessica Davis") {
//         console.log(k, v);
//     }
// }

/*
================
some and every methods
*/
console.log(movements); 
//includes return true when it finds similar element in the array. checks for equality
// console.log(movements.includes(-130));

const anyDeposits = movements.some(mov => mov > 0);
const anyDepositsAbove500 = movements.some(mov => mov > 500);
// console.log(anyDeposits);

//every returns true, if all of the elements meet the conditions in our call back function
// console.log(movements.every(mov => mov > 0));

//separate call back
const deposit = mov => mov > 0;
// console.log(movements.some(deposit));
// console.log(movements.every(deposit));
// console.log(movements.filter(deposit));

/*
===================
flat and map
*/
const arr3 = [[1,2,3], [4,5,6], 7, 8 ];
// console.log(arr3.flat());
//it does not flattened nested array.
//to flatten nested array you have to specify the depth argument
const arr4 = [[1,2,["a","b"]], [4,5,6,["c","d","e"]], 7, 8 ];
// console.log(arr4.flat(2));

// Data
const account1 = {
    owner: 'Samuel Boluwatife',
    movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
    interestRate: 1.2, // %
    pin: 1111,
  };
  
  const account2 = {
    owner: 'Jessica Davis',
    movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
    interestRate: 1.5,
    pin: 2222,
  };
  
  const account3 = {
    owner: 'Steven Thomas Williams',
    movements: [200, -200, 340, -300, -20, 50, 400, -460],
    interestRate: 0.7,
    pin: 3333,
  };
  
  const account4 = {
    owner: 'Sarah Smith',
    movements: [430, 1000, 700, 50, 90],
    interestRate: 1,
    pin: 4444,
  };
  
const accounts = [account1, account2, account3, account4];

const allAccountMovement = accounts.map(mov => mov.movements);
// console.log(allAccountMovement);

let allMovementsIntoArray = allAccountMovement.flat()
console.log(allMovementsIntoArray);

let overAllBal = allMovementsIntoArray.reduce((acc, el)=> acc + el)
console.log(overAllBal);

//flatMap
let overAllBal2 = accounts.flatMap(acc => acc.movements).reduce((acc, el) => acc + el);
console.log(overAllBal2);



















































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































































