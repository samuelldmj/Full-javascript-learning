'use strict';

const btn = document.querySelector('.btn-country');
const countriesContainer = document.querySelector('.countries');

///////////////////////////////////////
// const request = new XMLHttpRequest();
// request.open('GET', 'https://restcountries.com/v3.1/name/nigeria');
// request.send();
// request.addEventListener('load', function(){
//     const  data = JSON.parse(this.responseText)[0];
//     console.log(data);

//     const html = 
//   `
//   <article class="country">
//           <img class="country__img" src="${data.flags.png}" />
//           <div class="country__data">
//             <h3 class="country__name">${data.altSpellings[3]}</h3>
//             <h4 class="country__region">${data.region}</h4>
//             <p class="country__row"><span>👫</span>${data.population}</p>
//             <p class="country__row"><span>🗣️</span>${data.languages.eng}</p>
//             <p class="country__row"><span>💰</span>${data.currencies.NGN.name}</p>
//           </div>
//     </article>
//   `

//   const articleElement = document.createElement('div')
//   articleElement.innerHTML = html;
   
//   countriesContainer.insertAdjacentElement('beforeend', articleElement);
//   countriesContainer.style.opacity = 1;
// });


/*
=========================================================================================================================
========================================================================================================================
==========================================================================================================================
*/
// Function to fetch and display country data asynchronously
// function countryData(countries) {
//   // // Clear previous content
//   // countriesContainer.innerHTML = '';

//   countries.forEach(country => {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//       if (request.status === 200) {
//         const data = JSON.parse(this.responseText)[0];
//         console.log(data); // Log the data to inspect it

//         // Handle dynamic properties with fallback to prevent errors
//         const flagUrl = data.flags.png || data.flags.svg || '';
//         const countryName = data.name.common || data.altSpellings[3] || 'Unknown';
//         const region = data.region || 'Unknown';
//         const population = +(data.population / 1_000_000).toFixed(1) || 'Unknown';
//         const languages = data.languages ? Object.values(data.languages).join(', ') : 'Unknown';
//         const currency = data.currencies ? Object.values(data.currencies)[0]?.name : 'Unknown';

//         // Create HTML structure for each country
//         const html = `
//           <article class="country">
//             <img class="country__img" src="${flagUrl}" alt="Flag of ${countryName}" />
//             <div class="country__data">
//               <h3 class="country__name">${countryName}</h3>
//               <h4 class="country__region">${region}</h4>
//               <p class="country__row"><span>👫</span> Population: ${population}</p>
//               <p class="country__row"><span>🗣️</span> Languages: ${languages}</p>
//               <p class="country__row"><span>💰</span> Currency: ${currency}</p>
//             </div>
//           </article>
//         `;

//         // Insert the HTML directly into the container
//         countriesContainer.insertAdjacentHTML('beforeend', html);
//       } else {
//         console.error('Request failed. Returned status of ' + request.status);
//       }
//     });
//   });

//   // Make sure the container is visible
//   countriesContainer.style.opacity = 1;
// }

// // Example usage to fetch and display data for multiple countries
// countryData(['nigeria', 'france', 'brazil', 'usa', 'canada']);  // Add more countries as needed


/*
==========================================================================================================================
==========================================================================================================================
==========================================================================================================================
*/
//callback Hell
//making the second ajax call depend on the first one.

// Function to generate HTML for each country (with optional className)
function generateCountryHTML(countryData, className = '') {
  const flagUrl = countryData.flags.png || countryData.flags.svg || '';
  const countryName = countryData.name.common || countryData.altSpellings[3] || 'Unknown';
  const region = countryData.region || 'Unknown';
  const population = +(countryData.population / 1_000_000).toFixed(1) || 'Unknown';
  const languages = countryData.languages ? Object.values(countryData.languages).join(', ') : 'Unknown';
  const currency = countryData.currencies ? Object.values(countryData.currencies)[0]?.name : 'Unknown';

  return `
    <article class="country ${className}">
      <img class="country__img" src="${flagUrl}" alt="Flag of ${countryName}" />
      <div class="country__data">
        <h3 class="country__name">${countryName}</h3>
        <h4 class="country__region">${region}</h4>
        <p class="country__row"><span>👫</span> Population: ${population} million</p>
        <p class="country__row"><span>🗣️</span> Languages: ${languages}</p>
        <p class="country__row"><span>💰</span> Currency: ${currency}</p>
      </div>
    </article>
  `;
}

