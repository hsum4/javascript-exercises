const repeatString = function(string, number) {
    let message = "";
    if (number < 0) {
        return "ERROR";
    }
    for (let i = 0; i < number; i++){
        message += string;
    }
    return message;
};

// Do not edit below this line
module.exports = repeatString;
