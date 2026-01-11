//We use integers instead of float to make coding simpler
const currencyUnit = {
    "PENNY": 1,
    "NICKEL": 5,
    "DIME": 10,
    "QUARTER": 25,
    "ONE": 100,
    "FIVE": 500,
    "TEN": 1000,
    "TWENTY": 2000,
    "ONE HUNDRED": 10000
  }
  
  function checkCashRegister(price, cash, cid) {
    //Multiplied by 100 to change the decimal number into a whole number
    let changeSum = cash * 100 - price * 100;
    let changeSumCheck = changeSum; //backup variable of changeSum
    let change = []; //placeholder variable to be returned
    let status = ''; //placeholder variable to be returned
  
    let cidSum = 0; //Sum of all money in the register
    //Filters cid to get only denominations with values, reverse to start from "ONE HUNDRED"
    let filteredCid = cid.filter((elem) => elem[1] !== 0).reverse();
  
    filteredCid.forEach((elem) => {
      let curr = elem[0]; //First element inside of elem
      //Multiplied by 100 to change the decimal number into a whole number
      let currSum = elem[1] * 100;
      cidSum += currSum; //Sum of all money in the register
      let amount = 0;
  
      //While changeSum (cash - price) is >= than the first currencyUnit[curr] it founds, 
      //and currSum is > 0 which it have enough value of the denomination
      while (changeSum >= currencyUnit[curr] && currSum > 0) {
        amount += currencyUnit[curr];
        //Deduct changeSum to know each iteration what key we'll get in currencyUnit
        changeSum -= currencyUnit[curr];
        //Deduct value from the register base on the currencyUnit key
        currSum -= currencyUnit[curr];
      }
  
      if (amount !== 0) {
        //Divide by 100 to give the real number, since we're multiplying it
        change.push([curr, amount / 100]);
      }
    });
  
    if (changeSum > 0) {
      status = 'INSUFFICIENT_FUNDS';
      change = [];
      //changeSumCheck == cidSum means we have the same number of change
    } else if (changeSum == 0 && changeSumCheck == cidSum) {
      status = 'CLOSED';
      change = cid;
    } else {
      status = 'OPEN';
    }
  
    //return status which is a string, and change which is an array of the, well, change.
    return { 'status': status, 'change': change };
  }
  
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
  