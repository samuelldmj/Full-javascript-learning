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

//populatng the movement card with deposits and withdrawals
const displayMovement = function (movements) {
  //emptying the HTML class container then populate it.
  containerMovements.innerHTML = '';

  movements.forEach((el, i) => {
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

//displaying the bank balance
let calCulatedBal = function (movements) {
  const balance = movements.reduce(function (acc, el, i) {
    return acc + el;
  }, 0);

  labelBalance.textContent = `${balance} €`;
}

// calCulatedBal(account1.movements);

//calculating the total income and expenses from movements
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

//Event handler for login
let currentAccount;
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
    inputLoginUsername.value = inputLoginPin.value = " ";

    //blurring the pin field
    // inputLoginPin.blur()


    //display movement.
    displayMovement(currentAccount.movements);
    //display balance
    calCulatedBal(currentAccount.movements);
    //display summary
    totalTransaction(currentAccount);
  }
});




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
