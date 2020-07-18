/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let firstAppear = -1;
    let lastAppear = -1;
    let count = 0;
   for(let i = 0; i <nums.length; i++){
      if(nums[i] == target && count ==0){
          firstAppear = i;
          count++;
      }
       else if(nums[i]== target && count!= 0){
           lastAppear  = i;
           count++
       }
       else{
           //do nothing
       }
   }
    if(nums.length == 1 && count !=0){
        return [firstAppear, firstAppear]
    }
    else if(firstAppear !=-1 & lastAppear == -1) return [firstAppear,firstAppear]
    else{
        return [firstAppear, lastAppear]
    }
    
};
