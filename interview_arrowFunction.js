//rewrite normal function to arrow funciton
const addFive = function(num){
    return num + 5;
};

console.log(addFive(5));

//Does not require function statement 
const addFiveArrow = num =>{
    return num + 5; 
};

console.log(addFiveArrow(5));

//single line function. Does not require parentheses or return statement since there is only one argument 
const addFiveArrowImplicit = num => num + 5;

console.log(addFiveArrowImplicit(5));

//no arguments 
const noArgArrow = () => true;

console.log(noArgArrow());

//couple arguments. Use parentheses with arguments inside
const coupleArgArrow = (arg1, arg2) => arg1 + arg2;

console.log(coupleArgArrow(2, 4));