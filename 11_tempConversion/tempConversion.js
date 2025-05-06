const convertToCelsius = function(temp) {
  let cel = (temp - 32 ) * ( 5 / 9) ;
  return cel = Number.isInteger(cel) ? +cel : +cel.toFixed(1) 
};

const convertToFahrenheit = function(temp) {
  // f = (c * 9 / 5 ) + 32 
  let fahr = (temp * ( 9 / 5) ) + 32 ;
  return fahr = Number.isInteger(fahr) ? +fahr : +fahr.toFixed(1) 
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
