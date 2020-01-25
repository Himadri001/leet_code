/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
        let ans;
       if(parseInt(x)<0){
        ans = parseInt(x.toString().split('').reverse().join('').toString())*-1;
       }
        else{
        ans = parseInt(x.toString().split('').reverse().join('').toString());
        }
        if(ans< Math.pow(2,31)*-1  || ans > Math.pow(2,31) -1){
            return 0
        }
        else{
            return ans
        }
       // return Math.abs(Math.pow(2,31) -1)<ans ? 0:ans;
    }
