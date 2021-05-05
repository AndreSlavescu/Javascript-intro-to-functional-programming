//const definition: const means that the identifier can't be reassigned
const test = 123;

console.log(test);

const arr = [1,2,3];

console.log(arr.map(v => v + 1));

const func = (bool) =>{
    if(bool){
        console.log('success');
    }
    else{
        console.log('failure');
    }
};

func(true)