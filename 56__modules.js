// const a = require("./module1")   // common js
// a.great()
// a.aGreat("Imran")
// a.aGreat("Asia")

// using destructuring
// const {great, aGreat} = require("./module1")

// great()
// aGreat("Imran")
// aGreat("Asia")
// aGreat("Shivani")

// ------------------------------------------------------------------
// ES6 module ko import karny ka tariqa
import imran, { hello, aHello } from "./module2.js"
hello();
aHello("imran")
aHello("Asia")
imran()