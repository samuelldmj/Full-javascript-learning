'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Samuel Boluwatife',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDates: [
    '2019-11-18T21:31:17.178Z',
    '2019-12-23T07:42:02.383Z',
    '2020-01-28T09:15:04.904Z',
    '2020-04-01T10:17:24.185Z',
    '2020-05-08T14:11:59.604Z',
    '2020-05-27T17:01:17.194Z',
    '2020-07-11T23:36:17.929Z',
    '2020-07-12T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT', // de-DE
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDates: [
    '2019-11-01T13:15:33.035Z',
    '2019-11-30T09:48:16.867Z',
    '2019-12-25T06:04:23.907Z',
    '2020-01-25T14:18:46.235Z',
    '2020-02-05T16:33:06.386Z',
    '2020-04-10T14:43:26.374Z',
    '2020-06-25T18:49:59.371Z',
    '2020-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

const inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

/* 
================================================
populatng the movement card with deposits and withdrawals
==========================================
*/
const displayMovement = function (movements, sort = false) {
  //emptying the HTML class container then populate it.
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a,b) => a -b) : movements;

  movs.forEach((el, i) => {
    let type = el > 0 ? 'deposit' : 'withdrawal';

    let html =
    `
      <div class="movements__row">
          <div class="movements__type movements__type--${type}">${i + 1} ${type}</div>
          <div class="movements__value">${el}€</div>
      </div>
    `
    containerMovements.insertAdjacentHTML('afterbegin', html);

  });

}
// console.log(containerMovements.innerHTML);
// displayMovement(account1.movements);


//styling the row
labelBalance.addEventListener('click', function(){
  [...document.querySelectorAll('.movements__row')]
  .forEach((el, i) => i % 2 === 0 
  ? el.style.backgroundColor = 'gold' : el.style.backgroundColor = 'white' );
})

/* 
================================================
end of populatng the movement card with deposits and withdrawals
==========================================
*/





/* 
================================================
//displaying the bank balance and saving it dynamically to the object.
==========================================
*/
let calCulatedBal = function (params) {
  //created a balance property dynamically in the logged in currentAccount.
  //params, now represents currentAccount,
  params.balance = params.movements.reduce(function (acc, el, i) {
    return acc + el;
  }, 0);

  labelBalance.textContent = `${params.balance}€`;
}

// calCulatedBal(account1.movements);
/* 
================================================
end of displaying the bank balance and saving it dynamically to the object.
==========================================
*/



/* 
================================================
//calculating the total income and expenses from movements
==========================================
*/
let totalTransaction = function (param) {
  const totalIncome = param.movements.filter(mov => mov > 0).reduce(function (acc, el) {
    return acc + el;
  }, param.movements[0])

  labelSumIn.textContent = `${totalIncome}€`;

  //expenditure
  const totalExp = param.movements.filter(mov => mov < 0).reduce((acc, el) => {
    return acc + Math.abs(el);
  }, param.movements[0]);

  labelSumOut.textContent = `${totalExp}€`;

  //interest
  const totalInterest = param.movements.filter(mov => mov > 0).map(deposit => (deposit * param.interestRate) / 100).reduce((acc, el) => {
    return acc + el;
  }, param.movements[0]);

  labelSumInterest.textContent = `${totalInterest}€`;

}
// totalTransaction(account1.movements);
/* 
================================================
end of calculating the total income and expenses from movements
==========================================
*/


/* 
================================================
USERNAME GENERATOR
==========================================
*/
//looped through the accounts and add a username based on their fullname(which in this case is accounts.owner)
const userNameGenerator = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map(param => param[0])
      .join('')
  })
}
userNameGenerator(accounts)
// console.log(accounts);
/* 
================================================
END USERNAME GENERATOR
==========================================
*/





/* 
================================================
FUNCTION THAT CALLS THE BALANCE, TOTAL TRANSACTION nd movements
==========================================
*/

function updateTransaction(trans){
  //display movement.
  displayMovement(trans.movements);
  //display balance
  calCulatedBal(trans);
  //display summary
  totalTransaction(trans);

}
/* 
================================================
end of FUNCTION THAT CALLS THE BALANCE, TOTAL TRANSACTION nd movements
==========================================
*/



