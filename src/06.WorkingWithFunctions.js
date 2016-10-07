

// notes on control flow 
// until this point, all files have been read and executed top to bottom.
// this file will still be "read" top to bottom by the compiler, but code wrapped within a "function" will not be executed until called.


// ************************
// basic functions

console.log("logging before the function declaration.");

function myFunction() {
    console.log("logging inside of function.");
}

console.log("logging after the function declaration.");

myFunction();

var end= 1;



// ************************
// functions with params

// console.log(theThingToLog)

function myFunctionWithParam(logThis) {
    var anotherVar = 1;
    console.log("We should log the param: " + logThis);
}

myFunctionWithParam("hello!");
myFunctionWithParam("next!");
myFunctionWithParam("third!");
myFunctionWithParam("finally!");

// Note: params are only accessible from within a function. After the function exists, the param is no longer available.



// ************************
// call functions from within other functions...

function myFunctionToCallAnotherFunction() {
    myFunctionWithParam("called from inside a function!");
}


myFunctionToCallAnotherFunction();

