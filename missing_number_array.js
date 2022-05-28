Given an array of size N-1 such that it only contains distinct integers in the range of 1 to N. Find the missing element.

class Solution{
    MissingNumber(array,n){
        let sum_total = n*(n+1)/2;
        let sum = 0;
        for(let i = 0;i<n-1;i++){
            sum = sum + array[i];
           // console.log(sum_total,sum);
        }
        return (sum_total - sum);
       
    }
}
