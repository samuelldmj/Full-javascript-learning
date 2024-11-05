'use strict';

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

class Workout{
    date = new Date();
    id = (Date.now() + '').slice(-10);
    clicks = 0;

    constructor(coords, distance, duration){
        this.coords = coords; //[lat, lng]
        this.duration = duration; //in min
        this.distance = distance; //in km
        
    }
    
    _setDescription(){
        // prettier-ignore
        const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August',
             'September', 'October', 'November', 'December'];
        this.description = `${this.type[0].toUpperCase()}${this.type.slice(1)} on ${months[this.date.getMonth()]} ${this.date.getDate()} `;
    }

    click(){
        this.clicks++;
    }
}



class Running extends Workout {
    type = 'running';

    constructor(coords, distance, duration, cadence){
        super(coords, distance, duration)
            this.cadence = cadence;
            this.calcPace();
            this._setDescription();
    }
   
    calcPace(){
        this.pace = this.duration / this.distance;
        return this.pace
    }
}
class Cycling extends Workout {
    type = 'cycling';

    constructor(coords, distance, duration, elevation){
        super(coords, distance, duration)
            this.elevationGain = elevation;
            this._setDescription(); 
    }

    calcSpeed(){
        this.speed = this.distance / (this.duration / 60);
        return this.speed;
    }
}

// const run1 = new Running([7.4124, 3.345], 5.5, 24, 178);
// const cycling1 = new Cycling([7.4124, 3.345], 30, 13, 300);
// console.log(run1, cycling1);


////////////////////////////////////////
class App {
    //these are private instance properties. 
    #map;
    #mapEvent;
    #workout = [];
    #mapZoomLevel = 13; 

 /*
Constructor: The Constructor get called immediately when an object or instance is created from the class.
*/
    constructor() {
        //get user position
        this._getPosition();

        //retrieving data from localstorage
        this._getLocalStorage();

        //attaching events to run the app
        form.addEventListener('submit', this._newWorkout.bind(this));
        inputType.addEventListener('change', this._toggleElevationField);
        containerWorkouts.addEventListener('click', this._moveToPopup.bind(this))
    }

    _getPosition() {
        if (navigator.geolocation) {
            //before alteration this._loadMap is treated as ordinary function not method
            //in a regular function call, the "this" keyword is set to undefined.
            // you need to bind the function to the current object, hence we change from this._loadMap to this._loadMap.bind(this)
            navigator.geolocation.getCurrentPosition(this._loadMap.bind(this), function () {
                alert('Could not get your position');
            })
        }

    }