// // Main function to fetch and display country data
// function countryData(countries) {
//   // Clear previous content (optional)
//   // countriesContainer.innerHTML = '';  // Uncomment if you want to clear the content before appending new data

//   countries.forEach(country => {
//     const request = new XMLHttpRequest();
//     request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
//     request.send();

//     request.addEventListener('load', function () {
//       if (request.status === 200) {
//         const data = JSON.parse(this.responseText)[0];  // Accessing the first element of the array
//         console.log(data); // Log the main country data for inspection

//         // Generate and insert the HTML for the main country
//         const countryHTML = generateCountryHTML(data);
//         countriesContainer.insertAdjacentHTML('beforeend', countryHTML);

//         // Get neighbouring countries after the main country data is fetched
//         const neighbours = data.borders;

//         if (neighbours && neighbours.length > 0) {
//           // Fetch and display each neighboring country
//           neighbours.forEach(neighbourCode => {
//             const neighbourRequest = new XMLHttpRequest();
//             neighbourRequest.open('GET', `https://restcountries.com/v3.1/alpha/${neighbourCode}`);
//             neighbourRequest.send();

//             neighbourRequest.addEventListener('load', function () {
//               if (neighbourRequest.status === 200) {
//                 const neighbourData = JSON.parse(this.responseText)[0]; // Neighbor country data
//                 console.log(neighbourData); // Log the neighbour country data

//                 // Generate and insert the HTML for the neighboring country with the 'neighbour' class
//                 const neighbourHTML = generateCountryHTML(neighbourData, 'neighbour');
//                 countriesContainer.insertAdjacentHTML('beforeend', neighbourHTML);
//               } else {
//                 console.error('Neighbour request failed. Returned status of ' + neighbourRequest.status);
//               }
//             });

//             neighbourRequest.addEventListener('error', function() {
//               console.error('Error with neighbour request');
//             });
//           });
//         }

//       } else {
//         console.error('Request for main country failed. Returned status of ' + request.status);
//       }
//     });

//     request.addEventListener('error', function() {
//       console.error('Error with the main country request');
//     });
//   });

//   // Make sure the container is visible
//   countriesContainer.style.opacity = 1;
// }

// // Example usage to fetch and display data for multiple countries
// countryData([ 'portugal']);  // Add more countries as needed


/*
====================================================================
PROMISE AND FETCH API
The modern way for AJAX call is using the fetch API. 
the fetch api works asynchronously.
===================================================================
===================================================================
*/

// let prom = new Promise((resolver, reject)=> {
  
// });
// console.log(prom);


// const getCountryData = function(country){
//   //fetch returns a promise, so we can use the then method
//   fetch(`https://restcountries.com/v3.1/name/${country}`).then((response) => {
//     console.log(response);
//     //json method returns a promise, hence i can use the then method
//      return  response.json();
//   }).then((countryData) => {
//     console.log(countryData);
//     let data  = countryData[0];
//      // Generate and insert the HTML for the main country
//         const countryHTML = generateCountryHTML(data);
//         countriesContainer.insertAdjacentHTML('beforeend', countryHTML);
//          // Make sure the container is visible
//         countriesContainer.style.opacity = 1;
//   })
// }


//refactored using arrow function
// const getCountryData = function(country){

//   fetch(`https://restcountries.com/v3.1/name/${country}`).then(response =>response.json()).then(countryData => { 
//     let data  = countryData[0];
//         const countryHTML = generateCountryHTML(data);
//         countriesContainer.insertAdjacentHTML('beforeend', countryHTML);
//          // Make sure the container is visible
//         countriesContainer.style.opacity = 1;
//   })
// }

