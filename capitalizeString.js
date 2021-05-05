const testString = "The quick brown fox jumps over the lazy dog";

const capitalizeString = string =>{
    const splitString = string.split(" ");
    console.log(splitString);
    const capitalizeStringArray = splitString.map(
        //maps to the first letter of each individual word. v.slice(1) removes first letter
        //then it concatenates to the uppercase letter making the whole word
        v=>v[0].toUpperCase()+v.slice(1)
    );
    console.log(capitalizeStringArray);

    const result = capitalizeStringArray.join(" ");
    console.log(result);

    return result;
};

capitalizeString(testString);