    _loadMap(position) {
        console.log(position);
        let latitude = position.coords.latitude;
        let longitude = position.coords.longitude;
        // console.log(latitude, longitude);
        console.log(`https://www.google.com/maps/dir/@${latitude}, ${longitude}`);

        let coords = [latitude, longitude];
        this.#map = L.map('map').setView(coords, this.#mapZoomLevel);
        // console.dir(L);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        }).addTo(this.#map);

        // L.marker(coords).addTo(map)
        //     .bindPopup('A pretty CSS popup.<br> Easily customizable.')
        //     .openPopup();

        //handling clicks on map
        this.#map.on('click', this._showForm.bind(this));

        //rendering maker after the map has been loaded.
        this.#workout.forEach(work => {
            this._renderWorkoutMarker(work);
          });
    }

    _showForm(mapE) {
        console.log(mapE);
        this.#mapEvent = mapE;
        form.classList.remove('hidden');
        inputDistance.focus();
    }

    _hideAndClearFormInput(){

        inputCadence.value = inputDistance.value = inputElevation.value = inputDuration.value = '';
        form.style.display = 'none';
        form.classList.add('hidden');
        setTimeout(() => (form.style.display = 'grid'), 1000);

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

        //validating input
        // let validInput = (...inputs) => (!Number.isFinite(inputs));
        //using every
        const validInput = (...inputs) => inputs.every( inp => Number.isFinite(inp));
        const allPositive = (...inputs) => inputs.every( inp => inp > 0);

        //Get the data from form
        const type = inputType.value;
        const distance = +inputDistance.value;
        const duration = +inputDuration.value;
        const { lat, lng } = this.#mapEvent.latlng;
        let workout;

        
        //check if workout is running, create running object;
        if(type === 'running'){
            const cadence = +inputCadence.value
            //check if data is valid.
            if(!validInput(distance, duration, cadence) || !allPositive(distance, duration, cadence)){
                return alert('Input have to be positive numbers');
            }  

            workout = new Running([lat, lng], distance, duration, cadence);
            
        }

        //if workout cycling, create cycling object
        if(type === 'cycling'){
            const elevation = +inputElevation.value
             //check if data is valid.
             if(!validInput(distance, duration, elevation) || !allPositive(distance, duration)){
                return alert('Input have to be positive numbers');
             } 

            workout = new Cycling([lat, lng], distance, duration, elevation);
        }

        //hide form and clear input fields.
        this._hideAndClearFormInput();
        
        //add new object to workout array
        this.#workout.push(workout);
        // console.log(workout);

        //render workout on map as marker
       this._renderWorkoutMarker(workout);

       //render workout list
       this._renderWorkout(workout);

       //click
       workout.click();

       //set local storage of all workouts
        this._setLocalStorage();
    }


    _renderWorkoutMarker(workout){
        L.marker(workout.coords).addTo(this.#map)
        .bindPopup(L.popup({
            maxWidth: 250,
            minWidth: 100,
            autoClose: false,
            closeOnClick: false,
            className: `${workout.type}-popup`
        })).setPopupContent(`${workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'} ${workout.description}`)
        .openPopup();
    }

    _renderWorkout(workout) {
        let html = `
          <li class="workout workout--${workout.type}" data-id="${workout.id}">
            <h2 class="workout__title">${workout.description}</h2>
            <div class="workout__details">
              <span class="workout__icon">${
                workout.type === 'running' ? '🏃‍♂️' : '🚴‍♀️'
              }</span>
              <span class="workout__value">${workout.distance}</span>
              <span class="workout__unit">km</span>
            </div>
            <div class="workout__details">
              <span class="workout__icon">⏱</span>
              <span class="workout__value">${workout.duration}</span>
              <span class="workout__unit">min</span>
            </div>
        `;

        if (workout.type === 'running')
            html += `
              <div class="workout__details">
                <span class="workout__icon">⚡️</span>
                <span class="workout__value">${workout.pace.toFixed(1)}</span>
                <span class="workout__unit">min/km</span>
              </div>
              <div class="workout__details">
                <span class="workout__icon">🦶🏼</span>
                <span class="workout__value">${workout.cadence}</span>
                <span class="workout__unit">spm</span>
              </div>
            </li>
            `;

         if (workout.type === 'cycling')
      html += `
        <div class="workout__details">
          <span class="workout__icon">⚡️</span>
          <span class="workout__value">${workout.speed.toFixed(1)}</span>
          <span class="workout__unit">km/h</span>
        </div>
        <div class="workout__details">
          <span class="workout__icon">⛰</span>
          <span class="workout__value">${workout.elevationGain}</span>
          <span class="workout__unit">m</span>
        </div>
      </li>
      `;
        form.insertAdjacentHTML('afterend', html);
    }

    _moveToPopup(e){
        const workOutEl = e.target.closest('.workout');
        // console.log(workOutEl);
        if(!workOutEl) return;

        const workout = this..find( work => work.id === workOutEl.dataset.id);
        // console.log(workout);

        this.#map.setView(workout.coords, this.#mapZoomLevel, {
            animate: true,
            pan: {
                duration: l
            },
        }) 
    }

    // setting localStorage
    _setLocalStorage(){
        localStorage.setItem('workoutStorage', JSON.stringify(this.#workout) )
    }

    //getting localstorage
    //map has not yet been loaded.
    //object coming from local storage will not inherit the methods they did before.
    _getLocalStorage(){
        const data = JSON.parse(localStorage.getItem('workoutStorage'));
        // console.log(data); 

        if(!data) return;
        this.#workout = data;
        this.#workout.forEach(work => {
            this._renderWorkout(work);
        })
    }

    reset(){
        localStorage.removeItem('workoutStorage');
        location.reload();
    }
  
}


//instance or object of class App
const app = new App();