const renderError = function(msg){
  countriesContainer.insertAdjacentText('beforeend', msg);
  countriesContainer.style.opacity = 1; 
}

//Dependency Chaining with fetch
// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => response.json(), err => alert(err))
//     .then(countryData => {
//       const data = countryData[0];
//       // Generate and display the country HTML
//       const countryHTML = generateCountryHTML(data);
//       countriesContainer.insertAdjacentHTML('beforeend', countryHTML);
      
//       // Make sure the container is visible after adding country data
//       countriesContainer.style.opacity = 1;

//       // If there are neighboring countries, fetch them
//       const neighbourCountryCodes = data.borders;
//       if (!neighbourCountryCodes || neighbourCountryCodes.length === 0) return;

//       // Fetch each neighboring country
//       neighbourCountryCodes.forEach(code => {
//         fetch(`https://restcountries.com/v3.1/alpha/${code}`)
//           .then(neighbourResponse => neighbourResponse.json())
//           .then(neighbourCountryData => {
//             const neighbourHTML = generateCountryHTML(neighbourCountryData[0], 'neighbour');
//             countriesContainer.insertAdjacentHTML('beforeend', neighbourHTML);
//             countriesContainer.style.opacity = 1;
//           });
//       });
//     })
//     .catch(err => {
//       console.error('Error fetching country data:', err);
//       renderError(`Something went wrong 🧨🧨🧨 ${err.message}`);
//     }); 
// };



// const getCountryData = function(country) {
//   fetch(`https://restcountries.com/v3.1/name/${country}`)
//     .then(response => {
//       console.log(response.status);  // Log the status code to help debug
//       if (!response.ok) {
//         throw new Error(`Country Not Found (${response.status})`);
//       }
//       return response.json();  // Added return to correctly pass the data to the next .then
//     })
//     .then(countryData => {
//       const data = countryData[0];
//       // Generate and display the country HTML
//       const countryHTML = generateCountryHTML(data);
//       countriesContainer.insertAdjacentHTML('beforeend', countryHTML);

//       // Make sure the container is visible after adding country data
//       countriesContainer.style.opacity = 1;

//       // If there are neighboring countries, fetch them
//       const neighbourCountryCodes = data.borders;
//       if (!neighbourCountryCodes || neighbourCountryCodes.length === 0) return;

//       // Fetch each neighboring country
//       neighbourCountryCodes.forEach(code => {
//         fetch(`https://restcountries.com/v3.1/alpha/${code}`)
//           .then(neighbourResponse =>  {
//             return neighbourResponse.json();
//           })
//           .then(neighbourCountryData => {
//             const neighbourHTML = generateCountryHTML(neighbourCountryData[0], 'neighbour');
//             countriesContainer.insertAdjacentHTML('beforeend', neighbourHTML);
//             countriesContainer.style.opacity = 1;
//           });
//       });
//     })
//     .catch(err => {
//       console.error('Error fetching country data:', err);
//       renderError(`Something went wrong 🧨🧨🧨 ${err.message}`);
//     });
// };

// btn.addEventListener('click', function(){ 
//   getCountryData('Nigeria');
// });




// getCountryData('Nigeria');
// getCountryData('Ethiopia');
// getCountryData('Egypt');
// getCountryData('DR Congo')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')
// getCountryData('')



//BUILDING PROMISE
// const lotteryPromise = new Promise(function(resolve, reject){
//   if(Math.random() >= 0.5){
//     resolve('You win the 🎇');
//   }else {
//     reject('Your money is gone'); 
//   }
// })

// lotteryPromise.then(res => console.log(res))
// .catch(err => console.log(err))

//making it asynchronous
// const lotteryPromise = new Promise(function(resolve, reject){
//   console.log('Lottery draw is happening!')
//   setTimeout(() => {
//     if(Math.random() >= 0.5){
//       resolve('You win the 🎇');
//     }else {
//       reject(new Error('Your money is gone')); 
//     }
//   },2000);
 
