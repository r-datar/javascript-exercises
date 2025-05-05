const repeatString = function(original,repeatTimes) {
    let newString = '';
    if (repeatTimes < 0) {
        return "ERROR";

    }
    for(let i=0; i < repeatTimes; i++) {
        newString = newString + original;
    }
    return newString;
};

// Do not edit below this line
module.exports = repeatString;
