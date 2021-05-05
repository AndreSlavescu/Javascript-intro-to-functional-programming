const anagram1 = "Astronomer";
const anagram2 = "Moon Starer";
const notAnagram = "hellow world";

const anagramCheck = (string1, string2)=> {
    //filter char.match filters out all special characters
    const modifyString = string =>
        string
            .toLowerCase()
            .split("")
            .sort()
            .filter(char => char.match(/[a-zA-z]/))
            .join("");
    //sorts letters in anagram in alphabetical order
    console.log("first: ", modifyString(string1));
    console.log("second: ", modifyString(string2));

    console.log(modifyString(string1) == modifyString(string2));
    return modifyString(string1) == modifyString(string2);
};

//pass strings to check if they are anagrams
anagramCheck(anagram1, anagram2); //true
anagramCheck(anagram1, notAnagram); //false