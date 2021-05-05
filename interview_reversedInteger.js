const int = -42442;

const reverseInt = (int) => {
    //toString operator converts integer to string
    const reversedString = int.toString().split("").reverse().join("");
    //parses reversedString and multiplies the integer with the original integers sign
    console.log(parseInt(reversedString) * Math.sign(int));
    return parseInt(reversedString) * Math.sign(int);
};

reverseInt(int);

console.log(reverseInt(int));