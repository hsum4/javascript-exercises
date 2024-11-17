const removeFromArray = function(array, ...toBeRemoved) {
    for (let i = 0; i < toBeRemoved.length; i++){
        let value = toBeRemoved[i];
        while (array.indexOf(value) !== -1){
            array.splice(array.indexOf(value), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
