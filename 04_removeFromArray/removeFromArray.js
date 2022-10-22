"use strict";

const removeFromArray = function (...inputs) {

  const userArray = arguments[0];
  const newCollection = [];

  userArray.forEach((items) => {
    if (!inputs.includes(items)) {
      console.log(items);
      newCollection.push(items);
    }
  }
  );

  return newCollection;
};

// SHOWCASING FUNCTION DISPLAYING ASSIGNMENT OF ARGUMENTS!
const testFunction = function (first, second, third) {
  // PASSING ALL INPUTS INTO WORKABLE ARRAY, SHOWCASE
  const test = [...arguments];
  const testTwp = Array.from(arguments)
  console.log(test);
}

console.log(removeFromArray([2, 3, 4, 5, 56], 5, 3));

// Do not edit below this line
module.exports = removeFromArray;
