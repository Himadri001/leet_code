/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
  let string =  s.replace(/[^A-Z0-9]/ig, "").toLowerCase();  
  let firstArray = string.split("");
  let reverseString =  firstArray.reverse().join("");
  if(string == reverseString){
    return true;
  }
  else{
    return false
  }
};
