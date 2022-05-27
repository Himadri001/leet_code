//Given an array of distinct integers. The task is to count all the triplets such that sum of two elements equals the third element.




class Solution {
    
    countTriplet(arr,n){
        let triplet_count = 0;
        arr.sort((a,c) => a-c);
       for(let i= 0 ;i<n;i++){
        let j = 0;
        let k = i - 1;
        while(j<k){
            if(arr[j]+arr[k] < arr[i]){
                j +=1
            }
            else if(arr[j]+arr[k] > arr[i]){
                k -=1;
            }
            else if(arr[j]+arr[k] == arr[i]){
                triplet_count +=1;
                j++;
            }
        }
       }
       return triplet_count;
    }
}
