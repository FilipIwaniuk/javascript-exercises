const repeatString = function (string_input, value_input) {

  let desiredOutput = ``;

  if (value_input >= 1) {
    for (let x = 0; x < value_input; x++) {
      desiredOutput += string_input;
    }
    return desiredOutput;
  } else if (value_input < 0){
    return `ERROR`;
  } else {
    return ``;
  }
};

console.log(repeatString('hey', -1));

// Do not edit below this line
module.exports = repeatString;
