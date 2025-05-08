const palindromes = function (palinString) {
    // remove punctuation
    palinString = palinString.replace(/\W/g, '')
    //make all lowercase
    palinString = palinString.toLowerCase();
    // get midpoint and end
    let len = palinString.length;
    let midPoint = 0, secondHalf; 
    if (len % 2 ) {
        midPoint = Math.floor(len  / 2) + 1;
        secondHalf = palinString.slice(midPoint - 1)
    }  else {
      midPoint =   len / 2;
      secondHalf = palinString.slice(midPoint);
    } 
    let firstHalf =  palinString.slice(0,midPoint);
    secondHalf = secondHalf.split('').reverse().join('');

    return firstHalf === secondHalf;
    
    
};

// Do not edit below this line
module.exports = palindromes;
