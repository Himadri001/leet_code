/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var join_array = [];
   // var nums1c = 0;
    var median = 0;
    join_array = nums1.concat(nums2);
    join_array =  join_array.sort((a,b)=>a-b);
    if(join_array.length %2 == 0){
        let lengths = join_array.length /2;
        let point1 = join_array[lengths-1];
        let point2 = join_array[lengths];
        median  = (point1+point2)/2;
        
    }
    if(join_array.length%2==1){
        let length = Math.trunc(join_array.length / 2)
        median = join_array[length] ;
    }
    return median;
};