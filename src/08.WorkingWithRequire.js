
// we will now work with external files

// include logic from another file into this file
var myClass = require("./myClass.js");

// we can now reference that file within this file
console.log(myClass.myVar);


myClass.setVariable("something new");


console.log(myClass.myVar);


