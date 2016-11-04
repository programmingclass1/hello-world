var salesWeek = require("./salesWeek.js");

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

salesWeek.monday = 100;
salesWeek.tuesday = 140;
salesWeek.wednesday = 330;
salesWeek.thursday = 260;
salesWeek.friday = 30;
salesWeek.saturday = 89;
salesWeek.sunday = 223;

// call function to calculate weekly sales
calculateWeeklySales(salesWeek);

var a = 1;

