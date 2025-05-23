// ===============================================
// 📚 WEEK 1 – JavaScript Foundation for React Native
// ===============================================

// ------------------------------
// 🟢 DAY 1: Variables & Data Types
// ------------------------------

// Variable declaration
let age = 28;
const fullName = "Muhammad Awais Aslam";
let isDeveloper = true;

// Data types
let city = "Lahore";           // string
let score = 95.5;              // number
let isLoggedIn = false;        // boolean
let notAssigned;               // undefined
let emptyValue = null;         // null

// Type checking
console.log(typeof fullName);     // string
console.log(typeof score);        // number
console.log(typeof isLoggedIn);   // boolean
console.log(typeof notAssigned);  // undefined
console.log(typeof emptyValue);   // object (known JS quirk)

// User object
const userProfile = {
  name: fullName,
  age: age,
  isPremiumUser: false,
  city: city,
  loginCount: 3,
};

// Accessing object values
console.log("🧑 Name:", userProfile.name);
console.log("🎂 Age:", userProfile.age);
console.log("🏙️ City:", userProfile.city);
console.log("💎 Premium User:", userProfile.isPremiumUser ? "Yes" : "No");

// ------------------------------
// 🟢 DAY 2: Functions in JavaScript
// ------------------------------

// Normal function
function greetUser(name, city) {
  return `👋 Hello ${name} from ${city}`;
}
console.log(greetUser("Awais", "Lahore"));

// Function expression
const add = function (a, b) {
  return a + b;
};
console.log("Addition:", add(5, 3));

// Arrow functions
const multiply = (a, b) => a * b;
console.log("Multiplication:", multiply(4, 6));

// Arrow function with default value
const greet = (name = "Guest") => `Welcome, ${name}`;
console.log(greet("Awais"));

// Function that returns total from an array
const getTotalFromArray = (numbers) => {
  return numbers.reduce((sum, current) => sum + current, 0);
};
console.log("Total:", getTotalFromArray([1, 2, 3]));

// Premium check function
const isPremiumUser = (loginCount) => loginCount >= 10;
console.log("Is Premium:", isPremiumUser(userProfile.loginCount));

// ------------------------------
// 🟢 DAY 3: Objects, Arrays & Array Methods
// ------------------------------

// Basic array
const numbers = [10, 20, 30, 40];

// Loop through array
numbers.forEach((num, index) => {
  console.log(`🔢 Number ${index + 1}: ${num}`);
});

// Array of product objects
const cartItems = [
  { id: 1, name: "Apple", price: 100, qty: 2 },
  { id: 2, name: "Banana", price: 50, qty: 5 },
  { id: 3, name: "Cherry", price: 75, qty: 3 },
];

// Function to get cart total
const calculateCartTotal = (items) => {
  return items.reduce((total, item) => total + item.price * item.qty, 0);
};

// Function to print cart details
const printCartSummary = (items) => {
  console.log("🛒 Cart Summary:");
  items.forEach((item, i) => {
    console.log(`${i + 1}. ${item.name} × ${item.qty} = ${item.price * item.qty}`);
  });
  console.log("🧾 Total:", calculateCartTotal(items));
};

printCartSummary(cartItems);

// Add or update item in cart
const addItemToCart = (cart, newItem) => {
  const existingItem = cart.find((item) => item.id === newItem.id);
  if (existingItem) {
    existingItem.qty += newItem.qty;
  } else {
    cart.push(newItem);
  }
};

addItemToCart(cartItems, { id: 4, name: "Dates", price: 120, qty: 2 });
printCartSummary(cartItems);

// --- Common Array Methods Examples ---

const sampleNums = [1, 2, 3, 4, 5, 6];

// map: create a new array with modified values
const doubled = sampleNums.map((n) => n * 2);
console.log("🔁 Map (Doubled):", doubled);

// filter: get only even numbers
const evens = sampleNums.filter((n) => n % 2 === 0);
console.log("🔍 Filter (Even):", evens);

// reduce: calculate total sum
const total = sampleNums.reduce((acc, curr) => acc + curr, 0);
console.log("➕ Reduce (Total):", total);
