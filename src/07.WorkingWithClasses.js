
// a class is just a special kind of variable. it's able to hold multiple values.

// classes have "properties" and "functions" (properties are similar to variables)


// here is how to create an empty class
var myClass = {};

// here is a class with a single property
// in this example, the property is defined at the time of "construction" (but it does not have to be)
myClass = {
    firstName: "Aaron"
};
console.log("value from myClass: " + myClass.firstName);

// we can modify the property after class construction, just like a variable
myClass.firstName = "Ben";
console.log("value from myClass: " + myClass.firstName);


// NOTE: two ways to define properties

// at construction time 
myClass = {
    firstName: "Aaron"
};

// or after construction, dynamically
myClass = {};
myClass.firstName = "Aaron";


// you can add properties as you go
myClass.lastName = "Kenobi";
console.log("value from myClass: " + myClass.firstName + " " + myClass.lastName);


// classes also contain functions (these can be added at construction, or dynamically after)
myClass.myFunction = function() {
    console.log("function from within a class!");
};

// you call them like normal functions
myClass.myFunction();




// this is an example of referencing a class from a separate file
var myClass2 = require("./myClass.js");

console.log(myClass2.myVar);

myClass2.printMyName();

myClass2.logThis("hello from class!");

myClass2.setVariable("B");

console.log(myClass2.myVar);






// **************************************
// working with classes and functions

function setClassProperty(classParam) {
    console.log(classParam.myProperty);
    classParam.myProperty = "set inside function";
    console.log(classParam.myProperty);
}


var myClass3 = {};
myClass3.myProperty = "set outside function";


// log property current value
console.log(myClass3.myProperty);

// pass class to function, logs and sets values
setClassProperty(myClass3);

// log property again, see that it has changed
console.log(myClass3.myProperty);

// NOTE: this behavior is different from when passing simple value type variables
