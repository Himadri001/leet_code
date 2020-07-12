/**
 * @param {number} n
 * @return {number}
 */
var arrangeCoins = function(n) {
  let rowCount = 0;
 // let elementPerRow = 0;
  while(n>rowCount){
      rowCount ++;
      n = n - rowCount;
  }
    return rowCount;
};
