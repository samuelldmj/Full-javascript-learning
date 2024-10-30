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

console.log(form.classList)

let map, mapEvent;
if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
        console.log(position);
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        // console.log(latitude, longitude);
        console.log(`https://www.google.com/maps/dir/@${latitude},${longitude}`);

        let coords = [latitude, longitude];
        map = L.map('map').setView(coords, 11);

        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(map);

        // L.marker(coords).addTo(map)
        //     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        //     .openPopup();

            //handling clicks on map
            map.on('click', function(mapE){
                mapEvent = mapE;
                form.classList.remove('hidden');
                inputDistance.focus();
            
            
             })
    }, function () {
        alert('Could not get your position')
    })
}

form.addEventListener('submit', function(e){
        e.preventDefault();

        inputCadence.value = inputDistance.value = inputDuration.value = inputDuration.value = '';
        console.log(mapEvent);
        const {lat, lng} = mapEvent.latlng;

                L.marker([lat, lng]).addTo(map)
                .bindPopup(L.popup({
                    maxWidth: 250,
                    minWidth:100,
                    autoClose:false,
                    closeOnClick:false,
                    className:'running-popup'
                })).setPopupContent('Workout')
                .openPopup();

})

inputType.addEventListener('change', function(){
    /*
    In JavaScript, the classList property provides a convenient way to manipulate the class attribute of an HTML element.
    It allows you to add, remove, toggle, and check for the presence of specific classes.
    */
    inputElevation.closest('.form__row').classList.toggle('form__row--hidden');
    inputCadence.closest('.form__row').classList.toggle('form__row--hidden');
})

// console.dir(navigator);