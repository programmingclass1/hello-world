
// notes: 
// this file will read values that you provide via the console
// first, we need to initialize npm (a "package manager") for this project, and add a "package.json" to our project

// npm init
// # answer the questions, run through the setup
// npm install readline-sync --save


var readlineSync = require("readline-sync");

console.log("We are about to ask for name...");

var name =  readlineSync.question("What is your name? ");

console.log("The value provided was: " + name);