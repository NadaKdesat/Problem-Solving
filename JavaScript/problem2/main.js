function factorialOfNumber(num){
    let factorial=1;
    for(let i=1; i<=num; i++){
        factorial*=i;
    }
    return factorial;
}
// let userInput = prompt("Enter a value:");
let num=6;
document.write("The factorial of "+ num +" is: "+factorialOfNumber(num));
