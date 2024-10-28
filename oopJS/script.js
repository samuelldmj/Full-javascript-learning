'use strict';

//constructor function
//they are just like regular functions, but they are called using the new keyword.
//  function  Person(fname, age, year) {

//     //properties
//     this.full_name = fname,
//     this.user_age = age, 
//     this.user_year = year

//     //methods
//     //not advisable to have methods inside constructor function.
//     // this.calAge = function(){
//     //     console.log(2037 - this.user_year);
//     // }

//     // console.log(this);
// }

// let john = new Person('John D', 25, 1999);
// let sam = new Person('Samuel', 27, 1997);


// john.calAge();
// sam.calAge();
// console.log(john instanceof Person);

/*
what happens when a constructor function is called using the new keyword.
1. New {object} is created.
2. this refers to or would be set to the object created.
3. the object is linked to a prototype property
*/

 //Prototypes
 //every functions in js by default have a property called prototypes
 //which means every objects would have access to  or inherit  the properties and methods defined in the constructor function 
 //prototype is mechanism for reusing code, creating methods and properties
 //it is an object where methods and properties not defined in the constructor function are stored or made available

 /*person.prototype is not the prototype of person, but the prototype of the objects created from person*/
// console.log(Person.prototype);
// Person.prototype.calAge = function(){
//     console.log(2037 - this.user_year);
// }
// john.calAge();
// sam.calAge();

// Person.prototype.species = 'Homo Sapiens';
// console.log(john.species, sam.species);

/*
__proto__ is a way to access an object's prototype, which is essentially a template object from which other objects inherit methods and properties
You
what are object's prototype
In JavaScript, an object's prototype is the mechanism by which objects inherit features from one another.
Each object has a __proto__ property that points to its prototype,
forming a chain that enables inheritance. Here's a breakdown:

Prototype Chain: When you access a property or method on an object,
JavaScript first looks at the object itself. If it doesn't find the property,
it looks at the object's prototype, and then at the prototype's prototype, and so on,
until it reaches the end of the chain (usually Object.prototype).

Creating Prototypes: You can create objects with specific prototypes using constructors or Object.create().

Modifying Prototypes: You can add or change properties on an object's prototype,
and all objects inheriting from that prototype will reflect those changes.
*/
//__proto__ will points to this prototype object
//it will also display the methods and properties that are on the prototype that can be inherited.
//john prototype property is the person.prototype
// console.log(john.__proto__);
// console.log(john.__proto__ === Person.prototype);
// console.log('Double');
// //this will go one step higher in the chain.
// console.log(john.__proto__.__proto__);
// console.log(sam.__proto__.__proto__);

// console.log(john.hasOwnProperty('full_name'));

//this point to the person constructor function
// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);

let h1  = document.querySelector('h1');
//arr prototypes
const arr = [3, 6, 4, 5, 8, 9,3,3,6, 2, 1];
// console.log(arr.__proto__)

Array.prototype.unique = function(){
    return [...new Set(this)];
}

// console.log(arr.unique());


//classes with es6
//class expression
//const PersonCl = class{}

//class declaration
// class PersonCl {
//   constructor(fName, year){
//     this.full_name = fName;
//     this.birthYear = year;
//   }

//   calAge(){
//     console.log(2037 - this.birthYear);
//   }

//   //to avoid clash in properties name with constructor when using the setter keyword, attach underscore to newly defined property in the setter block
//   //important for properties that already exist, use underscore.
//   set full_name(name){
//     if(name.includes(' ')){
//       console.log(name);
//      return this._full_name = name;
//     }else {
//       alert(`${name} is not full name`);
//     }
//   }

//   //to correct the clash or conflict in the property name use getter
//   get full_name(){
//     return this._full_name;
//   }

//   static hey(){
//     console.log("Hey from class!");
//   }
// }

// let brad = new PersonCl('Brad', 1940)
// console.log(brad);

// let bob =  new PersonCl('Alex Bob', 1999);
// bob.calAge();
// console.log(bob);

// PersonCl.prototype.greet = function(){
//   console.log(`Hey ${this.full_name}`);
// }

// bob.greet();

//getters and setters
//they are called accessors properties
//they get and set values.
const  account = {
  owner: 'Sam',
  movements : [200, 530, 120, 300 ],

  get latest(){
      this.movements.slice(-1).pop();
  },

  set latest(mov){
    this.movements.push(mov);
  }
}

//use it as a property
// console.log(account.latest) 

//setter
account.latest = 50;
// console.log(account.movements)


//STATIC METHOD
//constructor function
// Person.hey = function(){
//   console.log('Hey Static!');
// }

// Person.hey();

//class declaration
// PersonCl.hey();

//OBJECT CREATE
//the prototype is the object pass through the Object.create function                                                                                       
// const PersonProto = {
//   calAge(){
//     console.log(2037 - this.birthYear);
//   }
// }

// const steven = Object.create(PersonProto)
// console.log(steven);

// steven.name = "Steve Maddison";
// steven.birthYear = 2024;

