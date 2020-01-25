/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    let max = 0; let subString = "";
    for (let i = 0; i<s.length; i++){
        let car = s.charAt(i);
        let index = subString.indexOf(car);
        if(index != -1){
           subString = subString.substr(index+1); 
        }
        subString +=car;
        max = Math.max(max, subString.length);
    }
    return max
};