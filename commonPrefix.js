/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if(strs.length == 0) return '';
    let resultPrefix = strs[0];
    for(let i= 0; i <strs.length; i++){
        while(strs[i].indexOf(resultPrefix)!=0){
            resultPrefix = resultPrefix.substring(0,resultPrefix.length -1);
        }
    }
    return resultPrefix;
};
