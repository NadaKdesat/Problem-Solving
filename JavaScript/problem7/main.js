// Create a function isSorted that checks if an array is sorted in ascending order.
// Examples:
// Input: [1, 2, 3, 4]
// Output: true

// Input: [1, 3, 2]
// Output: false

function isSorted(arr){
    let ascending=true;
    for(let i=0;i<arr.length;i++){
        if(arr[i]<arr[i+=1]){
            ascending=true;
        }else{
            ascending=false;
        }
    }
    return ascending;
}
let num=[5,7,2,1,9];
let num2=[3,6,8,9];
document.write(isSorted(num))