const sumAll = function(firstNum, secondNum) {
    let finalSum = 0;
    if (firstNum < 0 || secondNum < 0 || !Number.isInteger(firstNum) || !Number.isInteger(secondNum)){
        return "ERROR";
    }
    else if (firstNum < secondNum){
        for (i = firstNum; i <= secondNum; i++){
            finalSum += i;
        }
    }
    else {
        for (i = secondNum; i <= firstNum; i++){
            finalSum += i;
        }
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
