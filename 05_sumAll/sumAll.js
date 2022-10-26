const sumAll = function (lowerBound, upperBound) {

  // DECLARATION OF VARIABLES
  const lower = arguments[0];
  const upper = arguments[1];

  // VERIFICATION OF INPUTS TYPES
  let typeCheck = typeof lower;
  let type = typeof upper;

  // OUTPUT OF TYPES OF VARIABLES
  console.log(typeCheck);
  console.log(type);

  // COUNTER/ITERATOR VARIABLES 
  let total = 0;
  let counter = 0;

  // SHOWCASE OF LENGTH OF INPUTS  
  console.log(arguments.length);

  if (arguments.length === 2 && lower >= 1 && upper >= 1 && !isNaN(upper) && !isNaN(lower)) {
  if (lower < upper) {
    for (let x = 0; x < upper; x++) {
      counter++; 
      total += counter;
      // console.log(`counter  ---- ${counter}`);
    }
  } else {
    for (let x = 0; x < lower; x++) {
      counter++;
      total += counter;
      // console.log(`counter  ---- ${counter}`);
    } 
  }

  } else {
    return `ERROR`;
  }

  return total;

};

console.log(sumAll(3, 1, "90"));

// Do not edit below this line
module.exports = sumAll;
