// Write a function, add_subtract, which alternately adds and subtracts curried arguments. Here are some sample operations:

// add_subtract(7) -> 7

// add_subtract(1)(2)(3) -> 1 + 2 - 3 -> 0

// add_subtract(-5)(10)(3)(9) -> -5 + 10 - 3 + 9 -> 11


const add_subtract = (num)=>{
    let sum = num; // get a variable to store the total
    let isAdd = true; // variable which decides addition or subtraction
    const inner = (nextNum)=>{
        sum = isAdd ? sum+ nextNum : sum - nextNum; 
        isAdd = !isAdd; //toggle addition in every call
        return inner; //cycle continues
    }
    //JS give you the ability to overrride toString method bu using custom logic.
    //By defining inner.toString, we tell JavaScript to use the running sum whenever it needs to convert the inner function to a string.
    inner.toString = ()=> sum;
    //lets return the inner 
    return inner;

}
console.log("TOTAL: ",add_subtract(-5)(10)(3)(9).toString());


// A strobogrammatic number is a positive number that appears the same after being rotated 180 degrees. For example, 16891 is strobogrammatic.

// Create a program that finds all strobogrammatic numbers with N digits.