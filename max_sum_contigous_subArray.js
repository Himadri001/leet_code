Given an array Arr[] of N integers. Find the contiguous sub-array(containing at least one number) which has the maximum sum and return its sum.

class Solution {
    //Function to find the sum of contiguous subarray with maximum sum.
    maxSubarraySum(arr, N){
        let max_sum = -(Math.pow(2,53))-1;
        
        let temp_sum = 0;
        for(let i = 0; i<N;i++){
            
                temp_sum = temp_sum + arr[i];
                if(temp_sum > max_sum) max_sum = temp_sum;
                if(temp_sum<0) temp_sum = 0;
            
            
        }
        return max_sum;
        // code here
    }
