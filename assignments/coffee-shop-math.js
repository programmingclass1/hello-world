 
function calculateWeeklySales(salesWeek) {
    
    // calculate total sales for the week
    var totalSales =
        salesWeek.sunday
        + salesWeek.monday
        + salesWeek.tuesday
        + salesWeek.wednesday
        + salesWeek.thursday
        + salesWeek.friday
        + salesWeek.saturday;
    
    // display total sales
    console.log(totalSales);
}


// declare a single variable for the entire week
// note: this is an example of the "json" notation
// "json" stands for "JavaScript Object Notation"
var salesWeek = {
    sunday: 240,
    monday: 100,
    tuesday: 102,
    wednesday: 80,
    thursday: 120,
    friday: 114,
    saturday: 400,
};


// call function to calculate weekly sales
calculateWeeklySales(salesWeek);

var a = 1;

