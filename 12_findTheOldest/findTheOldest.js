const findTheOldest = function(arr) {
    const oldestPerson = arr.sort((a,b) => {
    let personA = (a.yearOfDeath || 2024) - (a.yearOfBirth || 2024);
    let personB = (b.yearOfDeath || 2024) - (b.yearOfBirth || 2024);
    return personB - personA;
    })

    return oldestPerson[0];
};

// Do not edit below this line
module.exports = findTheOldest;
