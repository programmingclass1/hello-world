var myClass = {
    
    myVar: "A",
    
    printMyName: function() {
        console.log("Aaron");
    },
    
    logThis: function(myParam) {
        console.log(myParam);
    },
    
    setVariable: function(val) {
        this.myVar = val;
    }
    
}

module.exports = myClass;