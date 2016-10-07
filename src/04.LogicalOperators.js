

var somethingIsTrue = true;

var somethingIsFalse = false;


if (somethingIsTrue) {
    console.log("something was true");
}


if (somethingIsFalse) {
    console.log("this will not print...");
}


if (!somethingIsFalse) {
    console.log("but this will print...");
}


if (somethingIsTrue && somethingIsFalse) {
    console.log("both are true");
}


if (somethingIsTrue || somethingIsFlase) {
    console.log("one thing was true");
}

var i = 0;
while (somethingIsTrue) {
    
    console.log("iteration: " + i);
    
    i = i + 1;
    
    if (i >= 5) {
        somethingIsTrue = false;
    }
}

