const ftoc = function(input) {
  return Math.round((input-32) * .5556);
};

const ctof = function(input) {
  return Math.round((input*1.8) + 32);
};


console.log(ftoc(50));
console.log(ctof(30));

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
