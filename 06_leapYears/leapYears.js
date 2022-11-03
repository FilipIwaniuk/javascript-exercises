const leapYears = function (input) {
  if (input % 4 === 0 && (input % 400 === 0 || input % 100 !== 0)) {
    return true;
  } else {
    return false;
  }
};

console.log(leapYears(2000));

// Do not edit below this line
module.exports = leapYears;
