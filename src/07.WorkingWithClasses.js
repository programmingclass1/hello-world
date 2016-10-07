
// a class is just a special kind of variable. it's able to hold multiple values.

var myClass = {};

myClass = {
    firstName: "Aaron"
};
console.log("value from myClass: " + myClass.firstName);

myClass.firstName = "Ben";
console.log("value from myClass: " + myClass.firstName);

myClass.lastName = "Kenobi";
console.log("value from myClass: " + myClass.firstName + " " + myClass.lastName);

myClass.myFunction = function() {
    console.log("function from within a class!");
}

myClass.myFunction();



// class in separate file
var myClass2 = require("./myClass.js");

console.log(myClass2.myVar);

myClass2.printMyName();

myClass2.logThis("hello from class!");

myClass2.setVariable("B");

console.log(myClass2.myVar);

