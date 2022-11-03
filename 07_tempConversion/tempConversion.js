const ftoc = function(input) {
  return Math.round((input-32) * (5/9) * 10) / 10;
};

const ctof = function(input) {
  return Math.round(((input*1.8) + 32) * 10) / 10;
};


console.log(ftoc(50));
console.log(ctof(30));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
