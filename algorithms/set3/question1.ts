



(() => {

    //returns number of years it will take to hit threshold based off of deposit & rate
    function depositProfit(deposit: number, rate: number, threshold: number) {

        let amountIncreased = deposit
        let numYears = 0
        while (amountIncreased < threshold && rate > 0) {

            amountIncreased = amountIncreased + ((rate / 100) * amountIncreased)
            numYears++

        }

        return numYears;
    }
    //  write code here.
    const deposit = 100;
    const rate = 20;
    const threshold = 170;

    // act
    const result = depositProfit(deposit, rate, threshold)
    console.log(`${result} should be 3`)



})()
