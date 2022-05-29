number of pairs in two arrays where x^y>y^x


class Solution {
     //Function to count number of pairs such that x^y is greater than y^x. 
    countPairs(X, Y, M, N)
    {
        let min_length = Math.min(M,N);
        let min_array_length  = min_length == M ? M : N;
        let max_array_length = min_length == M ? N : M;
        let min_array  = min_length == M ? X : Y;
        let max_array = min_length == M ? Y : X;
        let result_count = 0;
       // console.log(min_array_length,max_array_length,min_array,max_array)
    for(let i = 0;i<min_array_length; i++){
        let j = 0;
        while(j<max_array_length){
            let first_power = Math.pow(max_array[j],min_array[i]);
            let second_power = Math.pow(min_array[i],max_array[j]);
           // console.log("first power", first_power, "second_power", second_power);
            if(first_power > second_power) result_count++;
            //console.log(result_count);
            j++
        }
    }
    return result_count;
    }
}
