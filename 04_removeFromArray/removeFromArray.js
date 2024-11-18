const removeFromArray = function(array, ...toBeRemoved) {
    for (let i = 0; i < toBeRemoved.length; i++){
        while (array.indexOf(toBeRemoved[i]) !== -1){
            array.splice(array.indexOf(toBeRemoved[i]), 1);
        }
    }
    return array;
};

// Do not edit below this line
module.exports = removeFromArray;
