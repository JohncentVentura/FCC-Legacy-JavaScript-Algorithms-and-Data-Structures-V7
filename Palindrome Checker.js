function palindrome(str) {
    //Matches any (global) non-word character & spaces
    let regex = /[\W_]/g;
  
    //Change str to be same case, lower case in this case,
    //Replace regex into "" that basically means nothing
    let smallStr = str.toLowerCase().replace(regex, "");
    console.log(smallStr);
  
    //Make smallStr into an array, sort it in reverse, and assign it as a string
    let reversedStr = smallStr.split("").reverse().join("");
    console.log(reversedStr);
  
    //return true if reversedStr is the same with smallStr, else return false
    return reversedStr === smallStr ? true : false;
  }
  
  console.log(palindrome("My age is 0, 0 si ega ym."));
  palindrome("eye");