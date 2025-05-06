const sumAll = function(startNum, endNum) {
    //checks for negative number
    if (startNum < 0 || endNum < 0 ) {
        return ("ERROR");
    }  
    // checks for decimal numbers 
    regex = /[.]/;
    if (regex.test(startNum) || regex.test(endNum)) {
        return ("ERROR");
    }

    if(typeof startNum !== "number" || typeof endNum !== "number")  {
        return("ERROR");
    }

    // code starts
    let sum = 0, start = 0, end = 0;
    if ( startNum > endNum ) {
        start = endNum ; 
        end = startNum ;   
    } 
    else if ( startNum < endNum) {
        start = startNum;
        end = endNum;
    }

    for(let i=start ; i<=end ; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
