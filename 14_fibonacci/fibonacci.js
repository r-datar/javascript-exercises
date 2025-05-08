const fibonacci = function(nth) {
    
    if (typeof nth === "string") nth = +nth;
    if (nth < 0) return "OOPS";
    if (nth == 0) return 0;
    if (nth == 1 || nth == 2) return 1;


    let start = [0,1];
    let addition = 0;

    for(let i = 2; i <= nth; i++) {
    
        addition = start[i-1] + start[i - 2];
        start[i] = addition;
       
    }
    return addition;
};

// Do not edit below this line
module.exports = fibonacci;
