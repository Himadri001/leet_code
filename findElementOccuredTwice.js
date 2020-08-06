/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findDuplicates = function(nums) {
    let numSet = new Set(); let duplicates = [];
    nums.forEach((element)=>{
     if(numSet.has(element)){
         duplicates.push(element);
     }
        else{
            numSet.add(element);
        }
    });
    return duplicates;
};
