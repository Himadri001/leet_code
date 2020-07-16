/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
   let copyArray = [...nums];
    nums.sort((a,b)=>a-b);
    let left = 0;
    let right = nums.length - 1;
    while(left<=right){
        let pivot = left + ((right - left)>>1 ? (right-left) : 0);
        if(target == nums[pivot]) return copyArray.indexOf(target);
        else if(target<nums[pivot]){
            right = pivot -1;
        }
        else{
            left = pivot +1;
        }
    }
    return -1;
};
