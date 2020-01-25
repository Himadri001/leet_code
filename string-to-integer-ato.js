/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function(str) {
     str = str.trim();
     let result='';
     let decide;
    
    if(str.length == 0 || str == null ){
        return 0;
    }
    let startIndex = 0 ;
    if(str.charAt(0) == '+' || str.charAt(0) == '-'){
         if (str.charAt(1) < '0' || str.charAt(1) > '9'){
                return 0;
            }
         else{
            ++startIndex;
         }
        if(str.charAt(0) == '-'){
            if (str.charAt(1) < '0' || str.charAt(1) > '9'){
                return 0;
            }
            else{
                result += str.charAt(0);
            }
             
        }
    }
   
    for(let i = startIndex; i<str.length; i++){
        if(str.charAt(i) < '0' || str.charAt(i) > '9'){
              result =   i==0   ? 0 :result
               if(parseInt(result)< Math.pow(2,31)*-1){
                     return (Math.pow(2,31)*-1);
        }
       if(parseInt(result) > Math.pow(2,31) -1){
                    return (Math.pow(2,31)-1);
       }
              return result;
           }
       else{
            result += str.charAt(i);
       }
    }
        if(parseInt(result)< Math.pow(2,31)*-1){
                     return (Math.pow(2,31)*-1);
        }
       if(parseInt(result) > Math.pow(2,31) -1){
                    return (Math.pow(2,31)-1);
       }
       if(result.length == 0 || result == null){
           return  0;
       }
    else{
          return parseInt(result)
    }
        
  }