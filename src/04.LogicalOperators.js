

var somethingIsTrue = true;
var somethingIsFalse = false;

if (somethingIsTrue) {
    console.log("this will print");
}

if (somethingIsFalse) {
    console.log("this will not print...");
}

var myVar = 2;
if (myVar == 1) {
    console.log("this will not print...");
}

if (myVar == 2) {
    console.log("this will print");
}




if (!somethingIsFalse) {
    console.log("but this will print...");
}


if (somethingIsTrue && somethingIsFalse) {
    console.log("both are true");
}


if (somethingIsTrue || somethingIsFalse) {
    console.log("one thing was true");
}


if (somethingIsFalse) {
    // this code would NOT be executed.
}
else {
    // this coud would execute
}






var i = 0;
while (somethingIsTrue) {
    
    console.log("iteration: " + i);
    
    i = i + 1;
    
    if (i >= 5) {
        somethingIsTrue = false;
    }
}

console.log("exit while loop.");
