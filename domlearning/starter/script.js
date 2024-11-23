'use strict';

///////////////////////////////////////
// Modal window

const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');
const btnCloseModal = document.querySelector('.btn--close-modal');
const btnsOpenModal = document.querySelectorAll('.btn--show-modal');
const btnScrollTo = document.querySelector('.btn--scroll-to');
const section1 = document.querySelector('#section--1');

const openModal = function (e) {
  console.dir(e);
  e.preventDefault();
  modal.classList.remove('hidden'); 
  overlay.classList.remove('hidden');
};

const closeModal = function () {
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

//showing all modal window
btnsOpenModal.forEach(btn => btn.addEventListener('click', openModal));

// for (let i = 0; i < btnsOpenModal.length; i++)
//   btnsOpenModal[i].addEventListener('click', openModal);

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (e) {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal();
  }
});



btnScrollTo.addEventListener('click', function(e){
  const s1cords = section1.getBoundingClientRect();
  console.log(s1cords);

  // console.log(e.target.getBoundingClientRect())

  //scrolling
  // window.scrollTo({
  //   left:s1cords.left + window.pageXOffset,
  //   top: s1cords.top + window.pageYOffset,
  //   behavior:'smooth'
  // })

  //alternatively
  section1.scrollIntoView({behavior: 'smooth'})
})


//page navigation and smooth scrolling
//this is not efficient for large scale website. use event delegation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.dir(id);
//     document.querySelector(id).scrollIntoView({behavior:'smooth'});
//   })
// })

//event delegations
// add event listener to common parent element
//determin what element originated the event

document.querySelector('.nav__links')
.addEventListener('click', function(e){
  console.log(e.target);

  if(e.target.classList.contains('nav__link')){
    e.preventDefault();
        const id = e.target.getAttribute('href');
        document.querySelector(id).scrollIntoView({behavior:'smooth'});
  }
})


//Tranversing
const h1 = document.querySelector('h1');

//going downwards: to the child
// console.log(h1.querySelectorAll('.highlight'));
// console.log(h1.childNodes);
// console.log(h1.children);
h1.firstElementChild.style.color = 'tomato';

//going upward
console.log(h1.parentNode);
console.log(h1.parentElement);

h1.closest('.header').style.backgroundColor = "var(--color-secondary-darker)";
h1.closest('h1').style.backgroundColor = "var(--color-primary)";




//Event
// const h1 = document.querySelector('h1');
// const alerth1 = function(e){
//   alert('Hello world');

//   h1.removeEventListener('mouseenter', alerth1);
  
// }

// h1.addEventListener('mouseenter', alerth1)
 


// //Event Propagations
// const randInt = (min, max) => 
//   Math.floor(Math.random() * (max - min * 1) + min);

//  const randIntColor =  () => `rgb(${randInt(0,255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
// console.log(randIntColor());

// document.querySelector(".nav__link")
// //eventListner points to the capturing phase by default, that is, it focuses on the element that was clicked.
// //if the third argumemnt is set to true, we would have the bubbling phase indicated
// .addEventListener('click', function(e){
//   //console.log(e);
//   this.style.backgroundColor = randIntColor();
//   //e.target points to the exact element that was clicked
//   //while e.currentTarget points to the element or object on which eventListner is attached to.
//   //when the e.target bubbles up it triggers parent element that has eventListner but it would point to the element that was clicked
//   //while e.currentTarget when bubbling up points to the eventListner attached to it ancestors
//   console.log('nav link');
//   //console.log(e.target);
//   console.log(e.currentTarget);
// })

// document.querySelector(".nav__links")
// .addEventListener('click', function(e){
//   this.style.backgroundColor = randIntColor();
//   console.log('nav links');
//    //console.log(e.target);
//   console.log(e.currentTarget)
// })

// document.querySelector(".nav")
// .addEventListener('click', function(e){
//   this.style.backgroundColor = randIntColor();
//   console.log('nav');
//    //console.log( e.target);
//   console.log( e.currentTarget);
// })

 































































//sample
//acessing the full body of the html document
// console.log(document.documentElement);
// let header = document.querySelector('.header');

// // //creating and inserting element

// const message  = document.createElement('div')
// message.classList.add('cookie-message');

//  message.innerHTML = '<button class="btn btn--close-cookie">Here we go</button>';
// // // header.prepend(message);
//  header.append(message);

// //styling element
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%'; 
// console.log(message.style.color);

// console.log(getComputedStyle(message));
// console.log(getComputedStyle(message).height);

//attribute
// const logo = document.querySelector('.nav__logo');
// const logo = document.querySelector('img');
//checking the properties and method applicable to this element
// console.dir(logo);
// console.log(logo);
// console.log(logo.src);
// console.log(logo.alt);
//getting the attribute value from an element
// console.log(logo.getAttribute('src'));

//data attribute
//useful to save nonsensitive data in the html
//use camelCase to access it from Javascript.
// console.log(logo.dataset.versionNumber);

//classes
// logo.classList.add('c');
// logo.classList.remove('c');
// logo.classList.toggle('c');
// logo.classList.contains('c');

//don't use this
//it allows use one class
//it would overrride the existing class.
// logo.className = 'Sam';



//viewing the document structure
//document object points to the DOM
// console.log(document.documentElement)
// console.dir(document.documentElement)
// console.dir(document);
// console.log(document.body)
// console.log(document.head)
