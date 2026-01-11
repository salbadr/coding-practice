(function () {
    //returns number of years it will take to hit threshold based off of deposit & rate
    function depositProfit(deposit, rate, threshold) {
        var amountIncreased = deposit;
        var numYears = 0;
        while (amountIncreased < threshold && rate > 0) {
            amountIncreased = amountIncreased + ((rate / 100) * amountIncreased);
            numYears++;
        }
        return numYears;
    }
    //  write code here.
    var deposit = 100;
    var rate = 20;
    var threshold = 170;
    // act
    var result = depositProfit(deposit, rate, threshold);
    console.log("".concat(result, " should be 3"));
})();
