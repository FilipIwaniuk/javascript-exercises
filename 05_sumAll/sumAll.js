const sumAll = function (lowerBound, upperBound) {

  const lower = arguments[0];
  const upper = arguments[1];
  let total = 0;
  let counter = 0;
   
  if (lower < upper) {
    for (let x = 0; x < upper; x++) {
      counter++; 
      total += counter;
      console.log(`counter  ---- ${counter}`);
    }
  }

  return total;

};


console.log(sumAll(1,4));

// Do not edit below this line
module.exports = sumAll;