// steven.calAge();

// console.log(steven.__proto__ === PersonProto);

/*=================================================== 
INHERITANCE BETWEEN CLASSES
===================================================
*/
// //CONSTRUTOR FUNCTION
// const Person = function (fName, year){
//   this.firstName = fName;
//   this.birthYear = year;
// }

// Person.prototype.calAge = function(){
//   console.log(2037 - this.birthYear);
// }

// const Student = function(fName, year, course){
//   Person.call(this, fName, year);
//   this.field = course;
// }

//linking prototypes;
// Student.prototype = Object.create(Person.prototype);
// Reset constructor for Student
// Student.prototype.constructor = Student;

// Student.prototype.introduce = function(){
//   console.log(`My name is ${this.firstName} and I study ${this.field}`)
// }
// let dan = new Student('Dan', 2021, 'Econonmics')
// console.log(dan);
// console.log(dan instanceof Student);
// console.log(dan instanceof Person);
// console.log(dan instanceof Object);
// console.log(dan.__proto__);
// console.log(dan.__proto__.__proto__);
// console.dir(Student.prototype.constructor)
// dan.introduce();
// dan.calAge();


/*
===========================================
===========================================
*/
//ES6 INHERITANCE
// class PersonCl {
//   constructor(fName, year){
//     this.full_name = fName;
//     this.birthYear = year;
//   }

//   calAge(){
//     console.log(2037 - this.birthYear);
//   }

//   //to avoid clash in properties name with constructor when using the setter keyword, attach underscore to newly defined property in the setter block
//   //important for properties that already exist, use underscore.
//   set full_name(name){
//     if(name.includes(' ')){
//       // console.log(name);
//      return this._full_name = name;
//     }else {
//       alert(`${name} is not full name`);
//     }
//   }

//   //to correct the clash or conflict in the property name use getter
//   get full_name(){
//     return this._full_name;
//   }

//   static hey(){
//     console.log("Hey from class!");
//   }
// }

// class StudentCl extends PersonCl
// {
//   constructor(fName, year, course){
//   //   //super function, the constructor function of the parent class.
//     //this always need to happen first.
//     super(fName, year);
//     this.field = course;
//   }

//   introduce(){
//     console.log(`My name is ${this.full_name}, and i am currently studying ${this.field}`)
//   }

//   //overriding the parent class methods
//   calAge(){
//     console.log(`I'm ${2037 - this.birthYear} years old, but I am Student.  `);
//   }
// }

//if you don't need new properties. i kept the constructor in the Student class commented out to make this work.
// let martha = new StudentCl('Martha Jade', 2003);
// console.log(martha);

//i uncommented the constructor in the student class
// let martha = new StudentCl('Martha Jade', 2003, 'Business Admin');
// console.log(martha.__proto__);
// martha.introduce();
// martha.calAge();


//more on classes
// class Account {
//   constructor(owner, currency, pin){
//     this.owner = owner;
//     this.currency = currency;
//     this.pin = pin;
//     //protected property {property can still be used externally}
//     this._movements = [];
//     this.locale = navigator.language;
//   }

//   //public interface of our object
//   deposit(mov){
//     this._movements.push(mov);
//   }

//   withdrawal(mov){
//     this.deposit(-mov);
//   }

//   approveLoan(mov){
//     return true
//   }
  
//   requestLoan(mov){
//     if(this.approveLoan(mov)){
//       this.deposit(mov);
//       console.log('Loan Approved');
//     }
//   }
// }

// const acc1 = new Account('Samuel', 'Pounds', 2525);
// console.log(acc1);

//wrong way interacting with properties
// acc1.movements.push(250);
// acc1.movements.push(-140);
// console.log(acc1);

// acc1.deposit(200);
// acc1.withdrawal(200);
// acc1.requestLoan(500);
// console.log(acc1);



/*
===========================================
===========================================
*/


//INHERITANCE WITH OBJECT.CREATE
//OBJECT CREATE
//the prototype is the object pass through the Object.create function                                                                                       
// const PersonProto = {
//   calAge(){
//     console.log(2037 - this.birthYear);
//   },

//   init(firstName, birthYear){
//     this.firstName = firstName;
//     this.birthYear = birthYear;
//   }
// }

// const steven = Object.create(PersonProto);
// const StudentProto = Object.create(PersonProto); 
// StudentProto.init = function(firstName, birthYear, course) {
//   PersonProto.init.call(this, firstName, birthYear);
//   this.field = course;
// }

// StudentProto.introduce = function(){
//  console.log(`My name is ${this.firstName}, and i am currently studying ${this.field}`)
//     }
// let abig = Object.create(StudentProto);
// abig.init('Abigail Snap', 2010, 'Agricultural Science');
// abig.introduce();
// abig.calAge();


/*
ENCAPSULATION:
involves bundling data (properties) and methods (functions) that operate on that data within a single unit,
typically an object. 
This practice promotes data privacy and code organization.

class fields proposal are used to protect properties and methods in JS
We have, but not limited to
Public firlds => see fields as properties that can be used on instances
Private firlds
Public methods
Private methods

*/
class Account {
  //public fields;
  //they are going to be present in all the instances not on the prototype property
  locale = navigator.language;
  // _movements = [];