/* 
================================================
LOGIN FEATURES
==========================================
*/
//Event handler for login
let currentAccount;
//current account keeps track of each users that is signed in or logged .
//if it is displayed on the console, it shows the data of the user in object format.
//it was defined globally so that we can use it anywhere in our code.
btnLogin.addEventListener('click', function (e) {
  //prevent form from submitting
  e.preventDefault();

  currentAccount = accounts.find(acc => acc.username === inputLoginUsername.value);
  console.log(currentAccount);

  if (currentAccount?.pin === Number(inputLoginPin.value)) {
    //Display UI and message
    labelWelcome.textContent = `Welcome back, ${currentAccount.owner.split(' ')[0]}`
    // make the main app come alive 
    containerApp.style.opacity = 100;

    //clearing the input field after log in
    inputLoginUsername.value = inputLoginPin.value = "";

    //blurring the pin field
    // inputLoginPin.blur()

//update transaction
    updateTransaction(currentAccount)
    
  }
});
/* 
================================================
END OF LOGIN FEATURES LOGIC
==========================================
*/



/* 
================================================
TRANSFER FEATURES LOGIC
================================================
*/
btnTransfer.addEventListener('click', function(e){
  e.preventDefault();
  let receiverAcc = accounts.find(acc => acc.username === inputTransferTo.value);
  let amount = Number(inputTransferAmount.value);

  //testing the variable above
  console.log(amount, receiverAcc);

  //check that the user is not sending a negative amount
  //check that the amount the user is sending is not above what is in the user bank balance (amount <= currentAccount.balance)
  //check that the user is not transfering to himself
  if(amount > 0 && receiverAcc && currentAccount.balance >= amount && receiverAcc.username !== currentAccount.username){
    // console.log('transfer');

    //similar to etc account1.movemnts.push(-amount);
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);

    //update transaction
    updateTransaction(currentAccount);
  }

  //clean the input field
  inputTransferTo.value = inputTransferAmount.value = "";
});
/* 
================================================
END OF TRANSFER FEATURES LOGIC
================================================
*/


/* 
================================================
close acct FEATURES LOGIC
================================================
*/

btnClose.addEventListener('click', function(e){
  e.preventDefault();

  //testing
  // console.log('Delete')
  let closingUsername = inputCloseUsername.value;
  let closingPin = Number(inputClosePin.value);

  if(currentAccount.username === closingUsername && currentAccount.pin === closingPin){
    //testing
    // console.log('Delete')

    const accountsIndex = accounts.findIndex(acc => acc.username === currentAccount.username)
    //testing
    // console.log(accountsIndex);

    //removing the user
    accounts.splice(accountsIndex, 1)

    // //hide ui
    containerApp.style.opacity = 0; 
  }

    //clean the input field
    inputCloseUsername.value = inputClosePin.value = ""; 

})

/* 
================================================
END OF close acct FEATURES LOGIC
================================================
*/

/* 
================================================
loan FEATURES LOGIC
================================================
*/
//Loan Condition is granted if there have been a 10% deposit of the loan requested.
//that is, if you are requesting 30000, you must have deposited about 3000 for your loan to be granted

btnLoan.addEventListener('click', function(e){
  e.preventDefault();
  const amount = Number(inputLoanAmount.value);
  if(amount > 0 && currentAccount.movements.some(mov => mov >= amount * 0.1) ){
    // logic
    currentAccount.movements.push(amount);

    //update transaction
    updateTransaction(currentAccount);    
  }

   //clear input field
   inputLoanAmount.value = '';
})

/* 
================================================
end of loan FEATURES LOGIC
================================================
*/


/* 
==========================================
SORTING LOGIC
==========================================
*/
let sorted = false;
btnSort.addEventListener('click', function(e){
  e.preventDefault();

  displayMovement(currentAccount.movements, !sorted);
  sorted = !sorted;
})

/* 
==========================================
END OF SORTING LOGIC
==========================================
*/

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

// const currencies = new Map([
//   ['USD', 'United States dollar'],
//   ['EUR', 'Euro'],
//   ['GBP', 'Pound sterling'],
// ]);

// const movements = [200, 450, -400, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

