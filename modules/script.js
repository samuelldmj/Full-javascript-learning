//Importing Modules
// import {addToCart, totalPrice, totalQuantity}  from "../modules/shoppingCart.js";

//using aliases wen importing
// import {addToCart, totalPrice as price, totalQuantity as quantity}  from "../modules/shoppingCart.js";
// console.log("Importing Modules");
// console.log(price, quantity);


//import all modules.
import * as shoppingCart  from "../modules/shoppingCart.js";

shoppingCart.addToCart('bread', 7);
