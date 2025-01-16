// Check if a Number is Prime
// Problem: Create a function isPrime(num) that checks if a number is prime. A prime number is only divisible by 1 and itself.

// Input/Output Example:

// Input: 7

// Output: true

// Input: 10

// Output: false




// #1

// function isPrime(num) {
//     if (num === 1) {
//         return false;
//     } else if (num === 2) {
//         return true;
//     } else {
//         for (let i = 2; i < Math.sqrt(num); i++) {
//             if (num % i === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }



//#2

// function isPrime(num){
//     for(let i =1; i<=num; i++){
//         if(i==num || i==1) continue
//         else if(num % i == 0 )return false;
//     }
//      return true

// }

//#3

function isprime(num) {
    if (num === 1) {
        return false;
    }
    else {
        for (var i = 2; i < num; i++) {
            if (num % i === 0) {
                return false;
            }
        }
        return true;
    }
}
console.log(isprime(2));

