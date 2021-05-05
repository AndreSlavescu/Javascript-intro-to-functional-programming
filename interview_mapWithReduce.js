//initialize array
const array = [1, 2, 3, 4, 5];

//define mapped array; v = value and i = index
'const mappedArray = array.map((v,i) => v+i);'

'console.log(mappedArray);'

//define mapping function
const mappingFunction = v => v+1;

const mappedArray = array.map(mappingFunction);

console.log(mappedArray);

//custom mapping with mappingFunction
const customMapping = (array, mappingFunction)=>{
    //reduce function accepts two arguments
    return array.reduce(
        //first argument is the reducer function
        //...accumulator: spreads the accumulator
        (accumulator,value)=>[...accumulator,mappingFunction(value)],
        //second argument is the initial accumulator
        []
    );
};

console.log(customMapping(array, mappingFunction));

//visual analysis
[...[],1+1]  //initially we spread the empty array which is coming from the initial accumulator.
//Spreading empty array yields nothing so we apply the mappingFunction to the first value which is (1)+1 
[...[2],2+1] //the accumulator now equals to the array which contains 2, this yields 2. 
//We then apply the mapping function to the next value which is (2)+1 
[...[2,3],3+1]//continues iteration from above
...