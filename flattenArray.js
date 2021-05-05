const nestedArray = [1, 2, [3], [4, [5]]];

const flattenArray = array => {
    return array.reduce(
        //reducer gets two arguments to pass
        (accumulator, iterationValue) =>
            //first argument is the logic which is a callback function
            Array.isArray(iterationValue)
                //if index is an array, you flatten the array to make it a value that appends to the new array
                //spread flattenArray with the value of the iterationValue which is the index
                ? [...accumulator, ...flattenArray(iterationValue)]
                //if index is not an array, you append the value to the array
                : [...accumulator, iterationValue],
        //second argument is the initial value of the accumulator (the list currently)   
        []
    );

};

console.log(flattenArray(nestedArray));