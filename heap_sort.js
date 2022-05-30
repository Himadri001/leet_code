
class Heap {
    constructor(){
        this.heap = [];
    }
    parentIndex (index){
        return Math.floor((index-1)/2);
    }
    leftIndex (index){
        return 2*index+1;
    }
    rightIndex(index){
        return 2*index+2;
    }
    swap(a,b){
        let temp= this.heap[a];
        this.heap[a] = this.heap[b];
        this.heap[b] = temp;
    }
    insert(item){
        this.heap.push(item);
        //console.log(this.heap);
        let index = this.heap.length-1;
        let parent = this.parentIndex(index);
        // console.log("parent",parent);
        // console.log("index",index);
        while(this.heap[parent] && this.heap[parent]<this.heap[index]){
            this.swap(parent,index);
            index = this.parentIndex(index);
            parent = this.parentIndex(index);
        }
    }
    delete (){
        //console.log(this.heap);
        let item = this.heap.shift();
        this.heap.unshift(this.heap.pop());
        let index = 0;
        let leftIndex = this.leftIndex(index);
        let rightIndex = this.rightIndex(index);
        while(this.heap[leftIndex] && this.heap[leftIndex] >this.heap[index] || this.heap[rightIndex] >this.heap[index] ){
          var max = leftIndex;
        if(this.heap[rightIndex] && this.heap[rightIndex] >this.heap[index]){max = rightIndex };
        this.swap(max,index);
        index = max;
        leftIndex = this.leftIndex(max);
        rightIndex = this.rightIndex(max);  
        }
        return item;
    }

}
function heapsort(arr){
    let sorted = [];
    var heap1 = new Heap();
    for(let i = 0;i<arr.length;i++){
        heap1.insert(arr[i]);
       // console.log(heap1);
    };
    for(let i = 0; i<arr.length;i++){
        sorted.push(heap1.delete());
        console.log(sorted);
    }
    return sorted;
}
console.log(heapsort([1, 6, 2, 3, 7, 3, 4, 6, 9]));
