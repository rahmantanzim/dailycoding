// Write a function, add_subtract, which alternately adds and subtracts curried arguments. Here are some sample operations:

// add_subtract(7) -> 7

// add_subtract(1)(2)(3) -> 1 + 2 - 3 -> 0

// add_subtract(-5)(10)(3)(9) -> -5 + 10 - 3 + 9 -> 11
const add_subtract = (num)=>{
    let sum = num; 
    let isAdd = true;
     const innerF = (nextNum)=>{
        sum = isAdd ? sum + nextNum : sum - nextNum; 
        isAdd = !isAdd;
        return innerF;
     }
     innerF.toString = ()=> sum;

     return innerF;
}

console.log(add_subtract(1)(7)(4).toString());