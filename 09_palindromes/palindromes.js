const palindromes = function (str) {
const charsToBeRemoved = ["!", " ", ",", "."];
let cleanedString = "";

for (let char of str){
    if(!charsToBeRemoved.includes(char)){
        cleanedString += char.toLowerCase();
    }
}

reversedStr = cleanedString.split("").reverse().join("");

return cleanedString === reversedStr ? true : false;
};

// Do not edit below this line
module.exports = palindromes;
