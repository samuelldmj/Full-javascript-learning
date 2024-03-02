'use strict';
const prompt = require('prompt-sync')();
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
const birthYear = 1992;
//console.log(birthYear)

//OPERATORS (*, -, /, +, **)
//COMPARISON OPERATORS(<, >, >=, <=)
//OPERATOR PRECEDENCE -> consult MDN precedence operator
const now = 2037
const ageSam =  now - 1991
const ageDan = now - 2018
// console.log(now - ageSam > now - ageDan)
// console.log()

//STRINGS: TEMPlate LITERALS {` `}
const first_name =  "Samuel";
const job = 'teacher';
const birthY = 1997;
const year = 2037;

const sam =  "I'm " + first_name + ', a ' + job + ',' +  ' my age' + ' is ' + (year - birthY);
// console.log(sam)
const samNew = `I'm ${first_name}`

//The if else statement
const age = 8;
const isOldenough = age >= 18;
if(isOldenough){
    // console.log(`Samuel can obtain his driving license 🚗`)
}else{
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
if(money){
    // console.log("Don't spend all!")
}else{
    // console.log("Go get some money buddy!")
}

//EQUaLITY == VS ===
//strict operator does not perform type coercion
const age_1 = 18
if(age_1 === 18){
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
if(shouldDrive && !c){
    // console.log('Dan should drive')
}else{
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
function logger(){
    console.log("My name is Samuel")
}

//calling===inovking===running
logger();
logger();
logger();


//function with parameters
//the parameters are empty spaces that needs to filled out when writing a function
function fruitProcessor(oranges,apples){
    //console.log(oranges, apples);
    const juice = `Juice with ${oranges} oranges and ${apples} apples.`
    return juice;
}

//the values in the function below is called argument
// const orangeAppleJuice = fruitProcessor(2, 5);
// console.log(orangeAppleJuice);
// const appleJuice = fruitProcessor(0, 5);
// console.log(appleJuice)

//FUCNTION DECLARATION vs EXPRESSION

//Function declaration
function ageCal1(birthYear){
    return 2037 - birthYear;
    
}

const age1 = ageCal1(1991);
//console.log(age1);

//==============================
//EXPRESSION or ANONYMOUS FUCNTION
//==============================
//=>can be called before it is defined
const calAge2 = function (birthYear){
    return 2037 - birthYear;
}
const age2 = calAge2(1997)
// console.log(age1, age2);


//==================
//ARROW FUNCTION
//==================

const calAge3 = birthYear => 2037 - birthYear;
const age3 = calAge3(1991)
console.log(age3);
















































