function find_start (arr,target){
    if(arr[0] == target) return target;
    let len = arr.length - 1;
    let left = 0;
    let right = len;
    while(left<right){
        let mid = (left+right)/2;
        if(arr[mid] == target && arr[mid-1] < target) return mid;
        else if(arr[mid] > target) right = mid-1;
        else left = mid +1;
    }
    return -1;
}