// })
// //consuming the promise
// lotteryPromise.then(res => console.log(res))
// .catch(err => console.log(err))

//testing asynchronously
// navigator.geolocation.getCurrentPosition(position => console.log(position), err => console.log(err));
// console.log('This get displayed firsts');

//promisifying
// const getPosition = function(){
//     return new Promise( (resolve, reject) => {
//       // navigator.geolocation.getCurrentPosition(position => resolve(position), 
//       // err => reject(err));

//       //alternatively
//       navigator.geolocation.getCurrentPosition(resolve, reject);
//     })
// }
// getPosition().then(pos => console.log(pos)).catch( err => Error(err));

const wait = function(seconds){
  return new Promise(function(resove){
    setTimeout(resove, seconds * 1000);
  })
}


///////////////////////////////////////////////////////////////////////////////////////////////////////////////
////from challenge24 using then methods
//===================================
const whereAmI = function(lat, lng) {
  fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=72631702809930655279x80638`)
      .then(res => {
          if (!res.ok) {
              throw new Error(`Failed to fetch data: ${res.statusText}`);
          }
          return res.json();
      })
      .then(data => {
          // console.log(data);
          if (data.error) {
              throw new Error(`Geocode error: ${data.error.description}`);
          }
          let str = `You are in ${data.city}, ${data.country}`;
          console.log(str);
          //this is now returns a promise. i can use the then method on it.
          //this endpoint contains info about countries and there borders.
          const country= fetch(`https://restcountries.com/v3.1/name/${data.country}`);
          return country.then( res => res.json())
      }).then(countryData => {
          const data = countryData[0];
          console.log(data);
          // Generate and display the country HTML
          const countryHTML = generateCountryHTML(data);
          countriesContainer.insertAdjacentHTML('beforeend', countryHTML);
    
          // Make sure the container is visible after adding country data
          countriesContainer.style.opacity = 1;

            // If there are neighboring countries, fetch them
      const neighbourCountryCodes = data.borders;
      if (!neighbourCountryCodes || neighbourCountryCodes.length === 0) return;

      // Fetch each neighboring country
      neighbourCountryCodes.forEach(code => {
        fetch(`https://restcountries.com/v3.1/alpha/${code}`)
          .then(neighbourResponse =>  {
            return neighbourResponse.json();
          })
          .then(neighbourCountryData => {
            const neighbourHTML = generateCountryHTML(neighbourCountryData[0], 'neighbour');
            countriesContainer.insertAdjacentHTML('beforeend', neighbourHTML);
            countriesContainer.style.opacity = 1;
          });
      });


      })
      .catch(err => {
          console.error(`Error: ${err.message}`);
      });
};

btn.addEventListener('click', function(){ 
  whereAmI(52.508,13.381);
});
//////////////////////////////////////////////////////////////////////////////////////////////////////////////


/* ===========================
//async and await
========================== */
const getPosition = function(){
  return new Promise((resolve, reject) => {
    navigator.geolocation.getCurrentPosition(resolve, reject);
  })
}
console.log(getPosition());

//async fucntion return a promise by default
const myLocation = async function(){
const pos = await getPosition();
const {latitude: lat, longitude: lng} = pos.coords
//   //await waits for the result of the promise until the promise is fulfilled or failed.
const resGeo = await fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=72631702809930655279x80638`);
const jsonResGeo = await resGeo.json()
// console.log(jsonResGeo)

const con = await fetch(`https://restcountries.com/v3.1/name/${jsonResGeo.standard.countryname}`)
console.log(con);
const data = await con.json()
// console.log(data[0]);

const countryHTML = generateCountryHTML(data[0]);
countriesContainer.insertAdjacentHTML('beforeend', countryHTML);

// Make sure the container is visible after adding country data
countriesContainer.style.opacity = 1;
}
myLocation();







































































