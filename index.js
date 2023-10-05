const readline = require("readline");
const Product = require("./classes/product");
const ShoppingCart = require("./classes/shoppingCart");
const { processInput } = require("./controllers/appFunctions");

const laptop = new Product("Laptop", 1000, true);
const headphones = new Product("Headphones", 50, true);

const cart = new ShoppingCart();
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

console.log("Welcome to the shopping cart system.");
processInput(rl, cart, laptop, headphones);