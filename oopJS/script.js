'use strict';

//constructor function
//they are just like regular functions, but they are called using the new keyword.
 function  Person(fname, age, year) {

    //properties
    this.full_name = fname,
    this.user_age = age, 
    this.user_year = year

    //methods
    //not advisable to have methods inside constructor function.
    // this.calAge = function(){
    //     console.log(2037 - this.user_year);
    // }

    // console.log(this);
}

let john = new Person('John D', 25, 1999);
let sam = new Person('Samuel', 27, 1997);

// john.calAge();
// sam.calAge();
// console.log(john instanceof Person);

/*
what happens when a constructor function is called using the new keyword.
1. New {object} is created.
2. this refers or would be set to the object created.
3. the object is linked to a prototype
*/

 //Prototypes
 //every functions in js by default have a property called prototypes
 //which means every objects would have access to  or inherit  the properties and methods defined in the constructor function 
 //prototype is mechanism for reusing code, creating methods and properties
 //it is an object where methods and properties not defined in the constructor function are stored or made available

console.log(Person.prototype);
Person.prototype.calAge = function(){
    console.log(2037 - this.user_year);
}
john.calAge();
sam.calAge();

Person.prototype.species = 'Homo Sapiens';
// console.log(john.species, sam.species);

//__proto__ points to  prototype property of the constructor function you created
console.log(john.__proto__);
// console.log(sam.__proto__.__proto__);

//this point to the person constructor function
// console.log(Person.prototype.constructor);
// console.dir(Person.prototype.constructor);


//arr prototypes
const arr = [3, 6, 4, 5, 8, 9,3,3,6, 2, 1];
console.log(arr.__proto__)

Array.prototype.unique = function(){
    return [...new Set(this)];
}

console.log(arr.unique());
















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

































































































































































































































































