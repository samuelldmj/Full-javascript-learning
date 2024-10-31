'use strict';
// prettier-ignore
const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

const form = document.querySelector('.form');
const containerWorkouts = document.querySelector('.workouts');
const inputType = document.querySelector('.form__input--type');
const inputDistance = document.querySelector('.form__input--distance');
const inputDuration = document.querySelector('.form__input--duration');
const inputCadence = document.querySelector('.form__input--cadence');
const inputElevation = document.querySelector('.form__input--elevation');

// console.log(form.classList)

// let map, mapEvent;
// if (navigator.geolocation) {
//     navigator.geolocation.getCurrentPosition(function (position) {
//         console.log(position);
//         let latitude = position.coords.latitude;
//         let longitude = position.coords.longitude;
//         // console.log(latitude, longitude);
//         console.log(`https://www.google.com/maps/dir/@${latitude},${longitude}`);

//         let coords = [latitude, longitude];
//         map = L.map('map').setView(coords, 11);

//         L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//             attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
//         }).addTo(map);

//         // L.marker(coords).addTo(map)
//         //     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
//         //     .openPopup();

//             //handling clicks on map
//             map.on('click', function(mapE){
//                 mapEvent = mapE;
//                 form.classList.remove('hidden');
//                 inputDistance.focus();
//              })
//     }, function () {
//         alert('Could not get your position')
//     })
// }

// form.addEventListener('submit', function (e) {
//     e.preventDefault();

//     inputCadence.value = inputDistance.value = inputDuration.value = inputDuration.value = '';
//     console.log(mapEvent);
//     const { lat, lng } = mapEvent.latlng;

//     L.marker([lat, lng]).addTo(map)
//         .bindPopup(L.popup({
//             maxWidth: 250,
//             minWidth: 100,
//             autoClose: false,
//             closeOnClick: false,
//             className: 'running-popup'
//         })).setPopupContent('Workout')
//         .openPopup();
// })



// inputType.addEventListener('change', function () {
//     /*
//     In JavaScript, the classList property provides a convenient way to manipulate the class attribute of an HTML element.
//     It allows you to add, remove, toggle, and check for the presence of specific classes.
//     */
//     inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
//     inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
// })

// console.dir(navigator);

/*
REFACTORING CODE: USINNG OOP PATTERN
*/
class App {
    //these are private instance properties. 
    #map;
    #mapEvent;

 /*
Constructor: The Constructor get called immediately when an object is created from the class.
*/
    constructor() {
        this._getPosition();
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
    }

    _getPosition() {
        if (navigator.geolocation) {
            //before alteration this._loadMap is treated as ordinary function not method
            //in a regular function call, the "this" keyword is set to undefined.
            // you need to bind the function to the current object, hence we change from this._loadMap to this._loadMap.bind(this)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert('Could not get your position')
            })
        }

    }

    _loadMap(position) {
        console.log(position);
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        // console.log(latitude, longitude);
        console.log(`https://www.google.com/maps/dir/@${latitude},${longitude}`);

        let coords = [latitude, longitude];
        this.#map = L.map('map').setView(coords, 11);
        // console.dir(L);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        // L.marker(coords).addTo(map)
        //     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        //     .openPopup();

        //handling clicks on map
        this.#map.on('click', this._showForm.bind(this));
    }

    _showForm(mapE) {
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _toggleElevationField() {
        /*
        In JavaScript, the classList property provides a convenient way to manipulate the class attribute of an HTML element.
        It allows you to add, remove, toggle, and check for the presence of specific classes.
        */
        inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
        inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
    }

    _newWorkout(e) {
        e.preventDefault();
        inputCadence.value = inputDistance.value = inputDuration.value = inputDuration.value = '';
        // console.log(mapEvent);
        const { lat, lng } = this.#mapEvent.latlng;

        L.marker([lat, lng]).addTo(this.#map)
            .bindPopup(L.popup({
                maxWidth: 250,
                minWidth: 100,
                autoClose: false,
                closeOnClick: false,
                className: 'running-popup'
            })).setPopupContent('Workout')
            .openPopup();
    }
}


//instance or object of class App
const app = new App();