  //private fields -> use the # symbol to make the field private.
  //can only be accessed within a class not via instance.
  #movements = [];
  #pin;



  constructor(owner, currency, pin){
    this.owner = owner;
    this.currency = currency;
    this.#pin = pin;
    //protected property {property can still be used externally}
    // this._movements = [];
    // this.locale = navigator.language;
  }

  //public interface of our object
  deposit(mov){
    this.#movements.push(mov);
    return this;
  }

  getMovements(){
    return this.#movements
    
  }

  withdrawal(mov){
    this.deposit(-mov);
    return this;
  }
  
  requestLoan(mov){
    if(this.#approveLoan(mov)){
      this.deposit(mov);
      console.log('Loan Approved');
      return this;
    }
  }

  //private methods
  #approveLoan(mov){
    return true
  }
}

const acc1 = new Account('Samuel', 'Pounds', 2525);
// console.log(acc1);

//wrong way interacting with properties
// acc1.movements.push(250);
// acc1.movements.push(-140);
// console.log(acc1);

acc1.deposit(200);
acc1.withdrawal(200);
acc1.requestLoan(500);

//not accessible outside the Account class.
// acc1.#approveLoan(100);

console.log(acc1);

//this will throw an error
// console.log(acc1.#movements);

//retrieve movements
// console.log(acc1.getMovements());

//methods chaining
acc1.deposit(100).deposit(200).withdrawal(150);


//enquire why the methods are on the prototypes;































































































































































































































































































































































//Functional Instantiation
// function Animal (name, energy) {
//     let animal = {}
//     animal.name = name
//     animal.energy = energy
  
//     animal.eat = function (amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     }
  
//     animal.sleep = function (length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     }
  
//     animal.play = function (length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
  
//     return animal
//   }
  
//   const leo = Animal('Leo', 7)
//   const snoop = Animal('Snoop', 10)
//   snoop.play(10);

//Functional Instantiation with Shared Methods and Object.create
// const animalMethods = {
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     },
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     },
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//   }
  
//   function Animal (name, energy) {
//     let animal = Object.create(animalMethods)
//     animal.name = name
//     animal.energy = energy
  
//     return animal
//   }
  
//   const leo = Animal('Leo', 7)
//   const snoop = Animal('Snoop', 10)
  
//   leo.eat(10)
//   snoop.play(5)


  //Prototypal Instantiation
// function Animal (name, energy) {
//     let animal = Object.create(Animal.prototype)
//     animal.name = name
//     animal.energy = energy
  
//     return animal
//   }
  
//   Animal.prototype.eat = function (amount) {
//     console.log(`${this.name} is eating.`)
//     this.energy += amount
//   }
  
//   Animal.prototype.sleep = function (length) {
//     console.log(`${this.name} is sleeping.`)
//     this.energy += length
//   }
  
//   Animal.prototype.play = function (length) {
//     console.log(`${this.name} is playing.`)
//     this.energy -= length
//   }
  
//   const leo = Animal('Leo', 7)
//   const snoop = Animal('Snoop', 10)
  
//   leo.eat(10)
//   snoop.play(5)

  /*
  prototype is just a property that every function in JavaScript has and,
as we saw above, it allows us to share methods across all instances of a function.
All our functionality is still the same but now instead of having to manage a separate object for all the methods,
we can just use another object that comes built into the Animal function itself, Animal.prototype.
  */

//Static Methods
// class Animal {
//     constructor(name, energy) {
//       this.name = name
//       this.energy = energy
//     }
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     }
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     }
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//   }
  
//   function nextToEat (animals) {
//     const sortedByLeastEnergy = animals.sort((a,b) => {
//       return a.energy - b.energy
//     })
  
//     return sortedByLeastEnergy[0].name
//   }
  
//   const leo = new Animal('Leo', 7);
//   const snoop = new Animal('Snoop', 10);
//   console.log(leo);
//   console.log(nextToEat([leo, snoop])) // Leo

//   /*
//   Whenever you have a method that is specific to a class itself, 
//   but doesn't need to be shared across instances of that class,
//    you can add it as a static property of the class.
//   */

//    class Animal {
//     constructor(name, energy) {
//       this.name = name
//       this.energy = energy
//     }
//     eat(amount) {
//       console.log(`${this.name} is eating.`)
//       this.energy += amount
//     }
//     sleep(length) {
//       console.log(`${this.name} is sleeping.`)
//       this.energy += length
//     }
//     play(length) {
//       console.log(`${this.name} is playing.`)
//       this.energy -= length
//     }
//     static nextToEat(animals) {
//       const sortedByLeastEnergy = animals.sort((a,b) => {
//         return a.energy - b.energy
//       })
  
//       return sortedByLeastEnergy[0].name
//     }
//   }

































































































































































































































































