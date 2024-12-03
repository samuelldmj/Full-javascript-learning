/*

In this challenge you will build a function 'whereAmI' which renders a country
only based on GPS coordinates. For that, you will use a second API to geocode
coordinates. So in this challenge, you’ll use an API on your own for the first time 😁
Your tasks:
PART 1
1. Create a function 'whereAmI' which takes as inputs a latitude value ('lat')
and a longitude value ('lng') (these are GPS coordinates, examples are in test
data below).
2. Do “reverse geocoding” of the provided coordinates. Reverse geocoding means
to convert coordinates to a meaningful location, like a city and country name.
Use this API to do reverse geocoding: https://geocode.xyz/api. The AJAX call
will be done to a URL with this format:
https://geocode.xyz/52.508,13.381?geoit=json. Use the fetch API and
promises to get the data. Do not use the 'getJSON' function we created, that
is cheating 😉
3. Once you have the data, take a look at it in the console to see all the attributes
that you received about the provided location. Then, using this data, log a
message like this to the console: “You are in Berlin, Germany”
4. Chain a .catch method to the end of the promise chain and log errors to the
console
5. This API allows you to make only 3 requests per second. If you reload fast, you
will get this error with code 403. This is an error with the request. Remember,
fetch() does not reject the promise in this case. So create an error to reject
the promise yourself, with a meaningful error message
PART 2
6. Now it's time to use the received data to render a country. So take the relevant
attribute from the geocoding API result, and plug it into the countries API that
we have been using.
7. Render the country and catch any errors, just like we have done in the last
lecture (you can even copy this code, no need to type the same code)

Test data:
§ Coordinates 1: 52.508, 13.381 (Latitude, Longitude)
§ Coordinates 2: 19.037, 72.873
§ Coordinates 3: -33.933, 18.474
GOOD LUCK 😀

*/

//solution

// const resApi = fetch('https://geocode.xyz/51.50354,-0.12768?geoit=xml&auth=72631702809930655279x80638');
// console.dir(resApi); 

// const whereAmI = function(lat, lng){

//         const  resApi = fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=72631702809930655279x80638`)
//         .then(res => {
//             const data = res.json()
//             return data;
//             }).then(res => {
//                 let str =  ` You are in ${res.city}, ${res.country}`;
//                 console.log(str);
//             }).then()
//             .catch(err => { throw new Error(`Country Not Found (${err})`)
//     })
   
//     }


// const whereAmI = function(lat, lng) {
//     fetch(`https://geocode.xyz/${lat},${lng}?geoit=json&auth=72631702809930655279x80638`)
//         .then(res => {
//             if (!res.ok) {
//                 throw new Error(`Failed to fetch data: ${res.statusText}`);
//             }
//             return res.json();
//         })
//         .then(data => {
//             console.log(data);
//             if (data.error) {
//                 throw new Error(`Geocode error: ${data.error.description}`);
//             }
//             let str = `You are in ${data.city}, ${data.country}`;
//             console.log(str);
//             //this is now returns a promise. i can use the then method on it.
//             const country= fetch(`https://restcountries.com/v3.1/name/${data.country}`);
//             return country.then( res => res.json())
//         }).then(countryData => {
//             const data = countryData[0];
//             // Generate and display the country HTML
//             const countryHTML = generateCountryHTML(data);
//             countriesContainer.insertAdjacentHTML('beforeend', countryHTML);
      
//             // Make sure the container is visible after adding country data
//             countriesContainer.style.opacity = 1;
//         })
//         .catch(err => {
//             console.error(`Error: ${err.message}`);
//         });
// };





// whereAmI(52.508,13.381);
// whereAmI(19.037,72.873);
// whereAmI(-33.933,18.474);



