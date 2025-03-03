// A number is considered perfect if its digits sum up to exactly 10.

// Given a positive integer n, return the n-th perfect number.

// For example, given 1, you should return 19. Given 2, you should return 28.

// SOLUTION
// *****************

const findPerfectNumber = (n)=>{
    let count = 0;
    let num = 18; 
    while(count < n){
        num++;
        if(findSumOfDigits(num) === 10){
            count++;
        }
    }
    return num;
    function findSumOfDigits(num){
        return num.toString().split('').reduce((sum,digit)=> sum + parseInt(digit),0);
    }
}

console.log(findPerfectNumber(1)); //should return 19
console.log(findPerfectNumber(2)); //should return 19