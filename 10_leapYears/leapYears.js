const leapYears = function(checkYear) {
    let retVal = false;
    if (checkYear % 100 == 0 ) {
        if (checkYear % 400 == 0) {
            retVal = true;
        }
    }
    else if (checkYear % 4 == 0) {
        retVal = true;
    }
    
    return retVal;       
};

// Do not edit below this line
module.exports = leapYears;
