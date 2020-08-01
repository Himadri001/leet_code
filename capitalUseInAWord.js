/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(str) {
  var count=0,len=str.length;
  for(var i=0;i<len;i++) {
    if(/[A-Z]/.test(str.charAt(i))) count++;
  }
  if(count == str.length || count == 0){
    return true;
  }
  else{
    if(count == 1 && str.charAt(0) ==str.charAt(0).toUpperCase()){
      return true;
    }
    else{
      return false;
    }
  } 
};
