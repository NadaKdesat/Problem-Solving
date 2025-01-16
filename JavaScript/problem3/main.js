function printOddNum(num1, num2) {
    if (num1 < num2) {
        for (let i = num1; i <= num2; i++) {
            if(i % 2 !=0)
            console.log(i);
        }
    }else{
        console.log('The first number must be smaller than the second number.');
    }
}

let num1 = prompt("Enter a value:");
let num2 = prompt("Enter a value:");
printOddNum(num1,num2);