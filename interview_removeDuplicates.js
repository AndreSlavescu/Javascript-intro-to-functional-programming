//initialize basket array
const basket = ["apple", "pear", "pineapple", "apple", "pear"];

//filters basket array 
const filterFunc = arr =>
    //'filter' iterates over all elements in the array. 'indexOf' stores the first occurance index of an item.
    //if the index of the item does not equal to the stored indexOf the element wont go into the final array.
    arr.filter((item, index) => arr.indexOf(item) == index);

console.log(filterFunc(basket));
//apple and pear only appear once since the indexOf does not equal to the second occurence index of the elements

//use reduce function to remove item from array
//get array as argumet
const reduceFunc = arr =>
    //perform reduce function which provides two arguments "accumulator" and "value"
    arr.reduce(
        (accumulator, value) =>
            //accumulator condition applies if the array includes the current value. If not, the second condition applies
            //Then the value gets added to the array
            accumulator.includes(value) ? accumulator : [...accumulator, value],
        []
    );
    //apple and pear only get included once since the accumulator condition passes the second time
    //this is because the array already has a value "apple" and "pear"
    console.log(reduceFunc(basket));

//remove duplicats using "set" data structure
//create set
const set = new Set(basket);

//shows length of final array
console.log(set.size);

//convert set into array
const setArray = [...set];

console.log(setArray);

//function for set
const setFunc = arr => [...new Set(arr)];

//setFunc produces an array with unique values from any array
console.log(setFunc(basket));
//number array example -> produces array of unique values
console.log(setFunc([1,2,1,3,4,5,3,2,1,3,6,7,8,5,6,5]));

