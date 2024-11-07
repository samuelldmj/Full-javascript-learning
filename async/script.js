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


// Function to fetch and display country data
function countryData(countries) {
  // Clear previous content
  countriesContainer.innerHTML = '';

  countries.forEach(country => {
    const request = new XMLHttpRequest();
    request.open('GET', `https://restcountries.com/v3.1/name/${country}`);
    request.send();

    request.addEventListener('load', function () {
      if (request.status === 200) {
        const data = JSON.parse(this.responseText)[0];
        console.log(data); // Log the data to inspect it

        // Handle dynamic properties with fallback to prevent errors
        const flagUrl = data.flags.png || data.flags.svg || '';
        const countryName = data.name.common || data.altSpellings[3] || 'Unknown';
        const region = data.region || 'Unknown';
        const population = +(data.population / 1_000_000).toFixed(1) || 'Unknown';
        const languages = data.languages ? Object.values(data.languages).join(', ') : 'Unknown';
        const currency = data.currencies ? Object.values(data.currencies)[0]?.name : 'Unknown';

        // Create HTML structure for each country
        const html = `
          <article class="country">
            <img class="country__img" src="${flagUrl}" alt="Flag of ${countryName}" />
            <div class="country__data">
              <h3 class="country__name">${countryName}</h3>
              <h4 class="country__region">${region}</h4>
              <p class="country__row"><span>👫</span> Population: ${population}</p>
              <p class="country__row"><span>🗣️</span> Languages: ${languages}</p>
              <p class="country__row"><span>💰</span> Currency: ${currency}</p>
            </div>
          </article>
        `;

        // Insert the HTML directly into the container
        countriesContainer.insertAdjacentHTML('beforeend', html);
      } else {
        console.error('Request failed. Returned status of ' + request.status);
      }
    });
  });

  // Make sure the container is visible
  countriesContainer.style.opacity = 1;
}

// Example usage to fetch and display data for multiple countries
countryData(['nigeria', 'france', 'brazil']);  // Add more countries as needed

