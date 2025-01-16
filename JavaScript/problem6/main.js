// Create a function findMax that finds the maximum number in an array.
// Examples:
// Input: [3, 7, 1, 9, 2]
// Output: 9

// Input: [-5, -1, -10]
// Output: -1

function findMax(arr){
    max=arr[0];
    for(let i=1;i<arr.length;i++){
        if(arr[0]<arr[i]){
            max=arr[i]  
        }
    }
    return max;
}

let number=[-8,9,4,7,33,-43];
document.write('The max munber is: '+findMax(number))