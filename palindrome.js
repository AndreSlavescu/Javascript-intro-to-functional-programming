const testString = "Rotor";
const notPalindrome = "Teststring";


const palindromeCheck = string =>{
    //converts main string to lowercase
    const lowerCaseString = string.toLowerCase();

    const reversedString = lowerCaseString
        //splits string at each character
        .split("")
        //reverses string
        .reverse()
        //joins reversed characters into one string
        .join("");
    //checks if main string is equal to reverse string
    return lowerCaseString == reversedString;
};

console.log(palindromeCheck(testString));

//implicit return with narrow function
const palindromeCheck = string => string.lowerCaseString() == string.toLowerCase().split("").reverse().join("")

console.log(palindromecCheck(notPalindrome));

