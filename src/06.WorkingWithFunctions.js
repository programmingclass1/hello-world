

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




// ************************
// pass multiple parameters to functions


function myMultiParamFunction(param1, param2) {
    
    console.log(param1);
    console.log(param2);
    
}

myMultiParamFunction("hello", "next");

var var1 = "hello2";
var var2 = "next2";

myMultiParamFunction(var1, var2);





// ************************
// functions do not modify the parameters passed in if they are "value" types
// value type variables are "passed by value"
// (note: classes are "passed by reference". we will dig into this later.)


function modifyParams(param1) {
    console.log(param1);
    param1 = 5;
    console.log(param1);
}

var var3 = 1;

// log var before passing to function
console.log(var3);

// function will log, modify and log again
modifyParams(var3);

// log here again, note that the value has not changed
console.log(var3);

