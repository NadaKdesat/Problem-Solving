function oddOrEven(num1,num2){
    if(num1<num2){
        for(let i=num1;i<=num2;i++){
            if(i%2==0){
                console.log(i+' Is: Even')
            }else{
                console.log(i+' Is: Odd')
            }
        }
    }else{
        console.log('The first number must be smaller than the second number.');
    }
}

function sumOfOddAndEven(num1,num2){
    sumOfEven=0;
    sumOfOdd=0;
    if(num1<num2){
        for(let i=num1;i<=num2;i++){
            if(i%2==0){
                sumOfEven+=i;
            }else{
                sumOfOdd+=i;
            }
        }
        console.log('The sum of even number is: '+sumOfEven)
        console.log('The sum of odd number is: '+sumOfOdd)
    }else{
        console.log('The first number must be smaller than the second number.');
    }
}

num1=20;
num2=30;
oddOrEven(20,30);
sumOfOddAndEven(20,30);