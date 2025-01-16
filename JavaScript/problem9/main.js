// Create a Simple Calculator
// Problem: Create a function simpleCalculator(a, b, operator) that performs basic arithmetic operations (addition, subtraction, multiplication, division) based on the given operator.

// Input/Output Example:

// Input: 5, 3, '+'
// Output: 8

function simpleCalculator(num1,num2,operator){
    switch(operator){
        case '+':
        return num1+num2;
        break;
        case '-':
        return num1-num2;
        break;
        case '*':
        return num1*num2;
        break;
        case '/':
            if(num2==0){
                return 'Error can not division';
            }else{
                return num1/num2;
            }
        break;
        default:
            return 'invalid operator'
    }
}

document.write(simpleCalculator(4,0,'/'));