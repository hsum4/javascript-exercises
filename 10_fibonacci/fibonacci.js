const fibonacci = function(num) {

if (typeof num !== 'number'){
    num = Number(num);
}

if (num === 0) return 0;
if (num < 0) return "OOPS";

let result = 1;
let prevNum1 = 1;
let prevNum2 = 1;

for(i = 2 ; i < num; i++){
    result = prevNum1 + prevNum2;
    prevNum2 = prevNum1;
    prevNum1 = result;
}

return result;
};

// Do not edit below this line
module.exports = fibonacci;
