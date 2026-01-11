function convertToRoman(num) {
    //Object containing roman numerals as keys and its equivalent arabic numerals as values
    let romanToNum = {
      M: 1000,
      CM: 900,
      D: 500,
      CD: 400,
      C: 100,
      XC: 90,
      L: 50,
      XL: 40,
      X: 10,
      IX: 9,
      V: 5,
      IV: 4,
      I: 1
    };
  
    //Placeholder for returning a roman numerals as string
    let roman = "";
  
    //Loop all keys of romanToNum
    for(let key in romanToNum){
      //console.log("key: "+key+" / values: "+romanToNum[key]);
  
      //Call while loop if num is greater or equal than the value of a key in romanToNum, else skip this while loop
      while(num >= romanToNum[key]){
  
        //Gets the key with greater or equal value than the num and add that key to the placeholder
        roman += key;
  
        //Subtract num with the value of the key, so when looping again, change num until it reaches 1 and ending the while loop
        num -= romanToNum[key];
  
        //For debugging purposes
        console.log(roman);
      }
    }
    
   return roman;
  }
  
  console.log(convertToRoman(36));