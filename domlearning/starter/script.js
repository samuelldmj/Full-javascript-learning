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
  e.preventDefault()
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


//page navigation
// document.querySelectorAll('.nav__link').forEach(function(el){
//   el.addEventListener('click', function(e){
//     e.preventDefault();
//     const id = this.getAttribute('href');
//     console.log(id);
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
console.log(h1.querySelectorAll('.highlight'));
console.log(h1.childNodes);
console.log(h1.children);
h1.firstElementChild.style.color = 'tomato';

//going upward
console.log(h1.parentNode);
console.log(h1.parentElement);




//Event
// const h1 = document.querySelector('h1');
// const alerth1 = function(e){
//   alert('Hello world');

//   h1.removeEventListener('mouseenter', alerth1);
  
// }

// h1.addEventListener('mouseenter', alerth1)
 


//Event Propagations
// const randInt = (min, max) => 
//   Math.floor(Math.random() * (max - min * 1) + min);

//  const randIntColor =  () => `rgb(${randInt(0,255)}, ${randInt(0, 255)}, ${randInt(0, 255)})`;
// console.log(randIntColor());

// document.querySelector(".nav__link")
// .addEventListener('mouseover', function(e){
//   this.style.backgroundColor = randIntColor();
//   console.log('nav link', e.target, );
// })

// document.querySelector(".nav__links")
// .addEventListener('mouseover', function(e){
//   this.style.backgroundColor = randIntColor();
//   console.log('nav links', e.target, e.currentTarget);
// })

// document.querySelector(".nav")
// .addEventListener('mouseover', function(e){
//   this.style.backgroundColor = randIntColor();
//   console.log('nav', e.target, e.currentTarget);
// })

 































































//sample
//acessing the full body of the html document
// console.log(document.documentElement);
// let header = document.querySelector('.header');

// //creating and inserting element
// const message  = document.createElement('div')
// message.classList.add('cookie-message');

// message.innerHTML = '<button class="btn btn--close-cookie">Here we go</button>';
// // header.prepend(message);
// header.append(message);

// //stling element
// message.style.backgroundColor = '#37383d';
// message.style.width = '120%'; 
